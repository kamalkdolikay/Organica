var sortButton = document.querySelector("#sort");
var cardBody = document.querySelectorAll(".card");

sortButton.addEventListener("change", sortList);

for(var i = 0; i < cardBody.length; i++){
    cardBody[i].addEventListener("click", function(e){
        if(!(e.target.classList.contains("btn"))){
            console.log(e.target.classList.contains("btn"));
        }
    })
}


function sortList(){
    if(sortButton.value == "Date"){
        console.log("daet");
    } else if(sortButton.value == "Fulfilled"){
        console.log("fulfil"); 
    }
}

function test(){
    console.log("test");
}