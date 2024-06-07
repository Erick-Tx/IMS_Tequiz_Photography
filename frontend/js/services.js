document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/v1/services')
      .then(response => response.json())
      .then(data => {
        const servicios_Container = document.querySelector('#servicios_item');
        servicios_Container.innerHTML = ''; // Limpiar el contenedor
  
        data.forEach((item, index) => {
          const servicios_item = `
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
          servicios_Container.innerHTML += servicios_item;
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });