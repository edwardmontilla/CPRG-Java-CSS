/********* create variables *********/

let costPerDay = 35;
let numDaySelected = 0;
let costTotal = 0;

const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');

const calculatedCost = document.getElementById('calculated-cost');




function buttonStatesset(element){
  const daySelectCheck = element.classList.contains('clicked');
  if (daySelectCheck=== true){
      element.classList.remove('clicked');
      numDaySelected-=1;
      recalculate();
  } else {
      element.classList.add('clicked');
      numDaySelected+=1;
      recalculate();
      }

}

function dayOfWeekSelected(event){
  event.preventDefault();
  const target = event.target;
  buttonStatesset(target);
  console.log(target);
}

mondayButton.onclick = dayOfWeekSelected;
tuesdayButton.onclick = dayOfWeekSelected;
wednesdayButton.onclick = dayOfWeekSelected;
thursdayButton.onclick = dayOfWeekSelected;
fridayButton.onclick = dayOfWeekSelected;



function clearDaysbutton(){
  mondayButton.classList.remove('clicked');
  tuesdayButton.classList.remove('clicked');
  wednesdayButton.classList.remove('clicked');
  thursdayButton.classList.remove('clicked');
  fridayButton.classList.remove('clicked');
  fullButton.classList.add('clicked');
  halfButton.classList.remove('clicked');
  costPerDay = 35;
  numDaySelected = 0;
  recalculate();
}

clearButton.onclick = clearDaysbutton;



function setHalfButton(e){
  e.preventDefault();
  fullButton.classList.remove('clicked');
  halfButton.classList.add('clicked');
  costPerDay = 20;
  recalculate();
}

halfButton.onclick = setHalfButton;


function setFullButton(e){
  e.preventDefault();
  halfButton.classList.remove('clicked');
  fullButton.classList.add('clicked');
  costPerDay = 35;
  recalculate();    
}

fullButton.onclick = setFullButton;


function recalculate(){
  costTotal = numDaySelected*costPerDay;
  calculatedCost.textContent = `${costTotal.toFixed(0)}`;
}



