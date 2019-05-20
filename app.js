/**  code by ssws ( https://ssws.com ) **/

// ES6

document.querySelector(".pic").addEventListener("mousemove", function (event) {
    event.preventDefault();
    let upX = event.clientX;
    let upY = event.clientY;
    // let mask = document.getElementById("#mask1");
    let circle = document.getElementById("circle");
    circle.setAttribute("cy", (upY - 5) + 'px');
    circle.setAttribute("cx", (upX) + 'px');
});

// Original jQuery

// $('.pic').mousemove(function (event) {
//     event.preventDefault();
//     var upX = event.clientX;
//     var upY = event.clientY;
//     var mask = $('#mask1 circle')[0];
//     mask.setAttribute("cy", (upY - 5) + 'px');
//     mask.setAttribute("cx", (upX) + 'px');
// });