
let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total(1,2,3,4,5,6,7,8,9,10)

console.log("The total is "+theTotal)


function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += theNumbers [aNumber]*1//Just need to add the brackets around [aNumber] This allows it to compute the numbers on line 7 properly.
	}
	return sum
}
