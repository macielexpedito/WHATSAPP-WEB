import { usuarios } from "./contatos.js";

const listaUsuarios = usuarios["whats-users"];

let usuarioAtual = 0;
let contatoAtual = 0;

const iconeMensagens = document.querySelector(".icone-mensagens");
const fotoUsuario = document.querySelector(".foto-usuario-nav");

const contatosContainer = document.querySelector(".contatos");
const perfil = document.querySelector(".usuario-perfil");

const listaContatos = document.querySelector(".container-mensagens");

const header = document.querySelector("main > header");
const mensagensChat = document.querySelector(".grid-msg");
const formularioChat = document.querySelector("main > form");

const fotoHeader = document.querySelector(".foto-header-container img");
const nomeHeader = document.querySelector(".foto-header-container p");

const inputMensagem = document.querySelector("#send-msg");

const fotoPerfil = document.querySelector(".usuario-foto img");
const nomePerfil = document.querySelector(".usuario-nome p:last-child");
const telefonePerfil = document.querySelector(".usuario-telefone p");

const listaPerfis = document.querySelector(".lista-perfis");


function mostrarContatos(usuarioId) {

    const usuario = listaUsuarios[usuarioId];

    listaContatos.innerHTML = "";

    usuario.contacts.forEach((contato, index) => {

        const mensagens = contato.messages;

        const ultimaMensagem = mensagens[mensagens.length - 1];

        const mensagensRecebidas = mensagens.filter(
            mensagem => mensagem.sender !== "me"
        ).length;


        criarContato(
            contato,
            index,
            ultimaMensagem,
            mensagensRecebidas
        );

    });
}


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
