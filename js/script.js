let heros=[
    {
        id:1,
        name:"Batman",
        actor:":bat:",
        age:99,
        producer:"DC",
        poster: "",
        location:"Ciudad",
        date: "",
        suits:["No se*1","No se*2"]
    }
]
let tam=heros.length
console.log(tam)
function newHero(){
    
    let newheroIs={
        id:tam+1,
        name:document.getElementById("char_name").value,
        actor:document.getElementById("act_name").value,
        age:document.getElementById("act_age").value,
        producer:document.getElementById("producer").value,
        poster: document.getElementById("poster").value,
        location:document.getElementById("location").value,
        date: document.getElementById("date").value,
        suits:["No se*1","No se*2"]
    }
    tam=tam+1
    heros.push(newheroIs)
    console.log(newheroIs)
    console.log(heros)
}

function newSuit(){
    suitSpace = getElementById("newInputs")
    forSuit= `<input type="text">`
}
function cancel(){
    let hola = document.getElementById("grpSuites")
    hola.innerHTML=""
}
function newAllow(){
    let hola = document.getElementById("grpSuites")
    if(hola.innerText===""){
        hola.innerHTML=`
            <div class="col">
                <div class="card border-primary mb-3" style="max-width: 100%;">
                    <div class="card-header">
                        Registro de Trajes
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Traje del personaje</h5>
                        <p>En esta sección podrás registrar el nombre de los traje usados por el autor en cada una de las películas.</p>
                        <a class="btn btn-warning" href="#" id="addSuite" onclick="newSuit()">+</a>
                        <div class="" style="width: 100%;">
                            <div class="container body-detail" id="newInputs">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    }
}