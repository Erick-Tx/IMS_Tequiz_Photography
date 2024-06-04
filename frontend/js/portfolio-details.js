document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
  
    if (id) {
      fetch(`http://localhost:3000/api/v1/portfolios/${id}`)
        .then(response => response.json())
        .then(item => {
          document.querySelector('h1').textContent = item.title;
          document.querySelector('#description').textContent = item.description;
          document.querySelector('#tag').textContent = item.tag;
          document.querySelector('#createdAt').textContent = new Date(item.createdAt).toLocaleString();
          document.querySelector('#updatedAt').textContent = new Date(item.updatedAt).toLocaleString();
          document.querySelector('#sessionType').textContent = item.Session.type;
          document.querySelector('#sessionPlace').textContent = item.Session.place;
          document.querySelector('#sessionPrice').textContent = `$${item.Session.price}`;
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  });