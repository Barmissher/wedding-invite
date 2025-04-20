// Fungsi untuk membuka bagian undangan
function openInvitation() {
  document.getElementById("invitation").classList.remove("hidden");
  document.getElementById("invitation").scrollIntoView({ behavior: "smooth" });
  document.getElementById("open-invite").innerText = "Scroll Down";
}

// Fungsi untuk scroll otomatis antar section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Fungsi untuk menampilkan nama tamu berdasarkan input atau query parameter
function setGuestName() {
  const guestInput = document.getElementById('guest-input').value;
  const guestNamePlaceholder = document.getElementById('guest-name-placeholder');
  
  // Cek apakah input ada
  if (guestInput) {
    guestNamePlaceholder.innerText = guestInput;
  } else {
    guestNamePlaceholder.innerText = "Bapak/Ibu/Saudara/i";
  }
}

// Ambil nama tamu dari URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const guestNameFromURL = urlParams.get('name');

// Jika ada nama tamu di URL, tampilkan di halaman
if (guestNameFromURL) {
  document.getElementById('guest-name-placeholder').innerText = guestNameFromURL;
}

// Scroll event untuk menambahkan efek fade-in saat scroll
window.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top <= window.innerHeight * 0.8) {
      section.classList.add("visible");
    }
  });
});
