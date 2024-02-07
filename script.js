function gerarCurriculo() {
    // Obtenha os dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    // ... obter outros dados

    // Crie o currículo formatado
    var curriculo = `
        <h2>${nome}</h2>
        <p>Email: ${email}</p>
        <!-- Adicione outras informações do currículo -->
    `;

    // Atualize a seção do currículo gerado na página
    document.getElementById('curriculoGerado').innerHTML = curriculo;
}
