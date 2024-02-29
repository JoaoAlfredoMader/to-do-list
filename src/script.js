document.addEventListener('DOMContentLoaded', function () {
    const inputAtividade = document.getElementById('atividade');
    const btnAdicionar = document.getElementById('adicionar');
    const listaTarefas = document.getElementById('lista-tarefas');

    btnAdicionar.addEventListener('click', function () {
        const atividade = inputAtividade.value.trim();
        if (atividade !== '') {
            adicionarTarefa(atividade);
            inputAtividade.value = '';
        } else {
            alert("Digite ao menos um caractere para adicionar")
        }
    });

    function adicionarTarefa(atividade) {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
    
        const spanAtividade = document.createElement('span');
        spanAtividade.textContent = atividade;
    
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'X';
        btnRemover.addEventListener('click', function () {
            const confirmacao = confirm('Tem certeza que deseja excluir esta atividade?');
            if (confirmacao) {
                li.remove();
            }
        });
    
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                spanAtividade.style.textDecoration = 'line-through';
            } else {
                spanAtividade.style.textDecoration = 'none';
            }
        });
    
        li.appendChild(checkbox);
        li.appendChild(spanAtividade);
        li.appendChild(btnRemover);
        listaTarefas.appendChild(li);
    }
    
});
