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
var fixed = document.getElementById('fixed');
var one = parseInt(document.getElementById('one').value);
var two = parseInt(document.getElementById('two').value);

var result = document.getElementById('result');






item1.onclick = function () {
    inputDiv.style.display = 'block';
    box1.style.display = 'block';
   
}


input1.onkeyup = function () {
    one = price1.innerHTML*input1.value;
    zero1.innerHTML = input1.value
    
}



box1.onclick = function () {
    if(box1.value == 'علبة') {
        box1.value = 'كرتونة';
        price1.innerHTML = 300;
        cartoonTitle1.innerHTML = box1.value;
        
       
       

    }  else {
        box1.value = 'علبة';
        price1.innerHTML = 50;
        cartoonTitle1.innerHTML = box1.value
       
       
    }
}








var item2 = document.getElementById('item2');
var input2 = document.getElementById('input2');
var inputDiv2 = document.getElementById('inputDiv2');
var zero2 = document.getElementById('zero2');
var box2 = document.getElementById('box2');
var cartoon2 = document.getElementById('cartoon2');
var cartoonTitle2 = document.getElementById('cartoonTitle2');
var price2 = document.getElementById('price2');
var select2 = document.getElementById('select2');
var total = document.getElementById('total');



total.onclick = function () {
    result.style.display = 'block';
    result.value = one + two;
    
}


item2.onclick = function () {
    inputDiv2.style.display = 'block';
    box2.style.display = 'block';
   
}


input2.onkeyup = function () {
    two = price2.innerHTML*input2.value
}



box2.onclick = function () {
    if(box2.value == 'علبة') {
        box2.value = 'كرتونة';
        price2.innerHTML = 300;
       
       

    }  else {
        box2.value = 'علبة';
        price2.innerHTML = 50;
        two = price2.innerHTML*input2.value
       
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








