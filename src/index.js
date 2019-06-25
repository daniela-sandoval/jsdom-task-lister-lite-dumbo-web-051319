
const boxInput = document.querySelector('#new-task-description');
const myList = document.querySelector('#tasks');
const listForm = document.querySelector('#create-task-form');

function addLiElement(e) {
  e.preventDefault()
  let task = document.createElement("li");
  task.innerHTML = boxInput.value
  let deleteButton = document.createElement('button');
  deleteButton.innerText = "x";
  deleteButton.addEventListener("click", () => {
    task.remove();
  })
  task.append(deleteButton);
  myList.append(task);
  e.target.reset();
}

document.addEventListener("DOMContentLoaded", () => {
  listForm.addEventListener("submit", addLiElement
})

// listButton.addEventListener("click", function() {
//   let newLi = document.createElement("li");
//   newLi.innerText = boxInput.value;
//   debugger
//   myList.append(newLi);
// })
