// =========================
// Eco Future Green
// script.js
// =========================

// ظهور العناصر أثناء التمرير

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll(".card,.feature,.why-card,.gallery img").forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});


// تأثير تكبير صور المعرض

document.querySelectorAll(".gallery img").forEach((img)=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.className="popup";

popup.innerHTML=`

<span class="close">&times;</span>

<img src="${img.src}">

`;

document.body.appendChild(popup);

popup.querySelector(".close").onclick=()=>{

popup.remove();

};

popup.onclick=(e)=>{

if(e.target===popup){

popup.remove();

}

};

});

});


// تغيير لون الهيدر أثناء التمرير

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(20,60,30,.96)";

}

else{

header.style.background="rgba(34,84,46,.92)";

}

});


// كتابة العنوان تدريجياً

const title=document.querySelector(".hero h1");

const text=title.innerText;

title.innerHTML="";

let i=0;

function typeWriter(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,45);

}

}

window.onload=typeWriter;