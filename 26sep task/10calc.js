let calc=localStorage.getItem('calculation')||'';

displayCalc();

function updateCalc(value) 
{
  calc+=value;
  displayCalc();
  localStorage.setItem('calculation',calc);
}

function displayCalc() 
{
  document.querySelector('.jscalc')
    .innerHTML=calc;
}
