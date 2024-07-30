document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const correo  = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo, mensaje }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un error al enviar el formulario. Inténtalo de nuevo.');
    });
});