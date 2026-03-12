const userName = document.getElementById('name');
const userAge = document.getElementById('age');
const userEmail = document.getElementById('email');
const table = document.getElementById('table')

// Mostrar infos na table
async function getUsers() {
    const response = await fetch("http://localhost:8000/api/users");
    const data = await response.json();
    const users = data.users;

    table.innerHTML = "";

    users.forEach(user => {
        table.innerHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
            </tr>
        `;
    });
    
}

getUsers();

// Função criar usuário
async function createUser() {
    const response = await fetch("http://localhost:8000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    email: document.getElementById("email").value
  }),
});
const created = await response.json();
}
