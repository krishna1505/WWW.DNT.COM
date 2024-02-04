document.getElementById("menuBar").addEventListener("click", function(event) {
    event.preventDefault();
    var clickedLink = event.target;
    if (clickedLink.tagName === "A") {
        // Change active link color
        var links = this.getElementsByTagName("a");
        for (var i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
        }
        clickedLink.classList.add("active");
    }
});