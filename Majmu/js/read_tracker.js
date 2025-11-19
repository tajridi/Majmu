// Global Key Prefix
const LAST_READ_PREFIX = 'lastRead_';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dapatkan nama kitab dari atribut data-kitab-name di body
    const currentKitabName = document.body.dataset.kitabName;

    // Hentikan jika ini bukan halaman kitab yang ditandai
    if (!currentKitabName) return; 

    const dynamicKey = LAST_READ_PREFIX + currentKitabName;
    const allBaits = document.querySelectorAll('p[id^="bait-"]');

    // --- FUNGSI UTAMA: MENYIMPAN POSISI ---
    function saveLastRead(baitElement) {
        const baitId = baitElement.id;
        
        const fileName = window.location.pathname.split('/').pop();
        const relativeUrl = 'kitab/' + fileName;
        
        // PENTING: Menambahkan timestamp (waktu saat ini dalam milidetik)
        localStorage.setItem(dynamicKey, JSON.stringify({
            id: baitId,
            url: relativeUrl,
            timestamp: Date.now() // <--- DATA BARU!
        }));
        
        // Tanda visual (opsional)
        allBaits.forEach(bait => bait.classList.remove('last-read-marker'));
        baitElement.classList.add('last-read-marker');
    }
    
    // --- EVENT LISTENER: KLIK BAIT ---
    allBaits.forEach(bait => {
        bait.addEventListener('click', (event) => {
            saveLastRead(event.currentTarget);
        });
    });

    // --- GULIR KE POSISI TERAKHIR DIBACA ---

    // Cek apakah halaman diakses dengan hash (dari tombol Lanjut Membaca)
    if (window.location.hash) {
        const hashId = window.location.hash.substring(1);
        const lastReadBait = document.getElementById(hashId);
        
        if (lastReadBait) {
            lastReadBait.scrollIntoView({ behavior: 'smooth', block: 'start' });
            saveLastRead(lastReadBait); 
        }
    } 
    // Jika tidak ada hash, cek LocalStorage
    else {
        const storedData = localStorage.getItem(dynamicKey);
        if (storedData) {
            const data = JSON.parse(storedData);
            const lastReadBait = document.getElementById(data.id);
            if (lastReadBait) {
                lastReadBait.scrollIntoView({ behavior: 'smooth', block: 'start' });
                lastReadBait.classList.add('last-read-marker');
            }
        }
    }
});