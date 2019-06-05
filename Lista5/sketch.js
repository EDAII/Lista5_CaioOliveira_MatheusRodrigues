let tree;
let cont = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	tree = new Tree();
	createTree();
}

function createTree () {
	if(cont < parseInt(random(3,20))){
		let nodeValue = parseInt(random(1,99));
		tree.addNode(nodeValue);
		tree.inOrder();
		cont++;
		setTimeout(createTree,3000)
	}	
}
async function draw() {
	background(0);
	tree.show();
}
