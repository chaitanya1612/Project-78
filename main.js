Name_array{
"Father",
"Mother",
"sister",
}
Image_array{
"father.jpg",
"mother.png",
"sis.png"
}


var i=0;
function nextslide(){
document.getElementById("names").innerHTML=names[i];
document.getElementById("albam").src=images[i];i++;
}