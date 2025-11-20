document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".column");

  fetch("../data/tuhfatul.json")
    .then(res => res.json())
    .then(baits => {
      console.log("✅ JSON berhasil dimuat, jumlah bait:", baits.length);
      baits.forEach((bait, i) => {
        const p = document.createElement("p");
        p.id = `bait-${i + 1}`;
        p.innerHTML = bait.replace("۞", '<span class="separator">۞</span>');
        container.appendChild(p);
      });

      console.log("✅ Semua bait sudah ditambahkan ke halaman");
      document.dispatchEvent(new Event("baitsLoaded"));
    })
    .catch(err => console.error("❌ Error memuat bait:", err));
});
