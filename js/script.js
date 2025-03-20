function toggleSidebar() {
    let sidebar = document.getElementById("mySidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".movie-slider");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    leftBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        slider.scrollBy({ left: 250, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("scroll-container");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const scrollAmount = 200; // Seberapa jauh scroll setiap klik tombol

    nextBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft += scrollAmount;
    });

    prevBtn.addEventListener("click", () => {
        scrollContainer.scrollLeft -= scrollAmount;
    });

    // Sembunyikan tombol prev jika sudah di posisi awal
    function checkScroll() {
        prevBtn.style.display = scrollContainer.scrollLeft > 0 ? "block" : "none";
        nextBtn.style.display =
            scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth
                ? "none" : "block";
    }

    scrollContainer.addEventListener("scroll", checkScroll);
    checkScroll(); // Panggil saat pertama kali halaman dimuat
});


document.getElementById('searchBar').addEventListener('keyup', function () {
    let filter = this.value.toLowerCase();
    let movies = document.querySelectorAll('.movie-item');

    movies.forEach(function (movie) {
        let title = movie.querySelector('.movie-title').textContent.toLowerCase();
        if (title.includes(filter)) {
            movie.style.display = '';
        } else {
            movie.style.display = 'none';
        }
    });
});

let selectedRating = 0;

// Ambil semua elemen bintang
const stars = document.querySelectorAll('.star-rating i');
const removeRatingBtn = document.getElementById('removeRating'); // Tombol Remove Rating

// Fungsi untuk mewarnai bintang berdasarkan rating
function updateStars(value) {
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        star.classList.toggle('active', starValue <= value);
    });
}

// Event hover: Menyalakan bintang saat hover
stars.forEach(star => {
    star.addEventListener('mouseover', function () {
        updateStars(parseInt(this.getAttribute('data-value')));
    });

    // Reset tampilan saat mouse keluar dari area bintang
    star.addEventListener('mouseleave', function () {
        updateStars(selectedRating);
    });

    // Klik untuk memilih rating
    star.addEventListener('click', function () {
        selectedRating = parseInt(this.getAttribute('data-value'));
        updateStars(selectedRating);

        // Tampilkan tombol Remove Rating setelah memilih rating
        removeRatingBtn.style.display = "block";
    });
});

// Submit rating
document.getElementById('submitRating').addEventListener('click', function () {
    if (selectedRating > 0) {
        document.getElementById('ratingValue').textContent = selectedRating;
        document.getElementById('ratingValue1').textContent = selectedRating;
        document.getElementById('ratingValue2').textContent = selectedRating;
        document.querySelector('.rating-box .star').style.color = '#1e90ff';

        // Tampilkan tombol Remove Rating setelah rating diberikan
        removeRatingBtn.style.display = "block";

        let modal = bootstrap.Modal.getInstance(document.getElementById('ratingModal'));
        modal.hide();
    }
});

// Reset rating saat modal dibuka kembali
document.getElementById('ratingModal').addEventListener('show.bs.modal', function () {
    updateStars(selectedRating);
});

// Event untuk menghapus rating
removeRatingBtn.addEventListener('click', function () {
    selectedRating = 0;
    updateStars(selectedRating);

    // Kembalikan teks rating ke "Rate"
    document.getElementById('ratingValue').textContent = "?";
    document.getElementById('ratingValue1').textContent = "?";
    document.getElementById('ratingValue2').textContent = "?";

    // Kembalikan warna ikon bintang ke default
    document.querySelector('.rating-box .star').style.color = '';

    // Sembunyikan tombol Remove Rating
    removeRatingBtn.style.display = "none";
});

