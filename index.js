// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
console.log(cats)



 function destructivelyAppendCat(Ralph){
    cats.push('Ralph')
 }

 function destructivelyPrependCat(Bob){
    cats.unshift('Bob')
 }
  
 function destructivelyRemoveLastCat(){
    cats.pop()
 }

 function destructivelyRemoveFirstCat(){
    cats.shift()
 }

 function appendCat(Broom){
    let newArray = [...cats, Broom]
    return newArray
 }

 function prependCat(Arnold){
    let newArray = [Arnold, ...cats]
    return newArray
 }

 function removeLastCat(){
    let newArray = cats.slice(0, -1)
    return newArray
 }

 function removeFirstCat(){
    let newArray = cats.slice(1)
    return newArray
 }