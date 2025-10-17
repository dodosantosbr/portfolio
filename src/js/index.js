<<<<<<< HEAD
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

esconderbtn();

function esconderbtn() {
    botaoMostrarProjetos.addEventListener('click', () => {
        projetosInativos.forEach(projetoInativo => {
            projetoInativo.classList.add('ativo');
        });

        botaoMostrarProjetos.classList.add('remover');
    });
}

window.onload = function() {
    document.querySelector('.projetos .titulo').classList.add('aparecer');
=======
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

esconderbtn();

function esconderbtn() {
    botaoMostrarProjetos.addEventListener('click', () => {
        projetosInativos.forEach(projetoInativo => {
            projetoInativo.classList.add('ativo');
        });

        botaoMostrarProjetos.classList.add('remover');
    });
}

window.onload = function() {
    document.querySelector('.projetos .titulo').classList.add('aparecer');
>>>>>>> 5c13d45 (Feat: foi adicionado as novas funcionalidades, alterado a cor do background e alterado as skills)
};