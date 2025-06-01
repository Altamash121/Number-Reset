let count = 0; 
const Count = document.getElementById("count");

function update() {
  Count.textContent = count;
}

function decrement() {
  if (count > 0) {
    count--;

    update();
  }
}

function increment() {
  count++;
  update();
}

function reset() {
  count = 0;
  update();
}
