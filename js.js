let button = document.getElementById('button');
var all1 = document.getElementById('all1');
var all2 = document.getElementById('all2');
var all3 = document.getElementById('all3');
var client1 = document.getElementById('client1');
var clients = document.getElementById('clients');


var item1 = document.getElementById('item1');
var input1 = document.getElementById('input1');
var inputDiv = document.getElementById('inputDiv');
var zero1 = document.getElementById('zero1');
var box1 = document.getElementById('box1');
var cartoon1 = document.getElementById('cartoon1');
var cartoonTitle1 = document.getElementById('cartoonTitle1');
var price1 = document.getElementById('price1');

var select1 = document.getElementById('select1');







item1.onclick = function () {
    inputDiv.style.display = 'block';
    select1.style.display = 'block';
   
}



input1.onkeyup = function () {
    zero1.innerHTML = input1.value;
}


box1.onclick = function () {
    if(box1.value == 'كرتونة'){
        box1.value = 'علبة';
        price1.innerHTML = 50;
        price1.innerHTML = price1.innerHTML*input1.value
    } 
      
    else {
        box1.value = 'كرتونة';
        price1.innerHTML = 300;
        price1.innerHTML = price1.innerHTML*input1.value
    }




  
}










button.onclick = function () {
    all1.style.display = 'none';
    all2.style.display = 'block';
}

client1.onclick = function () {
    all2.style.display = 'none';
    all3.style.display = 'block';
    clients.style.display = 'none'
}









