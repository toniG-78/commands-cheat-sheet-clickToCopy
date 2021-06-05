const td_groupA = document.querySelectorAll(
  "table:first-of-type td:nth-child(2)"
);
const td_groupB = document.querySelectorAll(
  "table:first-of-type td:nth-child(3)"
);
const td_groupC = document.querySelectorAll("table:last-of-type td");
const allGroups = [...td_groupA, ...td_groupB, ...td_groupC];

const copy_div = document.getElementById("copy");
const flipBack_div = document.querySelector(".flip-back");

for (let td of allGroups) {
  td.addEventListener("click", (event) => {
    copyValue(td);
    flipBack_div.innerText = `${td.innerText} - COPIED!!!`;
    //add anim
    copy_div.classList.add("rotate");
    setTimeout(function () {
      copy_div.classList.remove("rotate");
    }, 1250);
  });
}

const copyValue = (element) => {
  let input = document.createElement("input");
  document.body.appendChild(input);
  input.setAttribute("value", element.innerText);
  console.log(input);
  input.select();
  document.execCommand("copy");
  input.remove();
};
