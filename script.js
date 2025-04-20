function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("to");
  if (guestName) {
    const decodedName = decodeURIComponent(guestName.replace(/\+/g, ' '));
    document.getElementById("guest-name").innerText = `Kepada Yth. ${decodedName}`;
  }

  countdown();
};

document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih telah mengonfirmasi kehadiran.");
});

// Countdown
function countdown() {
  const target = new Date("2025-05-20T00:00:00");
  const timer = document.getElementById("timer");

  setInterval(() => {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      timer.innerHTML = "Hari ini!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    timer.innerHTML = `${days} hari ${hours} jam ${minutes} menit ${seconds} detik`;
  }, 1000);
}

// Music control
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
    document.getElementById("music-toggle").innerText = "Pause Music";
  } else {
    music.pause();
    document.getElementById("music-toggle").innerText = "Play Music";
  }
}
