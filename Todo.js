const innerBoxes = document.getElementsByClassName("innerBox");
const boxes = document.getElementsByClassName("box");

for (box of innerBoxes) {
  box.addEventListener("dragstart", (e) => {
    setTimeout(() => {
      e.target.className += " hide";
    }, 0);
  });

  box.addEventListener("dragend", (e) => {
    e.target.className = " innerBox";
  });
}

for (mainBox of boxes) {
  mainBox.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  mainBox.addEventListener("drop", (e) => {
    const draggable = document.querySelector(".hide");
    e.target.append(draggable);
  });
}
