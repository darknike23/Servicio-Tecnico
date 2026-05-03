const servicios = [
  {nombre:"Formateo", precio:20000},
  {nombre:"Cambio pantalla", precio:50000},
  {nombre:"Limpieza", precio:15000},
  {nombre:"Upgrade SSD", precio:40000}
];

const catalogo = document.getElementById("catalogo");

servicios.forEach(s=>{
  catalogo.innerHTML += `
    <div class="card">
      <h3>${s.nombre}</h3>
      <p>$${s.precio}</p>
    </div>
  `;
});

function sendMessage(){
  let input=document.getElementById("userInput").value.toLowerCase();
  let chat=document.getElementById("chatbox");

  chat.innerHTML+=`<p>👤 ${input}</p>`;

  let res = diagnostico(input);

  chat.innerHTML+=`<p style="color:#22c55e">🤖 ${res}</p>`;
}

function diagnostico(txt){

  if(txt.includes("pantalla negra"))
    return "Puede ser GPU, RAM o pantalla. Prueba monitor externo.";

  if(txt.includes("lento"))
    return "Puede requerir SSD o formateo.";

  if(txt.includes("no enciende"))
    return "Revisar fuente o placa.";

  if(txt.includes("calienta"))
    return "Necesita limpieza interna urgente.";

  return "No tengo diagnóstico exacto. Escríbenos al WhatsApp.";
}
