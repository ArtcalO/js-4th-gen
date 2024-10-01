
let myList = [1,2,3,4,5,6]
console.log("Ajouter un élément à la fin de la liste")

myList[myList.length] = 7
console.log(myList)

console.log("Ajouter un élément au début de la liste")

myListCopy = myList.slice()
myList = []
myList[0] = 55454
myList = myList.concat(myListCopy)
console.log(myList)

console.log("Supprimer le dernier  élément de la liste")
console.log(myList)
let last_el = myList[myList.length-1]
myListCopy = []
for(var i = 0; i<myList.length ; i++){
    if(myList[i] != last_el){
        myListCopy.push(myList[i])
    }
}
myList = myListCopy

console.log(myList)

console.log("Supprimer le premier  élément de la liste")
console.log(myList)
let first_el = myList[0]
myListCopy = []
for(var i = 0; i<myList.length ; i++){
    if(myList[i] != first_el){
        myListCopy.push(myList[i])
    }
}
myList = myListCopy
console.log(myList)

console.log("Supprimer un element à l'indice x de la liste")
myList.splice(2,1)
console.log(myList)
let index = 2
console.log("Indice  = "+index)
myListCopy = []
for(var i = 0; i<myList.length ; i++){
    if(myList[i] != myList[index]){
        myListCopy.push(myList[i])
    }
}
myList = myListCopy
console.log(myList)

console.log("Supprimer un element à l'indice x de la liste")
console.log(myList)
let myEl = 5
console.log("Indice  = "+index)
myListCopy = []
for(var i = 0; i<myList.length ; i++){
    if(myList[i] != myEl){
        myListCopy.push(myList[i])
    }
}
myList = myListCopy
console.log(myList)

console.log("Trouver le maximum")
let max = myList[0]
for(var i = 0; i<myList.length ; i++){
    if(myList[i] > max){
        max = myList[i]
    }
}
console.log(myList)
console.log("Le max est "+max)

console.log("Trouver le maximum")
let min = myList[0]
for(var i = 0; i<myList.length ; i++){
    if(myList[i] < min){
        min = myList[i]
    }
}
console.log(myList)
console.log("Le min est "+min)