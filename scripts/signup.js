$(document).ready(function() {
    $('#signup').on('submit', function(event) {
      event.preventDefault(); // prevent the default form submission behavior
      var formData = $(this).serialize(); // get the form data as a string
      window.location.href = 'restaurant.html';
      
    });
  });
  