document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/api/v1/portfolios')
      .then(response => response.json())
      .then(data => {
        const portfolioContainer = document.querySelector('.isotope');
        portfolioContainer.innerHTML = ''; // Limpiar el contenedor
  
        data.forEach((item, index) => {
          const portfolioItem = `
            <div class="col-12 col-sm-6 col-lg-4 isotope-item wow-outer">
              <article class="thumbnail-corporate wow slideInDown" style="margin-top: 25px;">
                <img class="thumbnail-corporate-image" src="${item.mainImage}" alt="${item.title}" width="370" height="256"/>
                <div class="thumbnail-corporate-caption">
                  <p class="thumbnail-corporate-title"><a href="portafolio_detalle.html?id=${item.portfolioItemID}">${item.title}</a></p>
                  <p>${item.description}</p>
                  <a class="thumbnail-corporate-link" href="portafolio_detalle.html?id=${item.portfolioItemID}">
                    <span class="icon mdi mdi-magnify"></span>
                    <span class="icon mdi mdi-magnify"></span>
                  </a>
                </div>
                <div class="thumbnail-corporate-dummy"></div>
              </article>
            </div>
          `;
          portfolioContainer.innerHTML += portfolioItem;
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });