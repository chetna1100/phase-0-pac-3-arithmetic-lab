//reset number
number=10
function add5(){
    return number += 5;
}
 function divideBy3(){
    return number /= 3;
 }
console.log(divideBy3())
console.log(add5())

//add(a, b) adds two numbers and returns the result
function add(a, b) {
    return a + b;
  }
  console.log(add(20,10))


//increment ++ 
let num1= 40
num1==num1++
console.log(num1)

function increment(n=10){
    n==n++
    return n
  }
  console.log(increment())

function incrementNew(n=20){
    return ++n
  }
 console.log(incrementNew())

//decrement --
function decrement(n=30){
    n==n--
    return n
}
console.log(decrement())
function decrementNew(n=40){
    return --n
}
console.log(decrementNew())

//Parsing Numbers{parseInt(),parseFloat()}
//Practice writing functions that do things with numbers
//Practice parsing strings as numbers
function makeInt(){
    return parseInt("12.0982", "10")
}
console.log(makeInt())

function preserveDecimal(){
 console.log(parseFloat("20.0989" ,"10"))
 return parseFloat("20.0989" ,"10")
}
preserveDecimal()
