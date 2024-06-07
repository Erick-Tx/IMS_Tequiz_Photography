document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  if (id) {
    fetch(`http://localhost:3000/api/v1/portfolios/${id}`)
      .then(response => response.json())
      .then(item => {
        document.querySelector('h1').textContent = item.title;
        document.querySelector('h3').textContent = item.title;
        document.querySelector('#description').textContent = item.description;
        document.querySelector('#tag').textContent = item.tag;
        document.querySelector('#date').textContent = item.Session.date;
        document.querySelector('#place').textContent = item.Session.place;
        

        // Agregar esta línea para modificar la etiqueta <img>
        document.querySelector('#foto').src = item.mainImage;

        // Obtener referencia a la sección donde se agregarán las imágenes
        const isotopeSection = document.querySelector('.isotope');
        isotopeSection.innerHTML = ''; // Limpiar el contenedor

        // Iterar sobre el array additionalImages y crear los elementos HTML para cada imagen
        item.additionalImages.forEach(imageUrl => {
          const outerDiv = document.createElement('div');
          outerDiv.classList.add('col-12', 'col-sm-6', 'col-lg-4', 'isotope-item', 'wow-outer');

          const innerDiv = document.createElement('div');
          innerDiv.classList.add('thumbnail-corporate', 'wow', 'slideInDown');

          const img = document.createElement('img');
          img.classList.add('thumbnail-corporate-image');
          img.src = imageUrl;
          img.alt = '';
          img.width = '370';
          img.height = '256';

          const dummyDiv = document.createElement('div');
          dummyDiv.classList.add('thumbnail-corporate-dummy');

          innerDiv.appendChild(img);
          innerDiv.appendChild(dummyDiv);
          outerDiv.appendChild(innerDiv);

          isotopeSection.appendChild(outerDiv);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
});