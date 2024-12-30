 let inc =document.querySelector('.inc');
 let input =document.querySelector('.input');

 inc.addEventListener('click', function(){
     if(Number(input.value) +1<5){
        console.log(Number(input.value));
    }

 })