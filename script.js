// Get covid19 data of countries using HTML,CSS,JS,Bootstrap

// creation of div,input,button elements in DOM
let div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",foo);//onclick Event and assigning the function 
div.append(input,button);
document.body.append(div);

// let active=document.createElement("div");
// active.setAttribute("id","active");
// let death=document.createElement("div");
// death.setAttribute("id","death");
// let recover=document.createElement("div");
// recover.setAttribute("id","recover");
// let err=document.createElement("div");
// err.setAttribute("id","err");
// div.append(input,button,active,death,recover,err);
// document.body.append(div);

async function foo(){  //async,await,try and catch methods for button event
    try {      
        
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let res= await fetch(url);
    let res1= await res.json();
    console.log(res1);
    let index=res1.length-1;
    console.log(res1[index].Active);


//Creation of container for card responsivness
    let container=document.createElement("div");
    container.setAttribute("class","container");
    let row=document.createElement("div");
    row.setAttribute("class","row");
    let col=document.createElement("div");
    col.setAttribute("class","col-sm-4");
    col.style.marginLeft="350px";
    col.style.marginTop="10px";

//Bootstrap card creation using DOM
    let ul=document.createElement("ul");
    ul.setAttribute("class","list-group");
    ul.style.textAlign="center";

    let active=document.createElement("li")
    active.classList.add("list-group-item","list-group-item-primary");
    active.innerHTML=`Total Active Case: ${res1[index].Active}`

    let death=document.createElement("li")
    death.classList.add("list-group-item","list-group-item-danger");
    death.innerHTML=`Total Death Case: ${res1[index].Deaths}`

    let recover=document.createElement("li")
    recover.classList.add("list-group-item","list-group-item-success");
    recover.innerHTML=`Total Recovered Case: ${res1[index].Recovered}`

    //appen all elements to the document by parent-child relation
    ul.append(active,death,recover);
    col.append(ul);
    row.append(col);
    container.append(row);
    document.body.append(container);
    } catch (error) {
        let ul=document.createElement("ul");
        ul.setAttribute("class","list-group");

        let err=document.createElement("li");
        err.classList.add("list-group-item","list-group-item-danger");
        err.style.textAlign="center";
        err.innerHTML=`Data Not Found !!!`
        ul.append(err);
        document.body.append(ul);// TO show error
    }
}

