// =========================================
// Penanda bait terakhir dibaca
// =========================================
function initReadTracker() {
  console.log("🟢 initReadTracker() aktif");

  const baits = document.querySelectorAll("p[id^='bait-']");
  console.log("🔢 Jumlah bait:", baits.length);

  const lastReadKey = document.body.getAttribute("data-kitab-name") + "_lastRead"; 
  const lastRead = localStorage.getItem(lastReadKey);

  // --- Tandai bait terakhir dibaca saat halaman dibuka ---
  if (lastRead) {
    const lastElement = document.getElementById(lastRead);
    if (lastElement) {
      lastElement.classList.add("last-read-marker");
      lastElement.scrollIntoView({ behavior: "smooth", block: "center" });
      console.log("📍 Bait terakhir ditemukan:", lastRead);
    }
  }

  // --- Simpan bait yang diklik ---
  baits.forEach(bait => {
    bait.addEventListener("click", () => {
      // hapus penanda lama
      baits.forEach(b => b.classList.remove("last-read-marker"));
      // tandai baru
      bait.classList.add("last-read-marker");
      // simpan ke localStorage dengan nama kitab unik
      localStorage.setItem(lastReadKey, bait.id);
      console.log("💾 Disimpan bait terakhir:", bait.id);
    });
  });
}

// Jalankan setelah bait selesai dimuat
document.addEventListener("baitsLoaded", () => {
  console.log("📡 Event 'baitsLoaded' diterima — memulai tracker");
  initReadTracker();
});
