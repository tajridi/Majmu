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

      // Setelah semua bait ditambahkan, panggil event khusus
      document.dispatchEvent(new Event("baitsLoaded"));
    })
    .catch(err => console.error("Error memuat bait:", err));
});
