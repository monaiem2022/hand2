let button = document.getElementById('button');
var all1 = document.getElementById('all1');

var client1 = document.getElementById('client1');
var all2 = document.getElementById('all2');

var all3 = document.getElementById('all3');









button.onclick = function () {
    all1.style.display = 'none';
    all2.style.display = 'block'
}





client1.onclick = function () {
    all2.style.display ='none';
    all3.style.display = 'block'
}


