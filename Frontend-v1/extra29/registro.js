const form = document.getElementById("form-registro");

form.addEventListener("submit",async (event)=>{

    event.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const email = document.getElementById("email");
    const edad = document.getElementById("edad");
    const contrasena = document.getElementById("contrasena");

    const response = await fetch("http://localhost:3000/auth/registro",{

    method:"POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
        nombre: nombre.value,
        apellido: apellido.value,
        email: email.value,
        edad: edad.value,
        contrasena: contrasena.value
    })
    })  
    const data = await response.json()
    console.log("data")
    window.location.href = 'login.html'
    console.log(data)


})