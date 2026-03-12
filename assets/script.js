const userName = document.getElementById('name');
const userAge = document.getElementById('age');
const userEmail = document.getElementById('email');

//



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
