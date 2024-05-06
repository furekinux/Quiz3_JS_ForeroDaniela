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
let contar=0
let fields = document.getElementById("frmDataHero").getElementsByTagName('*');
for(var i = 0; i < fields.length; i++)
{
    fields[i].disabled = true;
}
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
    contar = contar+1
    let inputSpace = document.getElementById("newInputs");

    let wrapper = document.createElement("div");
    wrapper.setAttribute("id",`suitID${contar}`);
    wrapper.classList.add("row");
    wrapper.classList.add("align-items-center");
    
    wrapper.classList.add("justify-content-center");

    let wrapper2 = document.createElement("div");
    wrapper2.setAttribute("id",`suitID${contar}`);
    wrapper2.classList.add("col-sm-7");
    wrapper2.setAttribute("style","width: 100%");


    let wrapper3 = document.createElement("div");
    wrapper3.setAttribute("id",`suitID${contar}`);
    wrapper3.classList.add("col-sm");

    let newinput = document.createElement("input");
    newinput.setAttribute("type","text");
    
    newinput.setAttribute("id",`suit${contar}`);
    newinput.classList.add("form-control");
    
    let newButton = document.createElement("a");
    newButton.innerText="-"
    newButton.setAttribute("href","#");
    newButton.setAttribute("onClick",`delSuit(${contar})`);
    newButton.classList.add("btn");
    newButton.classList.add("btn-danger");
    newButton.classList.add("mt-4");
    
    let label = document.createElement("label");
    label.setAttribute("for",`suit${contar}`);
    label.innerText="Nombre traje"
    
    wrapper2.appendChild(label);
    wrapper2.appendChild(newinput);
    wrapper3.appendChild(newButton);

    wrapper.appendChild(wrapper2);
    wrapper.appendChild(wrapper3);

    inputSpace.appendChild(wrapper);
}

function delSuit(id){
    document.getElementById(`suitID${id}`).remove()

}


function cancel(){
    let hola = document.getElementById("grpSuites")
    hola.innerHTML=""
    var fields = document.getElementById("frmDataHero").getElementsByTagName('*');
    for(var i = 0; i < fields.length; i++)
    {
        fields[i].disabled = true;
    }
}

function newAllow(){
    let hola = document.getElementById("grpSuites");
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
                            <div class="container body-detail">
                                <div class="row justify-content-center" id="newInputs">
                                    
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>`
    }

    let fields = document.getElementById("frmDataHero").getElementsByTagName('*');
    for(var i = 0; i < fields.length; i++)
    {
        fields[i].disabled = false;
    }
}



