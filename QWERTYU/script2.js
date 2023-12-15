const box = document.getElementById('box');
const btn = document.getElementsByTagName('button');
const circle = document.getElementsByClassName('circle');
const lime = document.querySelectorAll('.lime');
const birLime = document.querySelector('.lime');

btn[4].style.width = '150px';
lime[1].style.borderRadius = '150px';
circle[2].style.cssText = 'background-color: red; width: 100px; height:100px';



lime.forEach(item => {
    item.style.backgroundColor = 'red';
})