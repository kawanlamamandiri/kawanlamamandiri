// script.js
document.addEventListener('DOMContentLoaded', function() {
    const showCardButton = document.getElementById('showCard');
    const announcementCard = document.getElementById('announcementCard');
    const closeButton = document.getElementById('closeButton');

    showCardButton.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah perilaku default link
        announcementCard.style.display = 'block'; // Menampilkan kartu
    });

    closeButton.addEventListener('click', function() {
        announcementCard.style.display = 'none'; // Menyembunyikan kartu
    });
});
