
let proverbes = [
	{
		"id":1,
		"proverbe":"Qui va à la chasse perd sa place"
	},
]

function initialiser(){
	let proverbe_obj={}
	for(var i = 0 ; i < proverbes.length ; i++){
		proverbe_obj = proverbes[i]
		afficherProverbe(proverbe_obj)
	}
}

function afficherProverbe(proverbe_obj){
	let div = createDiv(proverbe_obj)
	appendToOptions(div)
}

function createDiv(data){
	let div = document.createElement("div")
	div.classList.add("option")
	div.textContent = data.proverbe

	return div
}

function appendToOptions(div){
	let parent = document.getElementById("options")
	parent.appendChild(div)
}

initialiser()

function ajouter(){
	let proverbe = document.getElementById("proverbe").value

	let proverbe_obj = {
		"id":2,
		"proverbe":proverbe
	}

	proverbes.push(proverbe_obj)

	let parent = document.getElementById("options")
	removeAllChildNodes(parent)
	initialiser()
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

