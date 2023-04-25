const form = document.getElementById("form-registro");

form.addEventListener("submit",async (event)=>{

    event.preventDefault();
    const name = document.getElementById("name");
    const firstname = document.getElementById("firstname");
    const email = document.getElementById("email");
    const age = document.getElementById("age");
    const password = document.getElementById("password");

    const response = await fetch("http://localhost:3000/auth/registro",{

    method:"POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
        name: name.value,
        firstname: firstname.value,
        email: email.value,
        age: age.value,
        password: password.value
    })
    })  
    const data = await response.json()
    console.log("data")
    window.location.href = 'login.html'
    console.log(data)


})