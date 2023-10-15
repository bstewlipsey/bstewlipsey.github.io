window.onload = function() {
    var trans1 = document.getElementById("img")
    var trans2 = document.getElementById("img2")

    trans1.setAttribute("style","display: block; bottom: 40%; ")

    var interval = setInterval(changeImg,5000)

    img.addEventListener("mouseenter", () => {
        clearInterval(interval);
    });
      
    img.addEventListener("mouseleave", () => {
        interval = setInterval(changeImg, 5000);
    });

    img.addEventListener("mousedown", () => {
        changeImg()
    });
    function changeImg(){
        console.log("hi")
    }
}