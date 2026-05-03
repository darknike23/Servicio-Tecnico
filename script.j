function sendMessage(){
  let input = document.getElementById("userInput").value;
  let chat = document.getElementById("chatbox");

  chat.innerHTML += "<p>👤 " + input + "</p>";

  let respuesta = "";

  if(input.includes("pantalla negra")){
    respuesta = "Puede ser RAM o GPU.";
  }
  else if(input.includes("lento")){
    respuesta = "Tu PC necesita limpieza o SSD.";
  }
  else{
    respuesta = "Escríbenos por WhatsApp para ayuda.";
  }

  chat.innerHTML += "<p>🤖 " + respuesta + "</p>";
}
