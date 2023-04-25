const check = document.getElementById("check");
let btn = document.getElementById("inactivebtn");
let anchorTag = document.getElementById("anchorTag");

check.addEventListener("click", () => {
  // if (btn.classList === "disabled") {
  if (btn.classList.toString() === "disabled") {
    btn.style.backgroundColor = "#01ffff";
    anchorTag.classList.remove("disabled");
    btn.classList.remove("disabled");
    btn.classList.add("enabledbtn");
  } else if (btn.classList.toString() !== "disabled") {
    btn.style.backgroundColor = "#1daabb";
    anchorTag.classList.add("disabled");
    btn.classList.add("disabled");
    btn.classList.remove("enabledbtn");
  }
});

// const isChecked = () => {
//   if (check.checked === false) {
//   }
// };

/*const addBoxShadow = () => {
  btn.classList.toggle("activebtn")
}
check.addEventListener("click", activebtn)
*/
