$(document).ready(function () {
  // Jalankan fungsi smooth scrolling pada klik navbar
  $('.navbar-nav a, .navbar-brand  a, #btnLihatProduk').on('click', function (event) {
    event.preventDefault();

    // Ambil tujuan scroll dari atribut href
    var target = $(this.hash);
    if (target.length) {
      // Animasikan scroll ke tujuan dengan efek smooth
      $('html, body').animate(
        {
          scrollTop: target.offset().top,
        },
        {
          duration: 800, // Adjust the animation speed as needed
          step: function (now, fx) {
            // Memastikan bahwa latar belakang tetap transparan selama animasi
            // $('.navbar').css('background-color', 'rgba(46, 204, 113, ' + now + ')');
            $('.navbar').css('background-color', 'rgba(33, 33, 33, ' + now + ')');
          },
        }
      );
    }
  });

  $('.filter-btn').on('click', function () {
    var category = $(this).data('filter');

    // Menampilkan/menyembunyikan kartu sesuai dengan kategori
    $('.card-container').each(function () {
      if (category === 'all' || $(this).data('category') === category) {
        $(this).fadeIn();
      } else {
        $(this).fadeOut();
      }
    });
  });

  // Event handler untuk tombol "Deskripsi"
  $('.deskripsi-btn').on('click', function () {
    // Ambil informasi produk dari elemen terkait
    var cardContainer = $(this).closest('.card-container');
    var productName = cardContainer.find('.card-title').text();
    var productPrice = cardContainer.find('.card-text').text().replace('Price: ', '');
    
    // Update konten modal dengan informasi produk yang sesuai
    $('#deskripsiModalLabel1').text('Deskripsi ' + productName);
    $('#deskripsiModal1 .modal-body').html(
      '<p>Nama Barang: ' + productName + '</p>' +
      '<p>Harga: ' + productPrice + '</p>' +
      '<p>Deskripsi: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan justo sit amet auctor bibendum.</p>'
    );
  });
  
  $('#testimoniSlider').carousel();

});
