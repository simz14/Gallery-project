"use strict"

const imagesLinks = ["assets/images/CarinaNebula.webp","assets/images/Jupiter.webp","assets/images/Earth.jpg","assets/images/Nebula.jpg","assets/images/Sun.jpg"]
const imagesNames = ["Carina Nebula","Jupiter","Earth","Nebula", "Sun"]
const imagesDescription = ["Hubble's view of the nebula shows star birth in a new level of detail. The fantasy-like landscape of the nebula is sculpted by the action of outflowing winds and scorching ultraviolet radiation from the monster stars.","Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system \– more than twice as massive as all the other planets combined.","Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water."," nebula is a giant cloud of dust and gas in space. Some nebulae (more than one nebula) come from the gas and dust thrown out by the explosion of a dying star, such as a supernova.","Our Sun is a 4.5 billion-year-old star \– a hot glowing ball of hydrogen and helium at the center of our solar system."]


const body = document.querySelector("body")
const images = document.querySelectorAll("ul")

//MAKING DESCRIPTION FOR IMAGE  
const description = document.createElement("div")
const desTitle = document.createElement("h1")
const desText = document.createElement("p")

description.className = "description"
desTitle.innerText = imagesNames[0]
desText.innerText = imagesDescription[0]

images[0].appendChild(description)
description.appendChild(desTitle)
description.appendChild(desText)


//ADDING IMAGE TO UL
const mainImgae =images[0]
const newSlide = document.createElement("div")
newSlide.className="imageWrapper"

const img =document.createElement("img")
img.src=imagesLinks[0]
newSlide.appendChild(img)
mainImgae.appendChild(newSlide)

const buttons = document.querySelectorAll("button")
const rigthButton = buttons[1]
const leftButton = buttons[0]


let counter = 1
rigthButton.addEventListener("click",()=>{
  counter++
  if(counter === imagesLinks.length){
    counter=0
  }
  img.src = imagesLinks[counter]
  desTitle.innerText = imagesNames[counter]
  desText.innerText = imagesDescription[counter]
  currentImage(counter)

})

counter=counter-1
leftButton.addEventListener("click",()=>{
  counter--
  if(counter <0){
    counter=imagesLinks.length-1
  }
  img.src = imagesLinks[counter]
  desTitle.innerText = imagesNames[counter]
  desText.innerText = imagesDescription[counter]
  currentImage(counter)
})


//CREATING THUMBNAIL-NAV
for(let i =0;i<imagesLinks.length;i++){
  const thumbnail = images[1]
  thumbnail.className = "navImages"
  
  const navImages = document.createElement("button")
  const navImage = document.createElement("img")

  navImage.src = imagesLinks[i]


  navImages.appendChild(navImage)
  thumbnail.appendChild(navImages)
}

//CHANGINH SLIDES BY CLICKING 
const thumbnails = document.querySelectorAll("ul>button")
const Carina = thumbnails[0]
const Jupiter  = thumbnails[1]
const Earth = thumbnails[2]
const Nebula = thumbnails[3]
const Sun = thumbnails[4]

Carina.addEventListener("click",()=>{
  img.src = imagesLinks[0]
  desTitle.innerText = imagesNames[0]
  desText.innerText = imagesDescription[0]
  counter=0
  currentImage(counter)
})
Jupiter.addEventListener("click",()=>{
  img.src = imagesLinks[1]
  desTitle.innerText = imagesNames[1]
  desText.innerText = imagesDescription[1]
  counter=1
  currentImage(counter)
})
Earth.addEventListener("click",()=>{
  img.src = imagesLinks[2]
  desTitle.innerText = imagesNames[2]
  desText.innerText = imagesDescription[2]
  counter=2
  currentImage(counter)
})
Nebula.addEventListener("click",()=>{
  img.src = imagesLinks[3]
  desTitle.innerText = imagesNames[3]
  desText.innerText = imagesDescription[3]
  counter=3
  currentImage(counter)
})
Sun.addEventListener("click",()=>{
  img.src = imagesLinks[4]
  desTitle.innerText = imagesNames[4]
  desText.innerText = imagesDescription[4]
  counter=4
  currentImage(counter)

  
})

//ADDNG CLASSES TO THUMBNAILS ---> TITLE
for(let i =0;i<thumbnails.length;i++){
  thumbnails[i].title=imagesNames[i]
}


//CREATING STABLE HOVER STYLE FOR CURRENT IMAGE
function currentImage(index){
  const navImage = document.querySelectorAll(".navImages button")
  navImage[index].classList.add("active")
  for(let i =0;i<navImage.length;i++){
    if (i !== index){
      navImage[i].classList.remove("active")
    }
  }
}
