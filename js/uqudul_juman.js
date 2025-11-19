document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".column");

  fetch("../data/uqudul_juman.json")
    .then(res => {
      if (!res.ok) throw new Error("Gagal memuat JSON");
      return res.json();
    })
    .then(baits => {
      console.log("Jumlah bait:", baits.length); // debug
      baits.forEach((bait, i) => {
        const p = document.createElement("p");
        p.id = `bait-${i + 1}`;
        p.innerHTML = bait.replace("۞", '<span class="separator">۞</span>');
        container.appendChild(p);
      });
    })
    .catch(err => console.error("Error:", err));
});
