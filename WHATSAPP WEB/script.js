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


function criarContatos(contato, index, ultimaMensagem, mensagensNaoLida) {

    //criação dos elementos do card do contato
    const card = document.createElement('article');
    
    card.className = "card-mensagem";
    
    const foto = document.createElement("img");
    const nome = document.createElement("p");
    const horario = document.createElement('p');
    const previa = document.createElement('p');

    foto.src = "./assets/imgs/perfil.png";
    foto.alt = contato.name;

   nome.innerText = contato.name;

    horario.className = "horario-mensagem";
    horario.innerText = ultimaMensagem.time;

    previa.className = "previa-mensagem";
    previa.innerText = ultimaMensagem.content;

    card.append(foto,nome, horario, previa);

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
