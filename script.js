const menu = document.querySelector("#menu");
const menuIcon = document.querySelector("#icon");

menuIcon.addEventListener('click', ()=>{
    if(menu.style.display==='none'){
        menu.style.display = "";
    }
    else{
        menu.style.display = "none";
    }
});