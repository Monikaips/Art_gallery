var thumbnails = document.querySelectorAll(".thumbnail");
var mainImage = document.querySelector('#main-image');

for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        mainImage.src = this.src;
        window.scroll(0,0);
    });
}
