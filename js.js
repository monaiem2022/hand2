let button = document.getElementById('button');
var all1 = document.getElementById('all1');
var all2 = document.getElementById('all2');
var all3 = document.getElementById('all3');
var client1 = document.getElementById('client1');
var clients = document.getElementById('clients');
var pricenum1 = document.getElementById('pricenum1');
var num1 = document.getElementById('num1');

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
        price1.innerHTML = 600;
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
        price3.innerHTML = 240;
        cartoonTitle3.innerHTML = box3.value;

    }  else {
        box3.value = 'علبة';
        price3.innerHTML = 20;
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
        price4.innerHTML = 600;
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
var cartoonTitle5 = document.getElementById('cartoonTitle5');






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
        price5.innerHTML = 600;
        cartoonTitle5.innerHTML = box5.value;
        
    }  else {
        box5.value = 'علبة';
        price5.innerHTML = 100;
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
var cartoonTitle6 = document.getElementById('cartoonTitle6');






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
        price6.innerHTML = 240;
        cartoonTitle6.innerHTML = box6.value;
        
    }  else {
        box6.value = 'علبة';
        price6.innerHTML = 20;
        cartoonTitle6.innerHTML = box6.value
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
var cartoonTitle7 = document.getElementById('cartoonTitle7');






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
        price7.innerHTML = 200;
        cartoonTitle7.innerHTML = box7.value;
        
    }  else {
        box7.value = 'علبة';
        price7.innerHTML = 50;
        cartoonTitle7.innerHTML = box7.value
    }
}







var item8 = document.getElementById('item8');
var input8 = document.getElementById('input8');
var inputDiv8 = document.getElementById('inputDiv8');
var zero8 = document.getElementById('zero8');
var box8 = document.getElementById('box8');
var cartoon8 = document.getElementById('cartoon8');
var cartoonTitle8 = document.getElementById('cartoonTitle8');
var price8 = document.getElementById('price8');
var select8 = document.getElementById('select8');
var eight = parseInt(document.getElementById('eight').value);
var cartoonTitle8 = document.getElementById('cartoonTitle8');






item8.onclick = function () {
    inputDiv8.style.display = 'block';
    box8.style.display = 'block';
   
}


input8.onkeyup = function () {
    eight = price8.innerHTML*input8.value;
    zero8.innerHTML = input8.value;

    if(input8.value == ' ' ) {
        zero8.innerHTML = 0
    }
   
}

box8.onclick = function () {
    if(box8.value == 'علبة') {
        box8.value = 'كرتونة';
        price8.innerHTML = 240;
        cartoonTitle8.innerHTML = box8.value;
        
    }  else {
        box8.value = 'علبة';
        price8.innerHTML = 20;
        cartoonTitle8.innerHTML = box8.value
    }
}







var item9 = document.getElementById('item9');
var input9 = document.getElementById('input9');
var inputDiv9 = document.getElementById('inputDiv9');
var zero9 = document.getElementById('zero9');
var box9 = document.getElementById('box9');
var cartoon9 = document.getElementById('cartoon9');
var cartoonTitle9 = document.getElementById('cartoonTitle9');
var price9 = document.getElementById('price9');
var select9 = document.getElementById('select9');
var nine = parseInt(document.getElementById('nine').value);
var cartoonTitle9 = document.getElementById('cartoonTitle9');






item9.onclick = function () {
    inputDiv9.style.display = 'block';
    box9.style.display = 'block';
   
}


input9.onkeyup = function () {
    nine = price9.innerHTML*input8.value;
    zero9.innerHTML = input9.value;

    if(input9.value == ' ' ) {
        zero9.innerHTML = 0
    }
   
}

box9.onclick = function () {
    if(box9.value == 'علبة') {
        box9.value = 'كرتونة';
        price9.innerHTML = 120;
        cartoonTitle8.innerHTML = box9.value;
        
    }  else {
        box9.value = 'علبة';
        price9.innerHTML = 10;
        cartoonTitle9.innerHTML = box9.value
    }
}





