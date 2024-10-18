const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar', // Ganti tipe grafik sesuai kebutuhan (line, pie, dll.)
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'], // Label data
        datasets: [{
            label: 'Penjualan',
            data: [12, 19, 3, 5, 2, 3], // Data untuk grafik
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Contoh menambahkan data ke tabel (Anda perlu mengambil data dari sumber Anda)
const table = document.querySelector('.data-table table');
const data = [ // Data contoh, ganti dengan data Anda
  { product: 'Product A', sales: 100 },
  { product: 'Product B', sales: 200 },
  { product: 'Product C', sales: 150 }
];

data.forEach(item => {
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  cell1.textContent = item.product;
  cell2.textContent = item.sales;
});