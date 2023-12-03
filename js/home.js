document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.getElementById('overlay');
    var closeButton = document.getElementById('closeOverlay');

    // Periksa apakah overlay sudah ditampilkan sebelumnya selama sesi ini
    var hasShownOverlay = sessionStorage.getItem('hasShownOverlay');

    // Jika belum pernah ditampilkan selama sesi ini, tampilkan overlay
    if (!hasShownOverlay) {
        overlay.classList.remove('d-none');
        sessionStorage.setItem('hasShownOverlay', 'true');
    }

    closeButton.addEventListener('click', function () {
        overlay.classList.add('d-none'); // Menyembunyikan overlay saat tombol ditutup
    });
});

