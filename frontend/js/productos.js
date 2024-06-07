document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/v1/products')
      .then(response => response.json())
      .then(data => {
        const productos_Container = document.querySelector('#productos_item');
        productos_Container.innerHTML = ''; // Limpiar el contenedor
  
        data.forEach((item, index) => {
          const productos_item = `
            <section class="section section-md">
        <div class="container">
          <!-- Profile Modern-->
          <article class="profile-modern">
            <div class="profile-modern-figure"><img class="profile-modern-image" src="${item.foto}" alt="${item.name}" width="336" height="336"/>
            </div>
            <div class="profile-modern-main">
              <div class="profile-modern-header">
                <div class="profile-modern-header-item">
                  <h3>${item.name}</h3>
                  <p>${item.type}</p>
                  <h5>$${item.price}</h5>
                </div>
                
              </div>
              <div class="row row-30">
                <div class="col-lg-12">
                  <p>${item.description}</p>
                </div>
                
              </div>
            </div>
          </article>
        </div>
      </section>
   
          `;
          productos_Container.innerHTML += productos_item;
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });