// File: js/load_nadhom.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".column");

  fetch("data/uqudul_juman.json")
    .then(response => {
      if (!response.ok) throw new Error("Gagal memuat file nadhom.json");
      return response.json();
    })
    .then(baits => {
      console.log("Jumlah bait:", baits.length); // Tambahkan baris ini
      baits.forEach((bait, index) => {
        const p = document.createElement("p");
        p.id = `bait-${index + 1}`;
        // ganti simbol ۞ jadi span agar tampil cantik
        p.innerHTML = bait.replace("۞", '<span class="separator">۞</span>');
        container.appendChild(p);
      });
    })
    .catch(error => {
      console.error("Terjadi kesalahan:", error);
    });
});




