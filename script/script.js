function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);

  // DoD された要素を追加
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();
}

function createItem() {
  const newItemElement = document.createElement("div");
  newItemElement.id = "item-" + countItem;
  newItemElement.className = "item";
  newItemElement.draggable = true;
  newItemElement.setAttribute("ondragstart", "onDragStart(event);");
  newItemElement.innerText = "Todo" + countItem;

  countItem++;

  return newItemElement;
}

let countItem = 1;

const addItemButtons = document.getElementsByClassName("board--header--add-button");
for (let i = 0; i < addItemButtons.length; i++) {
  addItemButtons[i].addEventListener("click", e => {
    const itemWrapperElement = e.target.parentNode.nextElementSibling;
    const newItemElement = createItem();
    itemWrapperElement.appendChild(newItemElement);
  });
}