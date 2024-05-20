    // Pobranie referencji do elementów
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    var galleryImages = document.querySelectorAll(".gallery img");

    // Funkcja dla kliknięcia na obrazek
    function openModal(imgSrc) {
        modal.style.display = "block";
        modalImg.src = imgSrc;
    }

    // Funkcja dla kliknięcia na modal (poza obrazkiem)
    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // Funkcja dla kliknięcia na przycisk "Zamknij"
    document.querySelector(".close").addEventListener("click", function() {
        closeModal();
    });

    // Funkcja zamykająca modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Dodaj obsługę zdarzenia dla każdego obrazka w galerii
    galleryImages.forEach(function(img) {
        img.addEventListener("click", function() {
            openModal(this.src);
        });
    });