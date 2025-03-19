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
