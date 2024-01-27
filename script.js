function animator(value){
    var title=document.getElementById("title");
    title.className=value;
}
function darkmode(){
var section=document.getElementById("section")
 var sidenav= document.getElementById("sidenav");
 var titleLine=document.getElementById("title");
 var menu=document.getElementById("desc");
 var menuBox=document.getElementById("menu-box");
 var button=document.getElementsByTagName("button")

 if(section.style.background=="rgb(17, 17, 17)"){//day
    section.style.background="#FCE5CD";
    sidenav.style.background="#F7D7B5";
    sidenav.style.color="#212529";
    titleLine.style.color="#361C75";
    menu.style.color="#E69138";
    for(let i=0;i<button.length;i++){
        button[i].style.color="black";
   }

 }
 else{//night
 section.style.background="#111111";
 sidenav.style.background="#15151D";
 sidenav.style.color="#E0E0E0";
 titleLine.style.color="#4672FE";
 menu.style.color="white";
 for(let i=0;i<button.length;i++){
     button[i].style.color="white";
}
}
}