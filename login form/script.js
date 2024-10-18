document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah halaman refresh

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    const loginImage = document.querySelector('.login-image');

    // Kirim data ke koneksi.php menggunakan fetch
    fetch('koneksi.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'username': username,
            'password': password,
        })
    })
    .then(response => response.json()) // Menangani respons sebagai JSON
    .then(data => {
        if (data.status === 'success') {
            alert(data.message); // Menampilkan pesan sukses
            errorMessage.style.display = 'none'; // Sembunyikan pesan error jika login berhasil
            
            // Redirect ke dashboard
            window.location.href = 'dashboard.html'; // Ganti dengan path dashboard yang sesuai
        } else {
            errorMessage.textContent = data.message; // Tampilkan pesan error jika gagal
            errorMessage.style.display = 'block'; // Tampilkan elemen pesan error
            
            // Animasi gambar jika login gagal
            loginImage.classList.add('slide');

            // Menghapus class setelah animasi selesai
            setTimeout(() => {
                loginImage.classList.remove('slide');
            }, 500); // Hapus class setelah 500ms

            // Tambahkan efek goyang setelah slide
            setTimeout(() => {
                loginImage.classList.add('shake');
                setTimeout(() => {
                    loginImage.classList.remove('shake');
                }, 500); // Hapus shake setelah 500ms
            }, 500); // Mulai shake setelah slide selesai
        }
    })
    .catch(error => {
        console.error('Error:', error);
        errorMessage.textContent = 'Something went wrong. Please try again.';
        errorMessage.style.display = 'block';
    });
});
