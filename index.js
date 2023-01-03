function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email })
    })
    .then(response => response.json())
    .then(response => {
      // Append the id from the response to the DOM
      const newId = response.id;
      document.body.appendChild(document.createTextNode(newId));
    })
    .catch(error => {
        document.body.appendChild(document.createTextNode(error.message));
      })
    }
  

  
  
  
