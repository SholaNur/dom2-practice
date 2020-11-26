let order = document.getElementsByTagName("li");
console.log(order);
order[1].style.fontStyle = "italic";
order[2].style.color = "red";
document.querySelector("button").style.backgroundColor = "lightblue";
document.querySelector("li a").style.color = "orange";

// classList => property and add, remove, toggle => methods
document.querySelector("button").classList.add("huge");