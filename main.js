var click= document.getElementById("letter")
var modal = document.getElementById("myModal")


click.onclick=function(){
  modal.style.display = "block";
}

window.onclick =function(event){
    if (event.target == modal){
        modal.style.display="none";
    }
}