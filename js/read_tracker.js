function initReadTracker() {
  console.log("🟢 initReadTracker() dijalankan");

  const baits = document.querySelectorAll("p[id^='bait-']");
  console.log("🔢 Jumlah bait yang ditemukan:", baits.length);

  const lastRead = localStorage.getItem("lastReadBait");

  if (lastRead) {
    const lastElement = document.getElementById(lastRead);
    if (lastElement) {
      console.log("📍 Menandai bait terakhir:", lastRead);
      lastElement.classList.add("last-read-marker");
      lastElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  baits.forEach(bait => {
    bait.addEventListener("click", () => {
      baits.forEach(b => b.classList.remove("last-read-marker"));
      bait.classList.add("last-read-marker");
      localStorage.setItem("lastReadBait", bait.id);
      console.log("💾 Disimpan bait terakhir:", bait.id);
    });
  });
}

document.addEventListener("baitsLoaded", () => {
  console.log("📡 Event 'baitsLoaded' diterima oleh read_tracker.js");
  initReadTracker();
});
