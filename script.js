let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let input3 = document.querySelector(".input3");
let create = document.querySelector(".create");
let read = document.querySelector(".read");
let head = document.querySelector(".head");
let remo = document.querySelector(".remo");
let delBtn = document.querySelector('.del-btn') 







function view() {
    let task = JSON.parse(localStorage.getItem("task")) || []
  head.innerHTML = ""
 
task.map((el) => {

head.innerHTML += `
  <div class="head-text">
  <img width="100px"  src=${el.Images} alt="img">
  <div>
  <h4> <span>Name : </span>${el.lastName}</h4>
  <h4> <span>Last name : </span>${el.name}</h4>
  </div>
  <button type="button" class="del-btn btn btn-danger">Delete</button>
  </div>
  `;
el.name = "";
el.lastName = "";
el.Images = "";
remo.addEventListener("click", () => {
  head.style.display = "none";
});

})
let delBtns = document.querySelectorAll(".del-btn")
delBtns.forEach((btn , index) => {
  btn.addEventListener("click" , () => {
    deleteeee(index)
  })
})
}
// head.addEventListener("click" ,(e) => {
//   if(e.target.classList.contains("del-btn")) {
//       e.target.parentNode.remove()
//   }
//   })





create.addEventListener("click", () => add());

function add() {
  let task = JSON.parse(localStorage.getItem("task")) || []
let obj = {
  name:input1.value,
  lastName:input2.value,
  Images:input3.value,
}
let result = [...task , obj]
localStorage.setItem("task" , JSON.stringify(result))


if(input1.value === "" || input2.value === "" || input3.value === "" || input1.value.trim() === "" || input2.value.trim() === "" ||input3.value.trim() === "") {
  alert("Заполните пустое поле")
  input1.value = ""
input2.value = ""
input3.value = ""
  return
}

view()
}









remo.addEventListener("click", () => {
    head.style.display = "none";
  });






read.addEventListener("click", () => {
  head.style.display = "block";
});
remo.style.cursor = "pointer"

















function deleteeee(index) {
  let task = JSON.parse(localStorage.getItem("task")) || []
  task.splice(index, 1)
  localStorage.setItem("task" , JSON.stringify(task))
  view()
}
view()














