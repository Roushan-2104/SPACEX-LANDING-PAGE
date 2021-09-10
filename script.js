const toogle = document.getElementById("toogle");
const btn = document.getElementById("menu").addEventListener("click", (e)=>{
    e.preventDefault();
    let open = document.getElementById("menu");
    let closs = document.getElementById("cross");
    open.style.display = "none";
    toogle.style.display = "block";
    closs.style.display = "inline-block";
})
const close = document.getElementById("cross").addEventListener("click" , (e)=>{
    e.preventDefault();
    let openn = document.getElementById("menu");
    let cross = document.getElementById("cross");
    cross.style.display = "none";
    toogle.style.display = "none";
    openn.style.display = "inline-block";
})