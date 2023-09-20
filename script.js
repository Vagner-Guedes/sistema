// Array de usuários (apenas para fins de demonstração)
const usuarios = [
    {
        email: "aluno@aluno.com",
        tipo: "aluno",
        senha: "1234", // Apenas para fins de demonstração (não seguro)
    },
    {
        email: "professor@prof.com",
        tipo: "professor",
        senha: "1234", // Apenas para fins de demonstração (não seguro)
    },
    // Adicione mais usuários aqui conforme necessário
];

// Função para sair
function sair() {
    localStorage.removeItem("email");
    document.getElementById("login-section").style.display = "flex";
    document.getElementById("main-section-aluno").style.display = "none";
    document.getElementById("main-section-prof").style.display = "none";
}

// Adicionar funcionalidade aos botões de "Sair"
document.getElementById("sair-aluno").addEventListener("click", sair);
document.getElementById("sair-prof").addEventListener("click", sair);

document.addEventListener("DOMContentLoaded", function() {
    const email = localStorage.getItem("email");
    
    if (email) {
        const usuarioEncontrado = usuarios.find((usuario) => usuario.email === email);
        if (usuarioEncontrado) {
            if (usuarioEncontrado.tipo === "aluno") {
                // Usuário é um aluno
                document.getElementById("login-section").style.display = "none";
                document.getElementById("main-section-aluno").style.display = "block";
                document.getElementById("main-section-prof").style.display = "none";
            } else if (usuarioEncontrado.tipo === "professor") {
                // Usuário é um professor
                document.getElementById("login-section").style.display = "none";
                document.getElementById("main-section-aluno").style.display = "none";
                document.getElementById("main-section-prof").style.display = "block";
            }
        } else {
            // Usuário não encontrado nos registros, redirecionar para a tela de login
            localStorage.removeItem("email");
        }
    }

    document.getElementById("login-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const usuarioAutenticado = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

        if (usuarioAutenticado) {
            localStorage.setItem("email", email);

            if (usuarioAutenticado.tipo === "aluno") {
                // Usuário é um aluno
                document.getElementById("login-section").style.display = "none";
                document.getElementById("main-section-aluno").style.display = "block";
                document.getElementById("main-section-prof").style.display = "none";
            } else if (usuarioAutenticado.tipo === "professor") {
                // Usuário é um professor
                document.getElementById("login-section").style.display = "none";
                document.getElementById("main-section-aluno").style.display = "none";
                document.getElementById("main-section-prof").style.display = "block";
            }
        } else {
            // Autenticação falhou
            alert("Autenticação falhou. Verifique o email e a senha.");
        }
    });
});

//modal

const modal = document.getElementById('myModal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const submitBtn = document.getElementById('submitBtn');

openModalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

submitBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});


// reseva de salas

document.addEventListener("DOMContentLoaded", function() {
    const botaoBlocoA = document.getElementById("blocoA");
    const botaoBlocoB = document.getElementById("blocoB");
    const selecaoSala = document.querySelector(".selecao-sala");
    const informacoesSala = document.querySelector(".informacoes-sala");
    const selecaoSalaSelect = document.getElementById("sala");
    const selecaoAndarSelect = document.getElementById("andar");
    const detalhesSala = document.getElementById("detalhesSala");
    const reservarBotao = document.getElementById("reservar");
    const fecharFormularioBotao = document.getElementById("fecharFormulario");
    const container = document.querySelector(".container");

    const blocoA = {
        salas: ["A118b", "A119a", "A119b", "A120a", "A120b", "A123", "A124", "A126", "Sala GOOGLE"],
        andares: ["Andar 1"]
    };

    const blocoB = {
        salas: ["Sala B1", "Sala B2", "Sala B3", "Sala B4", "Sala B5", "Sala B6", "Sala B7", "Sala B8", "Sala B9"],
        andares: ["Andar 1", "Andar 2", "Andar 3", "Andar 4"]
    };

    botaoBlocoA.addEventListener("click", function() {
        popularDropdownSalasAndares(blocoA);
    });

    botaoBlocoB.addEventListener("click", function() {
        popularDropdownSalasAndares(blocoB);
    });

    function popularDropdownSalasAndares(bloco) {
        selecaoSalaSelect.innerHTML = "";
        selecaoAndarSelect.innerHTML = "";

        bloco.salas.forEach(sala => {
            const option = document.createElement("option");
            option.text = sala;
            selecaoSalaSelect.add(option);
        });

        bloco.andares.forEach(andar => {
            const option = document.createElement("option");
            option.text = andar;
            selecaoAndarSelect.add(option);
        });

        selecaoSala.style.display = "block";
    }

    reservarBotao.addEventListener("click", function() {
        const salaSelecionada = selecaoSalaSelect.value;
        const andarSelecionado = selecaoAndarSelect.value;

        const infoSala = `Você selecionou a ${salaSelecionada} no ${andarSelecionado}.`;
        detalhesSala.textContent = infoSala;
        informacoesSala.style.display = "block";
    });

    fecharFormularioBotao.addEventListener("click", function() {
        container.style.display = "none";
    });

    const exibirContainerBtn = document.getElementById('exibirContainer');

    exibirContainerBtn.addEventListener('click', () => {
        container.style.display = 'block';
    });
});



