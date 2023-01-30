var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden';


var sec = document.querySelectorAll('.list-group-item');
sec[1].style.color='green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i =0; i<odd.length;i++){
    odd[i].style.backgroundColor='green';
}