/**  code by ssws ( https://ssws.com ) **/
$('.pic').mousemove(function (event) {
    event.preventDefault();
    var upX = event.clientX;
    var upY = event.clientY;
    var mask = $('#mask1 circle')[0];
    mask.setAttribute("cy", (upY - 5) + 'px');
    mask.setAttribute("cx", (upX) + 'px');
});