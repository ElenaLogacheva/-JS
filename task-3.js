for (let i = 0; i < document.body.childNodes.length; i++) {
    document.body.childNodes[i].addEventListener("mouseover", function (){
        document.body.childNodes[i].style.border = "1px solid red" 
    })
    document.body.childNodes[i].addEventListener("mouseout", function (){
    document.body.childNodes[i].style.border = "none"
 })
}