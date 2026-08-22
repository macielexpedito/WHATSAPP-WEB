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

    foto.src = "./WHATSAPP WEB/assets/imgs/perfil.png";
    foto.alt = contato.name;

   nome.innerText = contato.name;

    horario.className = "horario-mensagem";
    horario.innerText = ultimaMensagem.time;

    previa.className = "previa-mensagem";
    previa.innerText = ultimaMensagem.content;

    card.append(foto,nome, horario, previa);

     if (mensagensNaoLidas > 0) {

        const bola = document.createElement("div");

        bola.className = "bola";

        const numero = document.createElement("p");

        numero.innerText = mensagensNaoLidas;

        bola.append(numero);

        card.append(bola);
    }


    // Quando clicar no contato
    card.addEventListener("click", () => {

        mostrarConversa(usuarioAtual, index);

    });
  

    listaContatos.append(card);

}

function mostrarConversa(usuarioId, contatoId) {

    usuarioAtual = usuarioId;
    contatoAtual = contatoId;

    const usuario = listaUsuarios[usuarioId];

    const contato = usuario.contacts[contatoId];

    if (!contato) {
        return;
    }
  nomeHeader.innerText = contato.name;

    // Enquanto não existem fotos individuaisestou usando a imagem padrão.
    
    fotoHeader.src = "./WHATSAPP WEB/assets/imgs/perfil.png";

    fotoHeader.alt = contato.name;

    mensagensChat.innerHTML = "";


contato.messages.forEach((mensagem => {

        const mensagemElemento = document.createElement("p");

        mensagemElemento.innerText = mensagem.content;


        if (mensagem.sender === "me") {

            mensagemElemento.className = "enviadas";

        } else {

            mensagemElemento.className = "recebidas";

        }


        mensagensChat.append(mensagemElemento);

    });

contatosContainer.classList.remove("ocultar");
    perfil.classList.remove("ativo");

    header.style.display = "flex";
    mensagensChat.style.display = "grid";
    formularioChat.style.display = "block";

    mensagensChat.scrollTop = mensagensChat.scrollHeight;

function mostarPerfil()
    {

    const usuario = listaUsuarios[usuarioAtual];

    perfil.classList.add("ativo");

    contatosContainer.classList.add("ocultar");

    header.style.display = "none";
    mensagensChat.style.display = "none";
    formularioChat.style.display = "none";


    nomePerfil.innerText = usuario.account;

    telefonePerfil.innerText = usuario.number;

    fotoPerfil.src = "./WHATSAPP WEB/assets/imgs/perfil.png";
}
    
function fecharPerfil() {

    perfil.classList.remove("ativo");

    contatosContainer.classList.remove("ocultar");

    header.style.display = "flex";
    mensagensChat.style.display = "grid";
    formularioChat.style.display = "block";

}

    iconeMensagens.addEventListener("click", () => {

    fecharPerfil();

    mostrarContatos(usuarioAtual);

    // Se já existe um contato selecionado,
    // abre novamente a conversa.
    mostrarConversa(usuarioAtual, contatoAtual);

});
fotoUsuario.addEventListener("click", () => {

    if (perfil.classList.contains("ativo")) {

        fecharPerfil();

    } else {

        mostrarPerfil();

    }

});


formularioChat.addEventListener("submit", evento => {

    evento.preventDefault();

    const texto = inputMensagem.value.trim();

    if (texto === "") {
        return;
    }


    const usuario = listaUsuarios[usuarioAtual];

    const contato = usuario.contacts[contatoAtual];


    // Adiciona a mensagem aos dados
    contato.messages.push({

        sender: "me",

        content: texto,

        time: new Date().toLocaleTimeString(
            "pt-BR",
            {
                hour: "2-digit",
                minute: "2-digit"
            }
        )

    });


    mostrarConversa(usuarioAtual, contatoAtual);

    inputMensagem.value = "";

});

    function criarPerfis() {

    listaPerfis.innerHTML = "";

    listaUsuarios.forEach((usuario, index) => {

        const foto = document.createElement("img");

        foto.src = "./WHATSAPP WEB/assets/imgs/perfil.png";

        foto.alt = usuario.account;

        foto.title = usuario.account;

        foto.style.width = "50px";
        foto.style.height = "50px";
        foto.style.borderRadius = "50%";
        foto.style.cursor = "pointer";


        foto.addEventListener("click", () => {

            usuarioAtual = index;

            contatoAtual = 0;

            mostrarContatos(usuarioAtual);

            mostrarConversa(usuarioAtual, contatoAtual);
  });


        listaPerfis.append(foto);

    });

}


mostrarContatos(usuarioAtual);

mostrarConversa(usuarioAtual, contatoAtual);

criarPerfis();




