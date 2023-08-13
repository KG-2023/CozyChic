// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use required'
  
    window.addEventListener('load', function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation')
  
      // Loop over them and prevent submission
      Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
          if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    }, false)
}())
  

function validateAndSubmit() {
    // Get the form
    var form = document.getElementById('needs-validation');

    // Check if the form is valid
    if (form.checkValidity()) {
        // You can process the form here (e.g., send data to a server)
        // For this example, we'll just show an alert
        alert('Thank you. Order has been processed!');
    } else {
        // Show the default validation error messages
        form.reportValidity();
    }
}