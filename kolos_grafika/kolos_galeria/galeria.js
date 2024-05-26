var largephoto = document.getElementById("large-photo");
var imglarge = document.getElementById("img-large");
var photos = document.querySelectorAll(".photos img");

function openImage(ImgSrc){
    largephoto.style.display = "flex";
    //largephoto.classList.add("show");
    imglarge.src = ImgSrc;
}

function closeImage(){
    largephoto.style.display = "none";
}

largephoto.addEventListener("click", function(event){
    if(event.target === largephoto){
        closeImage();
    }
});

photos.forEach(function(img){
    img.addEventListener("click", function(event){
        openImage(this.src);
        this.parentNode.prepend(this);
    })
})