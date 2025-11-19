// Fungsi utama untuk inisialisasi tracking
function initReadTracker() {
  const baits = document.querySelectorAll("p[id^='bait-']");
  const lastRead = localStorage.getItem("lastReadBait");

  // Jika ada bait terakhir dibaca → tandai
  if (lastRead) {
    const lastElement = document.getElementById(lastRead);
    if (lastElement) {
      lastElement.classList.add("last-read-marker");
      // scroll ke bait terakhir
      lastElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  // Tambahkan event klik ke setiap bait
  baits.forEach(bait => {
    bait.addEventListener("click", () => {
      baits.forEach(b => b.classList.remove("last-read-marker"));
      bait.classList.add("last-read-marker");
      localStorage.setItem("lastReadBait", bait.id);
    });
  });
}

// Jalankan setelah bait selesai dimuat
document.addEventListener("baitsLoaded", () => {
  initReadTracker();
});
