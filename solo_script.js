// ! ! !
// Three Bugs that I found:
/*
1. In function getBaseSTI basePercent should not be returned -1.
2. var baseSalary is not a number, fixed with array[2] = parseInt(array[2]);
3. newArray is only pulling in arrayAtticus. Fixed this by putting an [i] at the end of array in calculateSTI(array[i]).
4. Made it pretty: newArray = newArray.join(', ');
5. Changed: newArray[2] = baseSalary * (1.0 + bonus); TO newArray[2] = baseSalary + (baseSalary * bonus); because it wasn't calculating correctly.
*/
var arrayAtticus = ["Atticus", "2405", "47000", 3];
var arrayJem = ["Jem", "62347", "63500", 4];
var arrayBoo = ["Boo", "11435", "54000", 3];
var arrayScout = ["Scout", "6243", "74750", 5];

var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];

//Create variables used to write to the DOM
var newEl, newText, position;

//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
  array[i] = calculateSTI(array[i]);
  newEl = document.createElement('li');
  newText = document.createTextNode(array[i]);
  newEl.appendChild(newText);
  position.appendChild(newEl);
}


function calculateSTI(array){
  array[2] = parseInt(array[2]);
  var newArray = [];
  newArray[0] = array[0];

  var employeeNumber = array[1];
  var baseSalary = array[2];
  var reviewScore = array[3];



  var bonus = getBaseSTI(reviewScore);
  if(bonus > 0.13){
    bonus = 0.13;
}

  newArray[1] = bonus;
  newArray[2] = baseSalary + (baseSalary * bonus);
  newArray[3] = baseSalary * bonus;
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  newArray = newArray.join(', ');
  return newArray;
}


function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;
}



function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
    salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}