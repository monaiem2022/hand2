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
var total = document.getElementById('total');
var result = document.getElementById('result');


var item2 = document.getElementById('item2');
var input2 = document.getElementById('input2');
var inputDiv2 = document.getElementById('inputDiv2');
var zero2 = document.getElementById('zero2');
var box2 = document.getElementById('box2');
var cartoon2 = document.getElementById('cartoon2');
var cartoonTitle2 = document.getElementById('cartoonTitle2');
var price2 = document.getElementById('price2');
var select2 = document.getElementById('select2');


var item3 = document.getElementById('item3');
var input3 = document.getElementById('input3');
var inputDiv3 = document.getElementById('inputDiv3');
var zero3 = document.getElementById('zero3');
var box3 = document.getElementById('box3');
var cartoon3 = document.getElementById('cartoon3');
var cartoonTitle3 = document.getElementById('cartoonTitle3');
var price3 = document.getElementById('price3');
var select3 = document.getElementById('select3');
var three = parseInt(document.getElementById('three').value);

var item4 = document.getElementById('item4');
var input4 = document.getElementById('input4');
var inputDiv4 = document.getElementById('inputDiv4');
var zero4 = document.getElementById('zero4');
var box4 = document.getElementById('box4');
var cartoon4 = document.getElementById('cartoon4');
var cartoonTitle4 = document.getElementById('cartoonTitle4');
var price4 = document.getElementById('price4');
var select4 = document.getElementById('select4');
var four = parseInt(document.getElementById('four').value);







item1.onclick = function () {
    inputDiv.style.display = 'block';
    box1.style.display = 'block';
   
}


