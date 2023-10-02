// Modificar imagen de forma dinamica

let miImagen = document.querySelector('img');
miImagen.onclick = function() {
  let miSrc = miImagen.getAttribute('src');
  if (miSrc === 'images/firefox_logo.png') {
    miImagen.setAttribute('src', 'images/libertad.jpg');
  } else {
    miImagen.setAttribute('src', 'images/firefox_logo.png');
  }
}

// Definir un mensaje personalizado de bienvenida

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function establecerNombreUsuario() {
  let miNombre = prompt('Por favor, ingresa tu nombre.');
  if (!miNombre) {
    establecerNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial, ' + miNombre;
  }
}

if (!localStorage.getItem('nombre')) {
  establecerNombreUsuario();
} else {
  let nombreAlmacenado = localStorage.getItem('nombre');
  miTitulo.textContent = 'Mozilla es genial, ' + nombreAlmacenado
}

miBoton.onclick = function () {
  establecerNombreUsuario();
};
