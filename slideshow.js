'use strict';

const images =[
  {'id': '1', 'url': './MeusDogs/Filippo.png'},
  {'id': '2', 'url': './MeusDogs/Meg.png'},
  {'id': '3', 'url': './MeusDogs/Nina.png'},
  {'id': '4', 'url': './MeusDogs/pepito.png'},
  {'id': '5', 'url': './MeusDogs/Meg1.png'},
  {'id': '6', 'url': './MeusDogs/Nina2.png'},

]
const containerItems = document.querySelector('#container-items');


const loadImages=(images, container)=> {
  images.forEach(image => {
    container.innerHTML += `
    <div class='item'>
    <img src='${image.url}'</div>`
  })
  
}
loadImages(images, containerItems);
let items= document.querySelectorAll('.item');
const previous =()=>{
  containerItems.appendChild(items[0]);
  items= document.querySelectorAll('.item');
}
const next =()=>{
  const lastItem = items[items.length-1];
  containerItems.insertBefore(lastItem, items[0]);
  items= document.querySelectorAll('.item');
}
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);