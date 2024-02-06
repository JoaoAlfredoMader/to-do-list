document.addEventListener('DOMContentLoaded', function () {
    const inputAtividade = document.getElementById('atividade');
    const btnAdicionar = document.getElementById('adicionar');
    const listaTarefas = document.getElementById('lista-tarefas');

    btnAdicionar.addEventListener('click', function () {
        const atividade = inputAtividade.value.trim();
        if (atividade !== '') {
            adicionarTarefa(atividade);
            inputAtividade.value = '';
        }
    });

    function adicionarTarefa(atividade) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const spanAtividade = document.createElement('objeto');
        spanAtividade.textContent = atividade;

        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(spanAtividade);
        li.appendChild(btnRemover);
        listaTarefas.appendChild(li);
    }
});