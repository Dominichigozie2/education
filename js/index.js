const main = document.querySelector(".search-section");
const remove = document.querySelector("#remove");
const add = document.querySelector("#search");

add.addEventListener("click", ()=>{
 main.classList.toggle("active");
});

remove.onclick=()=>{
    main.classList.remove("active")
}


const header=document.querySelector(".second-nav");
const sectionOne = document.querySelector(".home");




const sectionOneOption = {};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
    entries.forEach(entry=>{
      if(!entry.isIntersecting){
         header.classList.add("nav-scroll");
      }else{
        header.classList.remove("nav-scroll");
      }
    })
}, sectionOneOption)

sectionOneObserver.observe(sectionOne);







var d = new Date();
var view = document.getElementById("demo").innerHTML=d.toDateString();



