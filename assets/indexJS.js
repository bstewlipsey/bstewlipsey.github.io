window.onload = function() {
    var trans1 = document.getElementById("img")
    var trans2 = document.getElementById("img2")
    var carousel = document.getElementById("carousel")

    trans1.style.zIndex = 2
    trans2.style.zIndex = 1

    var carouselLength = 9
    var carouselIndex = 1
    var position = ["0%","0%", "0%", "0%","0","0%","0%", "0%", "0%"]

    var image = 'assets/images/Carousel/img' +carouselIndex+'.jpg'
    trans1.setAttribute("src",image)
    trans1.style.top = position[carouselIndex-1]
    trans1.style.display = "flex"

    var interval = setInterval(changeImg,5000)

    carousel.addEventListener("mouseenter", () => {
        clearInterval(interval);
    });
      
    carousel.addEventListener("mouseleave", () => {
        interval = setInterval(changeImg, 5000);
    });

    function changeImg(){
        var opacity = 1;

        image = 'assets/images/Carousel/img' +carouselIndex+'.jpg'
        trans2.setAttribute("src",image)
        trans2.style.top = position[carouselIndex-1]
        trans2.style.display = "flex"
        
        const fadeInterval = setInterval(function () {
            if (opacity <= 0) {
                image = 'assets/images/Carousel/img' +carouselIndex+'.jpg'
                trans1.setAttribute("src",image)
                trans1.style.top = position[carouselIndex-1]
                console.log(carouselIndex)
                carouselIndex++
                clearInterval(fadeInterval)
            } else {
                opacity -= 0.01;
                trans1.style.opacity = opacity;
            }
        }, 20);
        if(carouselIndex >=carouselLength){
            carouselIndex = 1
        }
    }
}