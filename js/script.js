function toggleSidebar() {
    let sidebar = document.getElementById("mySidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}

// Pencarian Film
document.getElementById('searchBar').addEventListener('keyup', function (event) {
    let filter = this.value.toLowerCase();

    // Mengecek apakah kita berada di halaman AllMovies.html
    if (window.location.pathname.includes("AllMovies.html")) {
        let movies = document.querySelectorAll('.movie-item');

        movies.forEach(function (movie) {
            let title = movie.querySelector('.movie-title').textContent.toLowerCase();
            if (title.includes(filter)) {
                movie.style.display = '';
            } else {
                movie.style.display = 'none';
            }
        });
    } else {
        // Jika di halaman lain, arahkan ke AllMovies.html dengan query search
        if (event.key === "Enter" && filter.trim() !== "") {
            window.location.href = `AllMovies.html?search=${encodeURIComponent(filter)}`;
        }
    }
});

// Saat berada di AllMovies.html, ambil query dan filter hasil
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("AllMovies.html")) {
        let params = new URLSearchParams(window.location.search);
        let searchQuery = params.get("search");

        if (searchQuery) {
            document.getElementById("searchBar").value = searchQuery; // Isi kembali search bar
            let filter = searchQuery.toLowerCase();
            let movies = document.querySelectorAll('.movie-item');

            movies.forEach(function (movie) {
                let title = movie.querySelector('.movie-title').textContent.toLowerCase();
                if (title.includes(filter)) {
                    movie.style.display = '';
                } else {
                    movie.style.display = 'none';
                }
            });
        }
    }
});

// Load Navbar di Halaman Lain
document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        });
});
