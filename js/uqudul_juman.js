document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".column");

  fetch("../data/uqudul_juman.json")
    .then(res => res.json())
    .then(baits => {
      baits.forEach((bait, i) => {
        const p = document.createElement("p");
        p.id = `bait-${i + 1}`;
        p.innerHTML = bait.replace("۞", '<span class="separator">۞</span>');
        container.appendChild(p);
      });

      // 🔹 Setelah semua bait dimuat, panggil fungsi read tracker
      if (typeof initReadTracker === "function") {
        initReadTracker();
      } else {
        console.warn("⚠️ Fungsi initReadTracker() belum terdeteksi di read_tracker.js");
      }
    })
    .catch(err => console.error("Error:", err));
});
