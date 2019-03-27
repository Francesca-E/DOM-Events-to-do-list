var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteButton = document.querySelectorAll("delete");
var lis = document.querySelectorAll("li");
const list3 = document.querySelector('.characters');

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
  var html_to_insert = '<input type="radio" class="delete">';
	li.insertAdjacentHTML('afterbegin', html_to_insert);
	ul.appendChild(li);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



function indexNumber(){
	{
	list3.children.remove();
	}

}

// question part1 first answer
// function toggleDone (event) {
// 			console.log(event.target.nodeName);
// 			if(event.target.nodeName==("li"))
// 			(event.target).className="done";
// 	}

function toggle(){
lis.forEach(li=>{
if(event.target==li){
	li.classList.toggle("done");
}

})

 }

// question part2
const delete5 = document.getElementsByClassName('delete');
function indexNumber(){
for(let i=0;i<=delete5.length; i++){
if(event.target==delete5[i])
list3.children[i].remove() && delete5.children[i].remove();
	}
 }

document.addEventListener('click', indexNumber);
document.addEventListener('click', toggle);
button.addEventListener("click", addListAfterClick);
// if the delete button is clicked then delete the li item that has the same index
		// function toggleDone (event) {
		// 			console.log(event.target);
		// 			delete(event.target);
		// 			return;
		// 		}







input.addEventListener("keypress", addListAfterKeypress);
