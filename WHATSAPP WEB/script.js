import { usuarios } from "./contatos.js";

const listaUsuarios = usuarios["whats-users"];

let usuarioAtual = 0;
let contatoAtual = 0;

const iconeMensagens = document.querySelector(".icone-mensagens");
const fotoUsuario = document.querySelector(".foto-usuario-nav");

const contatos = document.querySelector(".contatos");
const perfil = document.querySelector(".usuario-perfil");

const header = document.querySelector("main > header");
const mensagensChat = document.querySelector(".grid-msg");
const formularioChat = document.querySelector("main > form");

iconeMensagens.addEventListener("click", () => {

    contatos.classList.remove("ocultar");
    perfil.classList.remove("ativo");

    mensagensChat.style.display = "grid";
    header.style.display = "flex";
    formularioChat.style.display = "block";

});

fotoUsuario.addEventListener("click", () => {

    perfil.classList.toggle("ativo");

    if (perfil.classList.contains("ativo")) {

        
        contatos.classList.add("ocultar");

        mensagensChat.style.display = "none";
        header.style.display = "none";
        formularioChat.style.display = "none";

    } else {

        
        contatos.classList.remove("ocultar");

        mensagensChat.style.display = "grid";
        header.style.display = "flex";
        formularioChat.style.display = "block";

    }

});

function criarContatos(srcFoto, nome, horas, ultima, naoLidas) {

    //criação dos elementos do card do contato
    const cardContainer = document.createElement('article');
    const fotoContato = document.createElement("img");
    const nomeContato = document.createElement("h2");
    const horasMsg = document.createElement('p');
    const ultimaMsg = document.createElement('p');
    const msgNaoLidas =  document.createElement('p');

    //define quais classe css serão aplicadas para estilizar o elemento
    cardContainer.className = "card-contato grid";
    fotoContato.className = "foto-contato";
    nomeContato.className = "nome-contato";
    horasMsg.className =" horasMsg-Contato";
    ultimaMsg.className = "ultimaMsg-contato";
    msgNaoLidas.className = "msgNaoLidas-contato";

    //Preenche os dados que serão recebidos como parametro da função
    fotoContato.src = srcFoto;
    nomeContato.innerText = nome;
    horasMsg.innerText = horas;
    ultimaMsg.innerHTML = ultima;
    msgNaoLidas.innerText = naoLidas;


    cardContainer.append(fotoContato,nomeContato, horasMsg, ultimaMsg, msgNaoLidas);

    listaContatos.append(cardContainer);
elemento.lista_contatos.append(cardContato);

  cardContato.addEventListener("click", () => {
  mostrarConversa(0, idContato); 
});

}

contatos(0).forEach((element, index) => {
  const mensagensRecebidas = element.messages.filter(
    (msg) => msg.sender !== "me"
  ).length;

  criarContatos(
    index,
    element.name,
    element.messages.at(-1).time,
    element.messages.at(-1).content,
    mensagensRecebidas
  );
});
mostrarConversa(0, 0);
// apaecer e desaparacerer perfil
function mostarPerfil(){
  elemento.foto_perfil.addEventListener('click', (evento) =>{
    evento.preventDefault();
    elemento.mensagems_perfil.classList.toggle("ocultar")
    elemento.perfil.classList.toggle("ocultar")
  })
}
mostarPerfil()
