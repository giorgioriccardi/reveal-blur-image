/**  code by ssws ( https://ssws.com ) **/

// ES6

document.querySelector(".pic").addEventListener("mousemove", function (event) {
    console.log("event start");
    event.preventDefault();
    let upX = event.clientX;
    let upY = event.clientY;
    let circle = document.getElementById("circle");
    circle.setAttribute("cy", (upY - 5) + 'px');
    circle.setAttribute("cx", (upX) + 'px');
    console.log("event end");
});
console.log("function end");

// Original jQuery

// $('.pic').mousemove(function (event) {
//     event.preventDefault();
//     var upX = event.clientX;
//     var upY = event.clientY;
//     var mask = $('#mask1 circle')[0];
//     mask.setAttribute("cy", (upY - 5) + 'px');
//     mask.setAttribute("cx", (upX) + 'px');
// });