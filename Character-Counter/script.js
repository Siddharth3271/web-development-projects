const textarea=document.getElementById("textarea")
const totalchar=document.getElementById("total-char")
const remainchar=document.getElementById("remaining-char")
textarea.addEventListener("keyup",()=>{
    // console.log("pressed")
    updateCounter()
})

updateCounter()
function updateCounter(){
    //to update html use inner text
    totalchar.innerText=textarea.value.length
    remainchar.innerText=textarea.getAttribute("maxlength")-textarea.value.length
}