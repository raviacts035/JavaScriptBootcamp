# DOM Manipulation Assignments 2.0 Batch-Solutions
## This README.md is solutions for all 9-DOM problems given... 
## 1. First_Asseignment 
> ### Task1-Solution
const navEle=document.createElement("li")\
navEle.innerText="Hire me";\
document.querySelector("nav ul").appendChild(navEle)

> ### Task2-Solution
document.querySelector("input").placeholder="Search My Project"\
document.querySelector("footer ul").remove()

> ### Task3-solution
document.querySelectorAll("p span")[1].innerText='an Employee' \
document.querySelectorAll("p span")[2].innerText='iNeuron Intelligence Pvt Ltd'

> ### Task4-Solution
document.querySelector(".hero-right-section img").src="https://cdn.ineuron.ai/user/profile_pictures/HITESH%20CHOUDHARY.jpg"

> ### Task5-solution
let btnDiv= document.querySelector(".hero-right-section-btns"); \
let btn= document.querySelector(".hero-right-section-btns button").cloneNode(); \
btn.innerText="Support Me"; \
btnDiv.appendChild(btn);

----
## 2. Second_Asseignment
> ### Task1-Solution
document.querySelectorAll(".accordian p")[2].style.display="block";\
document.querySelectorAll(".accordian p")[3].style.display="block"; \
> ### Task2-Solution
let copyP=document.querySelector(".accordian p").cloneNode() \
copyP.innerText="I posses a very good command Full Stack Development technologies like MERN which can be seen in my work over the Github"\
copyP.style.display="block" \
var copyH=document.querySelector(".accordian h3").cloneNode() \
copyH.innerText="Skills" \
var pare=document.createElement("div") \
pare.className="accordian" \
pare.appendChild(copyH) \
pare.appendChild(copyP) \
document.querySelector(".accordian-wrapper").appendChild(pare)

---
## 3. Third_Asseignment
> 1. Task_solution 
document.querySelector(".enterName").placeholder=document.querySelector(".userName").placeholder='FSJS 2.0' \
document.querySelector(".enterMail").placeholder=document.querySelector(".userEmail").placeholder='fsjs@ineuron.ai'
'fsjs@ineuron.ai' \
document.querySelector(".enterMessage").placeholder=document.querySelector(".userMessage").placeholder='Hello World'
'Hello World'

---
## 4. Fourth_Asseignment
> 1. Task_solution

document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor=getComputedStyle(document.querySelector(".clash-card__level--barbarian")).color

document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor=getComputedStyle(document.querySelector(".clash-card__level--archer")).color

document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor=getComputedStyle(document.querySelector(".clash-card__level--giant")).color

document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor=getComputedStyle(document.querySelector(".clash-card__level--goblin")).color

document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor=getComputedStyle(document.querySelector(".clash-card__level--wizard")).color

for (x of [...document.querySelectorAll(".stat")]){
    x.style.color="white";
}
for (x of [...document.querySelectorAll(".stat-value")]){
    x.style.color="white";
}

document.querySelector(".clash-card__level--archer+div").innerText="The Archer"

document.querySelector(".clash-card__level--goblin+div").innerText="The Goblin"

## 5. Fifth_Asseignment
> 1.Task_solution

// pro subscription Button  

var tmpBtn=document.createElement("a")\
tmpBtn.innerText="Pro Subscription" \
tmpBtn.className="btn"\
tmpBtn.href="index.html"\
var tmpDiv=document.createElement('div')\
tmpDiv.appendChild(tmpBtn)\
document.querySelector('.nav-center').appendChild(tmpDiv)

var tmpA=document.createElement("a")\
tmpA.innerText="Chinese (7)"\
tmpA.href='#'\
document.querySelector(".text-r+div").appendChild(tmpA)

document.querySelector(".page-footer p a").innerText="Raveendra Inturi"

document.querySelector(".recipe-gallery").appendChild(document.querySelector(".card").cloneNode())\
document.querySelector(".card:nth-child(6)").appendChild(document.createElement("h3"))\
document.querySelector(".card:nth-child(6) h3").innerText="add 6th card here"

document.querySelectorAll(".recipe-text").forEach((ele)=>{ele.style.color="blue"})
