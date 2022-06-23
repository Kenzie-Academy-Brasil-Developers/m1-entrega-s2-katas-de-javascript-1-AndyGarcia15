



//1
function oneThroughTwenty(numbers) {
  let array = [];
    let i = 1;
   while(i <= numbers){
      array.push(i)
      i++
   }
    return array
}

console.log(oneThroughTwenty(20))


//2
function evensToTwenty(numbers) {
  let array = [];
  for(let i =1; i <= numbers; i++) {
    if (i % 2 == 0){
        array.push(i)
    }
}  
  return array
}
console.log(evensToTwenty(20))


//3
function oddsToTwenty(numbers) {
  let array = [];
    
  for(let i =1; i <=numbers; i++) {
    if (i % 2 != 0){
        array.push(i)
    }
  }  
}

console.log(oddsToTwenty(20))


//4
function multiplesOfFive(numbers) {
  let array = [];
  for(let i =10; i <= numbers; i++) {
      if (i % 5 == 0){
        array.push(i)
      }
  }
  return array
}

console.log(multiplesOfFive(100))


//5
function squareNumbers(numbers) {
  let array = [];
  for(let i =1; i <= numbers; i++) {
    if (Math.sqrt(i) % 1 === 0){
        array.push(i)
    }
  }  
  return array
}

console.log(squareNumbers(100))


//6
function countingBackwards(numbers) {
  let array = [];
  for(let i = numbers; i >= 1;i--){
    array.push(i)
  }
  return array
}


console.log(countingBackwards(20))



//7
function evenNumbersBackwards(numbers) {
    
  let array = [];
  for(let i = numbers; i >= 1;i--){
    if(i % 2 == 0){
      array.push(i)
    }
  }
  return array
}

console.log(evenNumbersBackwards(20))


//8
function oddNumbersBackwards(numbers) {
  let array = [];
  for(let i = numbers; i >= 1;i--){
    if(i % 2 != 0){
      array.push(i)
    }
  }
  return array
}

console.log(oddNumbersBackwards(20))


//9
function multiplesOfFiveBackwardsnumbers(numbers) {
    
  let array = [];
  for(let i =numbers; i >= 1;i--){
    if(i % 5 == 0){
      array.push(i)
    }
  }
  return array
}
console.log(multiplesOfFiveBackwardsnumbers(100))


//10
function squareNumbersBackwards(numbers) {
    
  let array = [];
  for(let i = numbers; i >= 1;i--){
    if(Math.sqrt(i) % 1 == 0){
      array.push(i)
    }
  }
  return array
}
console.log(squareNumbersBackwards(100))


