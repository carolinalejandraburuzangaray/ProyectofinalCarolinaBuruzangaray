
let listado = document.getElementById("listado");

fetch("./data.json")
then((response) => response.json())
then((response) => {
response.forEach((producto) => {
const li = document.createElement("li");
li.innerHTML = `
<h2>Id: ${producto.id}</h2>
<p>Nombre: ${producto.nombre}</p>
<b>$${producto.precio}</b>
     `;

listado.append(li);
});
});

//JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));