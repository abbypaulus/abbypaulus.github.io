document.addEventListener("DOMContentLoaded", function(){
    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.querySelectorAll(".thumbnail");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", function() {
            const imageUrl = this.getAttribute("src");
            mainImage.setAttribute("src", imageUrl);
        });
    });
});