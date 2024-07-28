//dom
//event
const button=document.querySelectorAll('.box')
const body=document.querySelector('body')
//takes a call back function
button.forEach(function(box){
    box.addEventListener('click',function(color){
        if(color.target.id==='box1'){
            body.style.backgroundColor='chocolate'
        }
        else if(color.target.id==='box2'){
            body.style.backgroundColor='blueviolet'
        }
        else if(color.target.id==='box3'){
            body.style.backgroundColor='darkcyan'
        }
        else if(color.target.id==='box4'){
            body.style.backgroundColor='burlywood'
        }
        else if(color.target.id==='box5'){
            body.style.backgroundColor='darkgoldenrod'
        }
    })
})