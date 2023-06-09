import { clienteService } from "../service/cliente-service.js";

(async () => {
    const id = new URL(window.location).searchParams.get('id');

    const inputNome = document.querySelector('[data-nome]');
    const inputEmail = document.querySelector('[data-email]');

    try {
        const dados = await clienteService.detalhaCliente(id)
        inputNome.value = dados.nome;
        inputEmail.value = dados.email;
    } catch (err) {
        console.error(err)
        window.location.href = '../telas/erro.html';
    }

    const formulario = document.querySelector('[data-form]');

    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value)
            window.location.href = '../telas/edicao_concluida.html';
        } catch (err) {
            console.error(err)
            window.location.href = '../telas/erro.html';
        }
    })
})()
