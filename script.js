function comprar(servicio){
let numero="5353215857";
let mensaje="Hola quiero comprar: "+servicio;
window.open("https://wa.me/"+numero+"?text="+encodeURIComponent(mensaje));
}

let clientes=0;
let ordenes=0;
setInterval(()=>{
if(clientes<500){clientes++; document.getElementById("clientes").innerText=clientes;}
if(ordenes<3000){ordenes+=10; document.getElementById("ordenes").innerText=ordenes;}
},40);

function login(){
let user=document.getElementById('usuario').value;
let pass=document.getElementById('clave').value;
fetch('usuarios.json')
.then(res=>res.json())
.then(data=>{
let valido=data.usuarios.find(u=>u.usuario===user && u.clave===pass);
if(valido){document.getElementById('mensaje').innerText='¡Bienvenido!';}
else{document.getElementById('mensaje').innerText='Usuario o contraseña incorrecta';}
});
}
