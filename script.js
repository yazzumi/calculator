let calc = '0';

function calculation(value) {
  if(calc === '0'){
    calc = value;
  }else{
    calc += value;
  }
  
  showCalculation();
}

function showCalculation(){
  document.querySelector('.js-equal').innerHTML = calc;

}