input1.onkeyup = function () {
    one = price1.innerHTML*input1.value;
    zero1.innerHTML = input1.value;

    if(input1.value == ' ' ) {
        zero1.innerHTML = 0
    }
   
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















item2.onclick = function () {
    inputDiv2.style.display = 'block';
    box2.style.display = 'block';
   
}


input2.onkeyup = function () {
    two = price2.innerHTML*input2.value;
    zero2.innerHTML = input2.value;
    if(input2.value == ' ' ) {
        zero2.innerHTML = 0
    }

}



box2.onclick = function () {
    if(box2.value == 'علبة') {
        box2.value = 'كرتونة';
        price2.innerHTML = 300;
        cartoonTitle2.innerHTML = box2.value;

        
       
       

    }  else {
        box2.value = 'علبة';
        price2.innerHTML = 50;
        cartoonTitle2.innerHTML = box2.value;

        
       
    }
}






item3.onclick = function () {
    inputDiv3.style.display = 'block';
    box3.style.display = 'block';
   
}


input3.onkeyup = function () {
    three = price3.innerHTML*input3.value;
    zero3.innerHTML = input3.value;
    if(input3.value == ' ' ) {
        zero3.innerHTML = 0
    }

}



box3.onclick = function () {
    if(box3.value == 'علبة') {
        box3.value = 'كرتونة';
        price3.innerHTML = 300;
        cartoonTitle3.innerHTML = box3.value;

    }  else {
        box3.value = 'علبة';
        price3.innerHTML = 50;
        cartoonTitle3.innerHTML = box3.value;

    }
}




item4.onclick = function () {
    inputDiv4.style.display = 'block';
    box4.style.display = 'block';
   
}


input4.onkeyup = function () {
    four = price4.innerHTML*input4.value;
    zero4.innerHTML = input4.value;

    if(input4.value == ' ' ) {
        zero4.innerHTML = 0
    }
   
}



box4.onclick = function () {
    if(box4.value == 'علبة') {
        box4.value = 'كرتونة';
        price4.innerHTML = 300;
        cartoonTitle4.innerHTML = box4.value;
        
        
        
       
       

    }  else {
        box4.value = 'علبة';
        price4.innerHTML = 50;
        cartoonTitle4.innerHTML = box4.value
       
       
    }
}








var item5 = document.getElementById('item5');
var input5 = document.getElementById('input5');
var inputDiv5 = document.getElementById('inputDiv5');
var zero5 = document.getElementById('zero5');
var box5 = document.getElementById('box5');
var cartoon5 = document.getElementById('cartoon5');
var cartoonTitle5 = document.getElementById('cartoonTitle5');
var price5 = document.getElementById('price5');
var select5 = document.getElementById('select5');
var five = parseInt(document.getElementById('five').value);





item5.onclick = function () {
    inputDiv5.style.display = 'block';
    box5.style.display = 'block';
   
}


input5.onkeyup = function () {
    five = price5.innerHTML*input5.value;
    zero5.innerHTML = input5.value;

    if(input5.value == ' ' ) {
        zero5.innerHTML = 0
    }
   
}



box5.onclick = function () {
    if(box5.value == 'علبة') {
        box5.value = 'كرتونة';
        price5.innerHTML = 300;
        cartoonTitle5.innerHTML = box5.value;
        
    }  else {
        box5.value = 'علبة';
        price5.innerHTML = 50;
        cartoonTitle5.innerHTML = box5.value
    }
}






var item6 = document.getElementById('item6');
var input6 = document.getElementById('input6');
var inputDiv6 = document.getElementById('inputDiv6');
var zero6 = document.getElementById('zero6');
var box6 = document.getElementById('box6');
var cartoon6 = document.getElementById('cartoon6');
var cartoonTitle6 = document.getElementById('cartoonTitle6');
var price6 = document.getElementById('price6');
var select6 = document.getElementById('select6');
var six = parseInt(document.getElementById('six').value);





item6.onclick = function () {
    inputDiv6.style.display = 'block';
    box6.style.display = 'block';
   
}


input6.onkeyup = function () {
    six = price6.innerHTML*input6.value;
    zero6.innerHTML = input6.value;

    if(input6.value == ' ' ) {
        zero6.innerHTML = 0
    }
   
}



box6.onclick = function () {
    if(box6.value == 'علبة') {
        box6.value = 'كرتونة';
        price6.innerHTML = 300;
        cartoonTitle6.innerHTML = box6.value;
        
    }  else {
        box6.value = 'علبة';
        price6.innerHTML = 50;
        cartoonTitle6.innerHTML = box5.value
    }
}





var item7 = document.getElementById('item7');
var input7 = document.getElementById('input7');
var inputDiv7 = document.getElementById('inputDiv7');
var zero7 = document.getElementById('zero7');
var box7 = document.getElementById('box7');
var cartoon7 = document.getElementById('cartoon7');
var cartoonTitle7 = document.getElementById('cartoonTitle7');
var price7 = document.getElementById('price7');
var select7 = document.getElementById('select7');
var seven = parseInt(document.getElementById('seven').value);





item7.onclick = function () {
    inputDiv7.style.display = 'block';
    box7.style.display = 'block';
   
}


input7.onkeyup = function () {
    seven = price7.innerHTML*input7.value;
    zero7.innerHTML = input7.value;

    if(input7.value == ' ' ) {
        zero7.innerHTML = 0
    }
   
}



box7.onclick = function () {
    if(box7.value == 'علبة') {
        box7.value = 'كرتونة';
        price7.innerHTML = 300;
        cartoonTitle7.innerHTML = box7.value;
        
    }  else {
        box7.value = 'علبة';
        price7.innerHTML = 50;
        cartoonTitle7.innerHTML = box7.value
    }
}











total.onclick = function () {
    result.style.display = 'block';
    one = input1.value*price1.innerHTML;
    two = input2.value*price2.innerHTML;
    three = input3.value*price3.innerHTML;
    four = input4.value*price4.innerHTML;
    five = input5.value*price5.innerHTML;
    six = input6.value*price6.innerHTML;
    seven = input6.value*price6.innerHTML;
    result.value = one + two + three + four + five + six + seven;

    inputDiv.style.display = 'none';
    box1.style.display = 'none';
    inputDiv2.style.display = 'none';
    box2.style.display = 'none';
    inputDiv3.style.display = 'none';
    box3.style.display = 'none';
    inputDiv4.style.display = 'none';
    box4.style.display = 'none';
    inputDiv5.style.display = 'none';
    box5.style.display = 'none';
    inputDiv6.style.display = 'none';
    box6.style.display = 'none';
    inputDiv7.style.display = 'none';
    box7.style.display = 'none';



   


    price2.innerHTML = input2.value * price1.innerHTML
    price3.innerHTML = input3.value * price1.innerHTML
    price4.innerHTML = input4.value * price1.innerHTML
    price5.innerHTML = input5.value * price1.innerHTML
    price6.innerHTML = input6.value * price1.innerHTML
    price7.innerHTML = input7.value * price1.innerHTML

   

    
    
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







