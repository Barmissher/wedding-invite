function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Ganti nama tamu dari URL
window.onload = () => {
  const params = new URLSearchParams(window.location.search);
  const guestName = params.get("to");

  if (guestName) {
    const decodedName = decodeURIComponent(guestName.replace(/\+/g, ' '));
    document.getElementById("guest-name").innerText = `Kepada Yth. ${decodedName}`;
  }
};

// RSVP alert
document.getElementById("rsvp-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih telah mengonfirmasi kehadiran.");
});
