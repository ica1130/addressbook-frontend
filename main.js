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

const formName = document.querySelector('#search-form-name');

formName.addEventListener('submit', (event) => {
  event.preventDefault();

  const searchResults = document.querySelector('#search-results');
  const nameInput = document.querySelector('#search-contact-name').value;

  fetch(`http://localhost:8080/api/contacts?name=${nameInput}`)
    .then(response => response.json())
    .then(data => {
      
      searchResults.innerHTML = '';
      if (data.length === 0) {
        searchResults.innerHTML = 'No results found';
        return;
      }

      data.forEach(contact => {
        
        if (contact.name === nameInput) {
        const resultElement = document.createElement('div');
        resultElement.innerHTML = `ID: ${contact.id}, Name: ${contact.name}, Address: ${contact.address}`;
        searchResults.appendChild(resultElement);
        } 
        });
    })
    .catch(error => console.error(error));
});

const deleteForm = document.getElementById('delete-form');
deleteForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const contactId = document.getElementById('delete-contact-id').value;
  const url = `/contacts/${contactId}`;

  fetch(url, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Contact deleted successfully!');
      
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while deleting the contact.');
    });
});