var item10 = document.getElementById('item10');
var input10 = document.getElementById('input10');
var inputDiv10 = document.getElementById('inputDiv10');
var zero10 = document.getElementById('zero10');
var box10 = document.getElementById('box10');
var cartoon10 = document.getElementById('cartoon10');
var cartoonTitle10 = document.getElementById('cartoonTitle10');
var price10 = document.getElementById('price10');
var select10 = document.getElementById('select10');
var ten = parseInt(document.getElementById('ten').value);





item10.onclick = function () {
    inputDiv10.style.display = 'block';
    box10.style.display = 'block';
   
}


input10.onkeyup = function () {
    ten = price10.innerHTML*input10.value;
    zero10.innerHTML = input10.value;

    if(input10.value == ' ' ) {
        zero10.innerHTML = 0
    }
   
}

box10.onclick = function () {
    if(box10.value == 'علبة') {
        box10.value = 'كرتونة';
        price10.innerHTML = 600;
        cartoonTitle10.innerHTML = box10.value;
        
    }  else {
        box10.value = 'علبة';
        price10.innerHTML = 25;
        cartoonTitle10.innerHTML = box10.value
    }
}










var nametitle = document.getElementById('nametitle');
var discounttitle = document.getElementById('discounttitle');
var name1 = document.getElementById('name1');
var name2 = document.getElementById('name2');
var name3 = document.getElementById('name3');
var name4 = document.getElementById('name4');
var name5 = document.getElementById('name5');
var name6 = document.getElementById('name6');
var name7 = document.getElementById('name7');
var name8 = document.getElementById('name8');
var name9 = document.getElementById('name9');
var name10 = document.getElementById('name10');

var discount1 = document.getElementById('discount1');
var discount2 = document.getElementById('discount2');
var discount3 = document.getElementById('discount3');
var discount4 = document.getElementById('discount4');
var discount5 = document.getElementById('discount5');
var discount6 = document.getElementById('discount6');
var discount7 = document.getElementById('discount7');
var discount8 = document.getElementById('discount8');
var discount9 = document.getElementById('discount9');
var discount10 = document.getElementById('discount10');


var print1 = document.getElementById('print1');
var print2 = document.getElementById('print2');
var print3 = document.getElementById('print3');
var print4 = document.getElementById('print4');
var print5 = document.getElementById('print5');
var print6 = document.getElementById('print6');
var print7 = document.getElementById('print7');
var print8 = document.getElementById('print8');
var print9 = document.getElementById('print9');
var print10 = document.getElementById('print10');


var final1 = document.getElementById('final1');
var final2 = document.getElementById('final2');
var final3 = document.getElementById('final3');
var final4 = document.getElementById('final4');
var final5 = document.getElementById('final5');
var final6 = document.getElementById('final6');
var final7 = document.getElementById('final7');




var bottle1 = document.getElementById('bottle1');
var bottle2 = document.getElementById('bottle2');
var bottle3 = document.getElementById('bottle3');
var bottle4 = document.getElementById('bottle4');
var bottle5 = document.getElementById('bottle5');
var bottle6 = document.getElementById('bottle6');
var bottle7 = document.getElementById('bottle7');
var bottle8 = document.getElementById('bottle8');
var bottle9 = document.getElementById('bottle9');
var bottle10 = document.getElementById('bottle10');



var finaldisc1 = document.getElementById('finaldisc1');
var finaldisc2 = document.getElementById('finaldisc2');
var finaldisc3 = document.getElementById('finaldisc3');
var finaldisc4 = document.getElementById('finaldisc4');
var finaldisc5 = document.getElementById('finaldisc5');
var finaldisc6 = document.getElementById('finaldisc6');
var finaldisc7 = document.getElementById('finaldisc7');
var finaldisc8 = document.getElementById('finaldisc8');
var finaldisc9 = document.getElementById('finaldisc9');
var finaldisc10 = document.getElementById('finaldisc10');






