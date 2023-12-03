
// ul_el.innerHTML+="<li>"+myLeads[i]+"</li>"
const inputValue = document.querySelector("#input");
const input_btn = document.querySelector(".input__btn");
const ul_el = document.querySelector("#ul_el");
let myLeads = [];

input_btn.addEventListener("click", function() {
  myLeads.push(inputValue.value);

  // Clear the existing content in the ul element
  ul_el.innerHTML = "";

  // Display each lead in a new list item
  for (let i = 0; i < myLeads.length; i++) {
    ul_el.innerHTML +=`
    <li class='list-a'>
    <a class='links' target= '_blank' href='https://${myLeads[i]}'>${myLeads[i]}</a>
    </li>`
  }

  // Clear the input value after adding a lead
  inputValue.value = "";
});
let name = "garo";
`<li class='list-a'><a class='links' target= '_blank' href='https://${myLeads[i]}'>+${myLeads[i]}</a></li>`;


























