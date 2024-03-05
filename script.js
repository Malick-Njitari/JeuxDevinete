let button=document.getElementById("button");
let form=document.getElementById("form");
let message=document.getElementById("message");
let link=document.getElementById("link");

const nombreSecret=Math.floor(Math.random()*100);
//Ici on a le nombre d'essai qui est à 10 
let attend=10;
// Notre function qui va verifier si les conditions sont respectees ou pas
button.onclick=function()
{
    const input=document.getElementById("input");
    if(input.value != ""){//Dans le cas où notre champ est different de vide

        if(input.value < nombreSecret){
            message.innerText="Le nombre est plus grand que "+input.value+"";
            message.style.color="#999";

        }else if(input.value > nombreSecret){
            message.innerText="Le nombre est plus petit que "+input.value+"";
            message.style.color="#999"
        }
        if(attend==0)
        {
            message.innerText="vous avez perdu il fallait trouvé plutot "+nombreSecret+"!";
            message.style.color="red";
            form.style.display="none";
            link.style.display="flex";
        }
        //Ici on decremente pour diminuer le nombre d'essai 
        attend--;

        if(input.value==nombreSecret)
        {
            message.innerText=" Bravo! vous avez trouvé le nombre qui est  "+nombreSecret+"!";
            message.style.color="green";
            form.style.display="none";
            link.style.display="flex";
        }

    }else{
        message.innerText="Le champ est vide";
        message.style.color="red";
    }
}