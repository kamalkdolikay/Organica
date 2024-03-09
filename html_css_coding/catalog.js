// import;

// const { getProducts } = require("../controllers/productsController");
var but = document.querySelector("#search_button");
var sortButton = document.querySelector("#sort");
var cardBody = document.querySelectorAll(".card");

sortButton.addEventListener("change", sortList);
but.addEventListener("click", function(){
    
});

window.addEventListener("load", (event) => {
    showCards();
  }); 


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

function showCards(){
    
    console.log("a");
}