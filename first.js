const inputValue = document.querySelector("#input");
const input_btn = document.querySelector(".input__btn");
const ul_el = document.querySelector("#ul_el");
let  myLeads = [];
const myLocalLeads=JSON.parse(localStorage.getItem("myLeads"))
console.log(Boolean(myLocalLeads))
myLeads = myLocalLeads
console.log(myLeads)
if (myLocalLeads){
  for (let i = 0; i < myLeads.length; i++) {
  ul_el.innerHTML +=`
    <li class='list-a'>
    <a class='links' target= '_blank' href='${myLeads[i]}'>${myLeads[i].slice(0, 30)}/..</a>
    </li>`
}

}else{
  myLeads=[]
}
function reload(leads){
  if (inputValue.value){
  leads.push(inputValue.value);
}
  ul_el.innerHTML = "";

  for (let i = 0; i <leads.length; i++) {
    ul_el.innerHTML +=`
    <li class='list-a'>
    <a class='links' target= '_blank' href='${leads[i]}'>${leads[i].slice(0, 30)}/.. </a>
    </li>`

  }
  inputValue.value = "";
  localStorage.setItem("myLeads",JSON.stringify(leads))
}

input_btn.addEventListener("click", function() {
  reload(myLeads)

});




const btr=null
console.log(btr)




const clear = document.querySelector("#clear")
clear.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads=[]
  ul_el.innerHTML =""
  

})

const saveTap =document.querySelector(".tap")



saveTap.addEventListener("click",function(){
  chrome.tabs.query({active:true ,currentWindow:true},function(tabs){
    
    myLeads.push(tabs[0].url)
    reload(myLeads)


  })

})

