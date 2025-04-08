document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    const messageElement = document.getElementById('message');
    
    if (name) {
      messageElement.textContent = `Olá, ${name}! Bem-vindo ao nosso site!`;
      messageElement.style.color = 'green';
    } else {
      messageElement.textContent = 'Por favor, digite seu nome!';
      messageElement.style.color = 'yellow';
    }
  });

  document.addEventListener('DOMContentLoaded',()=>{
    fetch('data.json')
    .then(response=>response.json())
    .then(data=>{
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = `<p>${data.message}</p>`;
    })
    .catch(error=>console.error('Erro ao carregar o JSON:', error))
  })

  document.addEventListener('DOMContentLoaded', ()=>{
    fetch('http://localhost:3000/data')
    .then(response=>response.json())
    .then(data=>{
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = data.map(item=>
        `<p>${item.coluna}</p>`).join('');
    })
    .catch(error=>console.error('Erro ao carregar os dados:', error));
  })