total.onclick = function () {
    total.innerHTML = 'اجمالي القيمة بعد الخصم';
    total.style.background = 'none';
    total.style.color = 'black';
    total.style.borderBottom = '1px solid red';
    finish.style.display = 'block';
    result.style.display = 'block';
    if(cartoonTitle1.innerHTML == 'كرتونة') {
        one = input1.value*price1.innerHTML-30*zero1.innerHTML; 
        discount1.innerHTML = 30*zero1.innerHTML;
    } else {
        one = input1.value*price1.innerHTML-1*zero1.innerHTML; 
        discount1.innerHTML = 1*zero1.innerHTML;
    }
    //  totaldis.innerHTML = 'اجمالي الخصم' + ' '  + 30*zero1.innerHTML;
     
    // two = input2.value*price2.innerHTML-10*zero2.innerHTML; 

    if(cartoonTitle2.innerHTML == 'كرتونة') {
        two = input2.value*price2.innerHTML-10*zero2.innerHTML; 
        discount2.innerHTML = 10*zero2.innerHTML;
    } else {
        two = input2.value*price2.innerHTML-1*zero2.innerHTML; 
        discount2.innerHTML = 1*zero2.innerHTML;
    }



    if(cartoonTitle3.innerHTML == 'كرتونة') {
        three = input3.value*price3.innerHTML-0*zero3.innerHTML; 
        discount3.innerHTML = 0*zero3.innerHTML;

    } else {
        three = input3.value*price3.innerHTML-0*zero3.innerHTML; 
        discount3.innerHTML = 0*zero3.innerHTML;
    }


    if(cartoonTitle4.innerHTML == 'كرتونة') {
        four = input4.value*price4.innerHTML-30*zero4.innerHTML; 
        discount4.innerHTML = 30*zero4.innerHTML;

    } else {
        four = input4.value*price4.innerHTML-1*zero4.innerHTML; 
        discount4.innerHTML = 1*zero4.innerHTML;
    }


    if(cartoonTitle5.innerHTML == 'كرتونة') {
        five = input5.value*price5.innerHTML-30*zero5.innerHTML; 
        discount5.innerHTML = 30*zero5.innerHTML;

    } else {
        five = input5.value*price5.innerHTML-5*zero5.innerHTML; 
        discount5.innerHTML = 5*zero5.innerHTML;
    }



    if(cartoonTitle6.innerHTML == 'كرتونة') {
        six = input6.value*price6.innerHTML-10*zero6.innerHTML; 
        discount6.innerHTML = 10*zero6.innerHTML;

    } else {
        six = input6.value*price6.innerHTML-0*zero6.innerHTML; 
        discount6.innerHTML = 0*zero6.innerHTML;
    }



    if(cartoonTitle7.innerHTML == 'كرتونة') {
        seven = input7.value*price7.innerHTML-10*zero7.innerHTML; 
        discount7.innerHTML = 10*zero7.innerHTML;

    } else {
        seven = input7.value*price7.innerHTML-1*zero7.innerHTML; 
        discount7.innerHTML = 1*zero7.innerHTML;
    }



    if(cartoonTitle8.innerHTML == 'كرتونة') {
        eight = input8.value*price8.innerHTML-10*zero8.innerHTML; 
        discount8.innerHTML = 10*zero8.innerHTML;

    } else {
        eight = input8.value*price8.innerHTML-1*zero8.innerHTML; 
        discount8.innerHTML = 1*zero8.innerHTML;
    }



    if(cartoonTitle9.innerHTML == 'كرتونة') {
        nine = input9.value*price9.innerHTML-0*zero9.innerHTML; 
        discount9.innerHTML = 0*zero9.innerHTML;

    } else {
        nine = input9.value*price9.innerHTML-0*zero9.innerHTML; 
        discount9.innerHTML = 1*zero9.innerHTML;
    }


    if(cartoonTitle10.innerHTML == 'كرتونة') {
        ten = input10.value*price10.innerHTML-30*zero10.innerHTML; 
        discount10.innerHTML = 30*zero10.innerHTML;

    } else {
        ten = input10.value*price10.innerHTML-1*zero10.innerHTML; 
        discount10.innerHTML = 1*zero10.innerHTML;
    }






    
    
    // three = input3.value*price3.innerHTML-0*zero3.innerHTML;
    // four = input4.value*price4.innerHTML-30*zero4.innerHTML;
    // five = input5.value*price5.innerHTML-30*zero5.innerHTML;
    // six = input6.value*price6.innerHTML-10*zero6.innerHTML;
    // seven = input7.value*price7.innerHTML-10*zero7.innerHTML;
    // eight = input8.value*price8.innerHTML-10*zero8.innerHTML;
    // nine = input9.value*price9.innerHTML-0*zero9.innerHTML;
    // ten = input10.value*price10.innerHTML-30*zero10.innerHTML;



    result.value = one + two + three + four + five + six + seven + eight + nine + ten;

    var hr1 = document.getElementById('hr1');
    var hr2 = document.getElementById('hr2');
    var hr3 = document.getElementById('hr3');
    var hr4 = document.getElementById('hr4');
    var hr5 = document.getElementById('hr5');
    var hr6 = document.getElementById('hr6');
    var hr7 = document.getElementById('hr7');
    var hr8 = document.getElementById('hr8');
    var hr9 = document.getElementById('hr9');
    var hr10 = document.getElementById('hr10');

    // inputDiv.style.display = 'none';
    // box1.style.display = 'none';
    // inputDiv2.style.display = 'none';
    // box2.style.display = 'none';
    // inputDiv3.style.display = 'none';
    // box3.style.display = 'none';
    // inputDiv4.style.display = 'none';
    // box4.style.display = 'none';
    // inputDiv5.style.display = 'none';
    // box5.style.display = 'none';
    // inputDiv6.style.display = 'none';
    // box6.style.display = 'none';
    // inputDiv7.style.display = 'none';
    // box7.style.display = 'none';


    if(input1.value != ' ') {
        input1.style.display = 'none';
        box1.style.display = 'none';
        hr1.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name1.style.display = 'block';
        discount1.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle1.innerHTML = cartoonTitle1.innerHTML;
        print1.style.display = 'block';
        print1.innerHTML = name1.innerHTML;
        finaldisc1.innerHTML = discount1.innerHTML
     
    }  



    
    if(input2.value != ' ') {
        input2.style.display = 'none';
        box2.style.display = 'none';
        hr2.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name2.style.display = 'block';
        discount2.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle2.innerHTML = cartoonTitle2.innerHTML;
        print2.style.display = 'block';
        print2.innerHTML = name2.innerHTML;
    }  



    if(input3.value != ' ') {
        input3.style.display = 'none';
        box3.style.display = 'none';
        hr3.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name3.style.display = 'block';
        discount3.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle3.innerHTML = cartoonTitle3.innerHTML;
        print3.style.display = 'block';
        print3.innerHTML = name3.innerHTML;
    }  

    if(input4.value != ' ') {
        input4.style.display = 'none';
        box4.style.display = 'none';;
        hr4.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name4.style.display = 'block';
        discount4.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle4.innerHTML = cartoonTitle4.innerHTML;
        print4.style.display = 'block';
        print4.innerHTML = name4.innerHTML;
    }  

    if(input5.value != ' ') {
        input5.style.display = 'none';
        box5.style.display = 'none';
        hr5.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name5.style.display = 'block';
        discount5.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle5.innerHTML = cartoonTitle5.innerHTML;
        print5.style.display = 'block';
        print5.innerHTML = name5.innerHTML;
    }  

    if(input6.value != ' ') {
        input6.style.display = 'none';
        box6.style.display = 'none';
        hr6.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name6.style.display = 'block';
        discount6.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle6.innerHTML = cartoonTitle6.innerHTML;
        print6.style.display = 'block';
        print6.innerHTML = name6.innerHTML;
    }  

    if(input7.value != ' ') {
        input7.style.display = 'none';
        box7.style.display = 'none';
        hr7.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name7.style.display = 'block';
        discount7.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle7.innerHTML = cartoonTitle7.innerHTML;
        print7.style.display = 'block';
        print7.innerHTML = name7.innerHTML;
    }  
    if(input8.value != ' ') {
        input8.style.display = 'none';
        box8.style.display = 'none';
        hr8.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name8.style.display = 'block';
        discount8.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle8.innerHTML = cartoonTitle8.innerHTML;
        print8.style.display = 'block';
        print8.innerHTML = name8.innerHTML;
    }  
    if(input9.value != ' ') {
        input9.style.display = 'none';
        box9.style.display = 'none';
        hr9.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name9.style.display = 'block';
        discount9.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle9.innerHTML = cartoonTitle9.innerHTML;
        print9.style.display = 'block';
        print9.innerHTML = name.innerHTML;
    }  
    if(input10.value != ' ') {
        input10.style.display = 'none';
        box10.style.display = 'none';
        hr10.style.display = 'none';
        nametitle.style.display = 'block';
        discounttitle.style.display = 'block';
        name10.style.display = 'block';
        discount10.style.display = 'block';
        final1.style.display = 'block';
        final2.style.display = 'block';
        final3.style.display = 'block';
        final4.style.display = 'block';
        final5.style.display = 'block';
        final6.style.display = 'block';
        final7.style.display = 'block';
        bottle10.innerHTML = cartoonTitle10.innerHTML;
        print10.style.display = 'block';
        print10.innerHTML = name10.innerHTML;
    }  






    if(zero1.innerHTML == '0') {
        item1.style.display = 'none';
        hr1.style.display = 'none';
    }

    if(zero2.innerHTML == '0'){
        item2.style.display = 'none';
        hr2.style.display = 'none';
    }

    if(zero3.innerHTML == '0'){
        item3.style.display = 'none';
        hr3.style.display = 'none';
    }

    if(zero4.innerHTML == '0'){
        item4.style.display = 'none';
        hr4.style.display = 'none';
    }

    if(zero5.innerHTML == '0'){
        item5.style.display = 'none';
        hr5.style.display = 'none';
    }

    if(zero6.innerHTML == '0'){
        item6.style.display = 'none';
        hr6.style.display = 'none';
    }

    if(zero7.innerHTML == '0'){
        item7.style.display = 'none';
        hr7.style.display = 'none';
    }

    if(zero8.innerHTML == '0'){
        item8.style.display = 'none';
        hr8.style.display = 'none';
    }
    if(zero9.innerHTML == '0'){
        item9.style.display = 'none';
        hr9.style.display = 'none';
    }
    if(zero10.innerHTML == '0'){
        item10.style.display = 'none';
        hr10.style.display = 'none';
    }

    price2.innerHTML = input2.value * price2.innerHTML;
    price3.innerHTML = input3.value * price3.innerHTML;
    price4.innerHTML = input4.value * price4.innerHTML;
    price5.innerHTML = input5.value * price5.innerHTML;
    price6.innerHTML = input6.value * price6.innerHTML;
    price7.innerHTML = input7.value * price7.innerHTML;
    price8.innerHTML = input8.value * price8.innerHTML;
    price9.innerHTML = input9.value * price9.innerHTML;
    price10.innerHTML = input10.value * price10.innerHTML;
    


}






// total.onclick = function () {
//     total.innerHTML = 'طباعة';
  
// }










var finish = document.getElementById('finish');
var all4 = document.getElementById('all4');



finish.onclick = function () {
    all3.style.display = 'none';
    all4.style.display = 'block';

}




var absolute = document.getElementById('absolute');

absolute.onclick = function () {
    absolute.style.display = 'none';
    window.print();
    
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







