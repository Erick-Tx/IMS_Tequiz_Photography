document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/v1/sessions')
      .then(response => response.json())
      .then(data => {
        const sesion_Container = document.querySelector('#sesion_item');
        sesion_Container.innerHTML = ''; // Limpiar el contenedor
  
        data.forEach((item, index) => {
          const sesion_item = `
            <section class="section section-sm" >
        <div class="container" style="border: 2px dotted black; padding: 30px;">
          <!-- Profile Modern-->
          <article class="profile-modern">
            
            <div class="profile-modern-main">
              <div class="profile-modern-header">
                <div class="profile-modern-header-item">
                  <h3 style="color: rgb(3, 74, 254);" id="type">${item.type}</h3>
                </div>
                
              </div>
              <div class="row row-30">
                <div class="col-lg-12">
                  <p><b>Lugar del evento: </b><span id="place">${item.type}</span></p>
                  <p><b>Precio: </b><span id="price">$${item.price}</span></p>
                  <p><b>Fecha: </b><span id="date">${item.date}</span></p>
                  <p><b>Equipo Utilizado: </b><span id="equipo">${item.Equipment.type} ${item.Equipment.brand} ${item.Equipment.model}</span></p>
                  <hr>
                  <p style="text-align: center;">Datos del Cliente</p>
                  <hr>
                  <p><b>Nombre: </b><span id="name">${item.Client.name} ${item.Client.lastName}</span></p>
                  <p><b>Cédula: </b><span id="cedula">${item.Client.idDocument}</span></p>
                  <p><b>Correo: </b><span id="correo">${item.Client.email}</span></p>
                  <p><b>Celular: </b><span id="phone">${item.Client.phone}</span></p>
                </div>
                
              </div>
            </div>
          </article>
        </div>
      </section>

   
          `;
          sesion_Container.innerHTML += sesion_item;
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });