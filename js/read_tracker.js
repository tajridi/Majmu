function initReadTracker() {
  const baits = document.querySelectorAll("p[id^='bait-']");
  const lastRead = localStorage.getItem("lastReadBait");

  if (lastRead) {
    const lastElement = document.getElementById(lastRead);
    if (lastElement) lastElement.classList.add("last-read-marker");
  }

  baits.forEach(bait => {
    bait.addEventListener("click", () => {
      baits.forEach(b => b.classList.remove("last-read-marker"));
      bait.classList.add("last-read-marker");
      localStorage.setItem("lastReadBait", bait.id);
    });
  });
}
