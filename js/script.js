let tam = 0

function fetchHeros(){
    let xhr = new XMLHttpRequest();
    let url = "https://6634e1409bb0df2359a30e61.mockapi.io/superhero/hero"
    xhr.open("GET",url,true)
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            tam = response.length
            console.log(tam);

            let showUp = document.getElementById("show")
            showUp.innerHTML= `
            <input id="getHero" type="number" placeholder="ingrese la id o nombre">
            `
        } else if(this.readyState == 4){
            console.log("Error :(",this.statusText);
        }
    }
    xhr.send();
}

const search = document.getElementById("getHero");
search.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function showHero(){
    let xhr = new XMLHttpRequest();
    let id = document.getElementById("getHero").value
    console.log(id)
    let url = `https://6634e1409bb0df2359a30e61.mockapi.io/superhero/hero/${id}`
    xhr.open("GET",url,true)
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            let trajes=response.suits
            console.log(trajes);

            let showUp = document.getElementById("show")
            showUp.innerHTML= `
            <p>Nombre de Superheroe: ${response.name}</p>
            <p>Nombre del Actor: ${response.actor}</p>
            <p>Edad: ${response.age}</p>
            <p>Ciudad de origen: ${response.location}</p>
            <p>Fecha de creación: ${response.creation_date}</p>
            <p>Poster: ${response.poster}</p>
            <p>Productora: ${response.producer}</p>

            <p>Trajes</p>
            `
            trajes.forEach(suit => {
                if(response === "error"){
                    cardImg.innerHTML=`<p>Error</p>`
                } else{
                    let newsuit = document.createElement("li");
                    newsuit.innerText = suit

                    showUp.appendChild(newsuit);
                }
            });
        } else if(this.readyState == 4){
            console.log("Error :(",this.statusText);
        }
    }
    xhr.send();
}

function allowForm(){
    
}
function saveHero(){
    tam= tam+1

    let xhr = new XMLHttpRequest();
    let url = `https://6634e1409bb0df2359a30e61.mockapi.io/superhero/hero`
    xhr.open("POST",url)
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let charName = document.getElementById("char_name").value
    let actAge = document.getElementById("act_age").value
    let poster = document.getElementById("poster").value
    let actName = document.getElementById("act_name").value
    let location = document.getElementById("location").value
    let creationDate = document.getElementById("creation_date").value
    let producer = document.getElementById("producer").value
    
    const newHero = JSON.stringify({
        "name":charName,
        "actor": actName,
        "location": location,
        "poster": poster,
        "age":actAge,
        "creation_date":creationDate,
        "suits":[],
        "producer":producer,
        "id": tam,
    });
    xhr.onload = () =>{
        if(xhr.readyState === 4 && xhr.status ===201){
            console.log(JSON.parse(xhr.responseText));
        } else {
            console.log("Error :(")
        }
    };
    xhr.send(newHero)
}