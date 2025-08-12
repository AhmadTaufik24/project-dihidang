document.addEventListener('DOMContentLoaded', () => {
    // --- DATA UNTUK SEMUA SLIDER ---
    const galleryData = [
        {
            img: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MjIwNzE4OTJ8&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'NASI GORENG CHILI OIL 1',
            desc: 'Posisi Potrait',
            pros: 'Nasi goreng disajikan rapi dengan bentuk bulat dan bumbu merata, memiliki komposisi warna menarik, dilengkapi properti pendukung lengkap, uap panas yang terlihat, pencahayaan yang menonjolkan tekstur makanan serta retouch yang tepat menyempurnakan hasil fotonya',
            cons: 'Cahaya di beberapa bagian terlihat sedikit agak flat karena keterbatasan lampu dan alat pencahayaan, sehingga kontras kurang maksimal untuk menonjolkan kilap dan tekstur nasi, namun masih sangat cukup untuk keperluan makanan seperti ini'
        },
        {
            img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MjIwNzE5MTd8&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'NASI GORENG CHILI OIL 2',
            desc: 'Posisi Landscape',
            pros: 'Komposisi foto rapi dengan penataan properti yang lengkap seperti sebelumnya, nasi goreng terlihat hangat dan bertekstur jelas dengan warna yang menggugah selera dan retouch yang tepat menyempurnakan hasil fotonya',
            cons: 'Fokus foto sedikit agak terpecah karena pencahayaan agak datar sehingga kilap nasi kurang menonjol, namun masih sangat cukup untuk keperluan produk nasi seperti nasi goreng ini.'
        },
        {
            img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MjIwNzE5MzZ8&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'SalNASI GORENG CHILI OIL 3',
            desc: 'Campuran sayuran hijau segar, buah beri, kacang kenari, dan keju feta dengan vinaigrette lemon.',
            pros: 'Sangat menyegarkan, sehat, dan penuh warna. Tekstur beragam.',
            cons: 'Daun selada bisa cepat layu jika saus dituangkan terlalu awal.'
        },
    ];

    const mockupData = [
        {
            img: 'assets/foto/foto1.jpg',
            title: 'Desain Feed instagram',
            desc: 'Foto hidangan menjadi visual utama dalam desain menu, memberikan gambaran yang jelas dan menggugah selera bagi pelanggan.',
        },
        {
            img: 'https://images.unsplash.com/photo-1511920183276-5941c68a6d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MjIwNzIwNjB8&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Konten story Instagram',
            desc: 'Visual yang kuat sangat penting untuk media sosial. Foto berkualitas tinggi dapat meningkatkan engagement dan citra merek secara signifikan.',
        },
        {
            img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfGFsbHx8fHx8fHx8fDE3MjIwNzIxMDN8&ixlib=rb-4.0.3&q=80&w=1080',
            title: 'Desain Menu',
            desc: 'Pada Desain Menu, foto produk berfungsi sebagai "wajah" yang menarik konsumen untuk membeli dan mencoba.',
        }
    ];

    const btsData = [
    { img: 'assets/foto/foto1.jpg', desc: 'Proses pemilihan daging dan bumbu utama.' },
    { img: 'assets/foto/foto2.jpg', desc: 'Tim sedang melakukan plating akhir sebelum pemotretan.' },
    { img: 'assets/foto/foto3.jpg', desc: 'Suasana dapur yang sibuk namun tetap terkoordinasi.' }
];


    // --- ELEMEN & FUNGSI GALERI UTAMA ---
    const galleryImage = document.getElementById('gallery-image');
    let currentGalleryIndex = 0;
    function updateGallery(index) {
        const item = galleryData[index];
        galleryImage.style.opacity = 0;
        setTimeout(() => {
            galleryImage.src = item.img;
            document.getElementById('gallery-title').textContent = item.title;
            document.getElementById('gallery-desc').textContent = item.desc;
            document.getElementById('gallery-pros').textContent = item.pros;
            document.getElementById('gallery-cons').textContent = item.cons;
            galleryImage.style.opacity = 1;
        }, 300);
    }
    document.getElementById('next-btn').addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryData.length;
        updateGallery(currentGalleryIndex);
    });
    document.getElementById('prev-btn').addEventListener('click', () => {
        currentGalleryIndex = (currentGalleryIndex - 1 + galleryData.length) % galleryData.length;
        updateGallery(currentGalleryIndex);
    });

    // --- ELEMEN & FUNGSI SLIDER MOCKUP ---
    const mockupImage = document.getElementById('mockup-image');
    let currentMockupIndex = 0;
    function updateMockup(index) {
        const item = mockupData[index];
        mockupImage.style.opacity = 0;
        setTimeout(() => {
            mockupImage.src = item.img;
            document.getElementById('mockup-title').textContent = item.title;
            document.getElementById('mockup-desc').textContent = item.desc;
            mockupImage.style.opacity = 1;
        }, 300);
    }
    document.getElementById('mockup-next-btn').addEventListener('click', () => {
        currentMockupIndex = (currentMockupIndex + 1) % mockupData.length;
        updateMockup(currentMockupIndex);
    });
    document.getElementById('mockup-prev-btn').addEventListener('click', () => {
        currentMockupIndex = (currentMockupIndex - 1 + mockupData.length) % mockupData.length;
        updateMockup(currentMockupIndex);
    });

    // --- ELEMEN & FUNGSI SLIDER BTS ---
    const btsImage = document.getElementById('bts-image');
    let currentBtsIndex = 0;
    function updateBts(index) {
        btsImage.src = btsData[index].img;
        document.getElementById('bts-desc').textContent = btsData[index].desc;
    }
    document.getElementById('bts-next-btn').addEventListener('click', () => {
        currentBtsIndex = (currentBtsIndex + 1) % btsData.length;
        updateBts(currentBtsIndex);
    });
    document.getElementById('bts-prev-btn').addEventListener('click', () => {
        currentBtsIndex = (currentBtsIndex - 1 + btsData.length) % btsData.length;
        updateBts(currentBtsIndex);
    });

    // --- FUNGSI ZOOM MODAL ---
    const modal = document.getElementById('zoom-modal');
    const modalImg = document.getElementById('zoomed-image');
    const zoomableImages = document.querySelectorAll('.zoomable');
    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            modal.classList.add('show');
            modalImg.src = img.src;
        });
    });
    document.querySelector('.close-btn').addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('show');
    });

    // --- INISIALISASI HALAMAN ---
    updateGallery(0);
    updateMockup(0);
    updateBts(0);
});