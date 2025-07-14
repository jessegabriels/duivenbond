    // Scroll smooth naar boven
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Toon/verberg knop afhankelijk van scrollpositie
    window.onscroll = function () {
        const topButton = document.getElementById("topButton");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
        } else {
        topButton.style.display = "none";
        }
    };