document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registro-form");
    const tablaDatos = document.getElementById("tabla-datos");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); 

       
        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

      
        if (nombre === "" || email === "" || password === "") {
            alert("Por favor, complete todos los campos.");
            return;
        }

        
        const fila = document.createElement("tr");
        fila.innerHTML = `<td>${nombre}</td><td>${email}</td><td>${password}</td>`;
        tablaDatos.appendChild(fila);

        
        formulario.reset();
    });
});
