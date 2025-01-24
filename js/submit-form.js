$(function () {
    'use strict';

    // Ambil semua formulir yang ingin kita terapkan gaya validasi kustom Bootstrap
    const forms = $('.needs-validation');

    // Loop melalui formulir dan mencegah pengiriman
    forms.on('submit', function (event) {
        const form = $(this);

        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            $('.submit_form').html('Odesílá se...');
            const toast = new bootstrap.Toast($('.success_msg')[0]);
            const errtoast = new bootstrap.Toast($('.error_msg')[0]);

            $.ajax({
              "url": "https://sendmail.obinn.cz/",
              "method": "POST",
              "timeout": 0,
              "processData": false,
              "mimeType": "multipart/form-data",
              "contentType": false,
              "data": form,

              success: function (response) {
                if (response == 'success') {
                    toast.show()
                    $('.submit_form').html('Submit');
                } else {
                    errtoast.show()
                    $('.submit_form').html('Submit');
                }
              },
            });
        }

        form.addClass('was-validated');
    });
});