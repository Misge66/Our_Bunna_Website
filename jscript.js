let btn = document.getElementById('btn');
let addToCart = document.getElementsByClassName('add_to_cart');

let changeBackground = function(){
    
addToCart.style.color = 'black';
}

btn.addEventListener('mouseover', changeBackground);
