const form = document.getElementById('add-contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#add-contact-name').value;
  const address = document.querySelector('#add-contact-address').value;

  const data = {
    name: name,
    address: address
  };
  
  fetch('http://localhost:8080/api/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
