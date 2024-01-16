

var signinClick = document.querySelector(".signin");
var myAccountPop = document.querySelector(".myAccountPop");
var blackShadow = document.querySelector(".blackShadow");

signinClick.addEventListener("click", function () {
    if (myAccountPop.style.display === "none") {
        myAccountPop.style.display = "block";
        blackShadow.style.display = "block";
    } else {
        myAccountPop.style.display = "none";
    }
});

var backBtn = document.querySelector(".backBtn");

backBtn.addEventListener("click", function () {
    if (myAccountPop.style.display === "block") {
        myAccountPop.style.display = "none";
        blackShadow.style.display = "none";
    } else {
        myAccountPop.style.display = "none";
    }
});


var expBtn = document.querySelector(".expBtn");
var sideNav = document.querySelector(".sideNav");
var blackShadow = document.querySelector(".blackShadow");

expBtn.addEventListener("click", function () {
    if (sideNav.style.display === "none") {
        sideNav.style.display = "block";
        blackShadow.style.display = "block";
    }
    else{
        sideNav.style.display = "none";
    }
});

var crossicon = document.querySelector('.crossicon');

crossicon.addEventListener("click", function(){
    if(sideNav.style.display === "block"){
        sideNav.style.display = "none";
        blackShadow.style.display = "none";
    }
    else{
        sideNav.style.display = "none";
    }
});


// var collclick = document.querySelectorAll('.collclick');
// var collapse = document.querySelectorAll('.collapse ul');
// var nextElement = collapse.nextElementSibling;

// collclick.forEach(function(element) {
//     element.addEventListener("click", function(){
//         console.log("click");
//         if(this.nextElement.style.display === "none"){
//             nextElement.style.display = "block";
//         }
//     });
// });

var collclick = document.querySelectorAll(".collclick");

collclick.forEach(function (element) {
    element.addEventListener("click", function () {
        console.log("click");

        var ulElement = this.nextElementSibling; // Get the next sibling

        if (ulElement.tagName === "UL") {
            var allUlElements = document.querySelectorAll(".collapse ul");
            allUlElements.forEach(function (ul) {
                if (ul !== ulElement) {
                    ul.style.display = "none";
                }
            });
            if (ulElement.style.display === "none" || ulElement.style.display === "") {
                ulElement.style.display = "block";
            } else {
                ulElement.style.display = "none";
            }
        }
    });
});


