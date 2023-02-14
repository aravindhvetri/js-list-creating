let butt = document.getElementById("butt");
let ul = document.getElementById("ul-item");
let arr = ["rose", "animals", "lions", "cats", "rabit"]

butt.addEventListener("click", myFunction);
function myFunction(){
    arr.forEach(function(e){
        let li = document.createElement("li");
        li.innerText=e;
        ul.appendChild(li);
        console.log(li);
    })
}
