const liste=document.getElementById("logos");

const image=document.getElementById("imageLogo");

liste.addEventListener("change",function(){

image.src=this.value;

image.style.display="block";

});

document.getElementById("sms").onclick=function(){

window.location="sms:+33612345678";

}

document.getElementById("formules").onclick=function(){

document.getElementById("prix").style.display="block";

}

document.getElementById("premium").onclick=function(){

document.getElementById("prix").style.display="block";

window.scrollTo({

top:document.body.scrollHeight,

behavior:"smooth"

});

}
