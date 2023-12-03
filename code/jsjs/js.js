// V1
// let fruit =["apple","orange","apple","apple","orange"]
// function addApple(){
//     let apple = fruit.filter(item=> item==="apple");
//     document.querySelector(".apple").textContent=apple
// }
// function addOrange(){
//     let orange = fruit.filter(item=> item==="orange");
//     document.querySelector(".orange").textContent=orange
// }
// addApple()
// addOrange()
//V2
let fruit =["apple","orange","apple","apple","orange"]
let apple = document.querySelector(".apple")
let orange =document.querySelector(".orange")
function add(){
    for (i=0;i<fruit.length;i++){
        if (fruit[i]==="orange"){
            orange.textContent+=" "+fruit[i]
        }else{
            apple.textContent+=" "+fruit[i]
        }
    }
}
add()