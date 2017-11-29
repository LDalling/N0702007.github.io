function openTab(tab) {
    var i;
    var divs = document.getElementsByClassName("navcontent");

    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";
    }

    var tabs = document.getElementsByClassName("navtab");

    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.backgroundColor = "rgb(102,102,102)";
    }

    document.getElementById(tab+"tab").style.backgroundColor = "rgb(102,102,172)";
    document.getElementById(tab+"div").style.display = "block";
}



//Modal by w3Schools
var modal = document.getElementById('myModal');

var images = document.getElementsByClassName('modalImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (i=0 ; i<images.length;i++){
images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

}}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
var span = document.getElementById("myModal");
span.onclick = function() {
  modal.style.display = "none";
}
