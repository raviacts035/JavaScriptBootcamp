# DOM Manipulation Assignments 2.0 Batch-Solutions
## This README.md is solutions for all 9-DOM problems given... 
## 1. First_Asseignment 
> ### Task1-Solution
const navEle=document.createElement("li")\
navEle.innerText="Hire me";\
document.querySelector("nav ul").appendChild(navEle)

> ### Task2-Solution
document.querySelector("input").placeholder="Search My Project"
document.querySelector("footer ul").remove()

> ### Task3-solution
document.querySelectorAll("p span")[1].innerText='an Employee'
document.querySelectorAll("p span")[2].innerText='iNeuron Intelligence Pvt Ltd'

> ### Task4-Solution
document.querySelector(".hero-right-section img").src="https://cdn.ineuron.ai/user/profile_pictures/HITESH%20CHOUDHARY.jpg"

> ### Task5-solution
let btnDiv= document.querySelector(".hero-right-section-btns");
let btn= document.querySelector(".hero-right-section-btns button").cloneNode();
btn.innerText="Support Me";
btnDiv.appendChild(btn);

