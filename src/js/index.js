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
