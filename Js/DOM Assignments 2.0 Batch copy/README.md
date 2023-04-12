# DOM Manipulation Assignments 2.0 Batch-Solutions
## This README.md is solutions for all 9-DOM problems/projects given... 
## 01_DOM_Project
> 1.1 Task-Solution

const navEle=document.createElement("li")\
navEle.innerText="Hire me";\
document.querySelector("nav ul").appendChild(navEle)

> 1.2 Task-Solution

document.querySelector("input").placeholder="Search My Project"\
document.querySelector("footer ul").remove()

> 1.3 Task-solution

document.querySelectorAll("p span")[1].innerText='an Employee' \
document.querySelectorAll("p span")[2].innerText='iNeuron Intelligence Pvt Ltd'

> 1.4 Task-Solution

document.querySelector(".hero-right-section img").src="https://cdn.ineuron.ai/user/profile_pictures/HITESH%20CHOUDHARY.jpg"

> 1.5 Task-solution

let btnDiv= document.querySelector(".hero-right-section-btns"); \
let btn= document.querySelector(".hero-right-section-btns button").cloneNode(); \
btn.innerText="Support Me"; \
btnDiv.appendChild(btn);

----
## 02_DOM_Project
> 2.1 Task-Solution

document.querySelectorAll(".accordian p")[2].style.display="block";\
document.querySelectorAll(".accordian p")[3].style.display="block"; \
> 2.2 Task-Solution

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
## 03Third_Asseignment
> 3.1 Task_solution 

document.querySelector(".enterName").placeholder=document.querySelector(".userName").placeholder='FSJS 2.0' \
document.querySelector(".enterMail").placeholder=document.querySelector(".userEmail").placeholder='fsjs@ineuron.ai'
'fsjs@ineuron.ai' \
document.querySelector(".enterMessage").placeholder=document.querySelector(".userMessage").placeholder='Hello World'
'Hello World'

---
## 04_DOM_Project
> 4.1 Task_solution

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

## 05_DOM_Project
> 5.1 Task_solution

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

## 06_DOM_Project
> 6.1Task_solution

document.querySelector(".logo").style.width="50%";
document.querySelector(".logo").src="./assets/ineuron-logo.png";

document.querySelector(".footer_social").appendChild(document.querySelector(".footer_social_ico").cloneNode());\
document.querySelector(".footer_social_ico:nth-child(4)").innerHTML=`'<i class="fa-brands">&#xf08c;</i>'`;

document.querySelector(".app_price").innerHTML=`'<span>$10</span> / month'`

## 07_DOM_Project
> 7.1 Task_solution

`<!-- removing 2.0 Elelments -->`
document.querySelectorAll(".main__languages a").forEach((e)=>{if(e.innerText.slice(-3,e.innerText.length)=="2.0"){document.querySelector(".main__languages").removeChild(e)}})
> 7.2 Task_solution

`<!-- submiting form -->`

document.querySelector(".main__form-input").value="iNeuron" \
document.querySelector("form").submit()

## 08_DOM_Project
> 8.1 Task_solution

document.querySelector(".new").style.overflow="scroll"\
document.querySelector(".new").appendChild(document.querySelector(".hr-line").cloneNode())\
document.querySelector(".new").style.border="4px solid orange"\
var tmpH=document.createElement("h2")\
tmpH.className="new-head"\
tmpH.innerText='This is my custom Heading'\
document.querySelector(".new").appendChild(tmpH)\

> 8.2 Task_solution

document.querySelector();