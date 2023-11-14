let input = document.querySelector("input");
let div = document.querySelector("div");
let button = document.querySelector("button");
let i = 0;

button.addEventListener("click", function() {
    let p = document.createElement ("p");
    i = i+1;
    p.innerHTML = i + ". " + input.value;
    div.append(p);

    input.value = " ";
})