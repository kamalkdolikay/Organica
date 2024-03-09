var sortButton = document.querySelector("#sort");

sortButton.addEventListener("change", sortList);

function sortList(){
    if(sortButton.value == "Date"){
        console.log("daet");
    } else if(sortButton.value == "Fulfilled"){
        console.log("fulfil"); 
    }
}