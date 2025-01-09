document.addEventListener("DOMContentLoaded", function() {
    function updateCountdown() {
        const releaseDate = new Date('2025-01-24');
        const now = new Date();
        const diff = releaseDate - now;

        if (diff <= 0) {
            document.getElementById('announcement-bar').style.display = 'none';
        } else {
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            document.getElementById('countdown-timer').textContent = `${days} дней`;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000 * 60 * 60 * 24); // Обновлять каждый день
});