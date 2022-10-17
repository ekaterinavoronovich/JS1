/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// function should return two numbers
const sum = (a, b) => {
  return a + b;
};

/**
 * @param {number} num
 * @return {boolean}
 */
// function should return if number is even
const isNumberEven = (num) => {
  if (num % 2 == 0){
    return  true;
  } else {
    return false;
  }
};

  


/**
 * @param {number} num1
 * @param {number} num2
 * @return {string}
 */
// Write logic to compare two numbers and return which number is greater or they are equal
const findLargestNumber = (num1, num2) => {
  if (num1 > num2) {
  return num1 + ' is the largest number';
  } else if ( num1 < num2) {
  return num2 + ' is the largest number';
  }
  if (num1 =num2){
    return num1 + ' is equal to ' + num2; 
  }
  
};

/**
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {string}
 */
// function should return type of triangle
const findTriangleType = (side1, side2, side3) => {
  if (side1 == side2 && side2 == side3) {
    return 'Equilateral triangle';
  } else if (side1 == side2 || side2 == side3 || side1 == side3){
    return 'Isosceles triangle';
  }
  if (side1 != side2 && side2 != side3 && side1 != side3){
    return 'Scalene triangle';
  }
};

/**
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
//function should return amount of days in month
const findDaysInMonth = (month, year) => {
  if (month <= 12) {
  return `The Month has ${new Date(year, month, 0).getDate()} days`;
} else {
  return `Invalid Month of value ${month}`;}
};

/**
 * @param {number} num1
 * @param {number} num2
 * @param {string} operation
 * @return {number | string}
 */
const calculateResult = (num1, num2, operation) => {
  if  ( operation == 'add') {
    return num1 + num2 ;
  } else if
    (operation == 'subtract'){
      return num1 - num2;
    }
   else if
    (operation == 'multiply'){
      return num1 * num2;
    }
    else if
    (operation =='divide'){
      return num1 / num2;
    }
    if (operation =='modulus' ){
      return num1 % num2;
    } 
    if (operation =' ' ){
      return 'someunknownoperation is an invalid operation';
    }   
  }


/**
 * @return {string}
 */
// Create multiply table multiplying all digits from 2 t0 9 on 1 - 10 and write result in string
const getMultiplicationTable = () => {
 let result ;
 for (let i = 2; i<10; i++){
  for (let j = 1; j <= 10; j++){
  result=` ${i} * ${j} = ${i*j}`; 
  return (result)
  }

}

};
  
  

module.exports = {
  isNumberEven,
  findLargestNumber,
  findTriangleType,
  findDaysInMonth,
  sum,
  calculateResult,
  getMultiplicationTable,
};
