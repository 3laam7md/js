
var btn=document.querySelectorAll(".btn")
var card=document.querySelector("#card")
var btn2=document.getElementById("btn2")
var show=document.getElementById("show")
var totalprice=0

btn.forEach(function(item){
    item.onclick = function(){


      card.innerHTML += item.getAttribute("price")+" "
        card.innerHTML += item.getAttribute("name")+("<br>")
        totalprice += parseInt( item.getAttribute("price"))


        if(card.innerHTML != "" ){
            btn2.style.display = "block"
            show.style.display ="block"
        }

    }


})

btn2.onclick = function(){
   
    show.innerHTML=(totalprice)
}