function gerarCurriculo() {
    // Obtenha os dados do vendedor
    var nomeVendedor = document.getElementById('nomeVendedor').value;
    var cpfVendedor = document.getElementById('cpfVendedor').value;
    var rgVendedor = document.getElementById('rgVendedor').value;

    // Obtenha os dados do comprador
    var nomeComprador = document.getElementById('nomeComprador').value;
    var cpfComprador = document.getElementById('cpfComprador').value;
    var rgComprador = document.getElementById('rgComprador').value;
    // ... obter outros dados

    

    // Crie o recíbo formatado
    var recibo = `
                Pelo Presente Instrumento Particular de CONTRATO DE COMPRA E VENDA DE IMÓVEL. Eu, ${nomeVendedor}, brasileiro,  portador do RG nº ${rgVendedor} e do CPF: ${cpfVendedor}, declaro ter recebido de ${nomeComprador}, brasileira, portadora do RG nº ${rgComprador} PC/PA e do CPF: ${cpfComprador}, a quantia de R$ 11.000,00 (onze mil reais)

        
        <!-- Adicione outras informações do currículo -->
    `;

    // Atualize a seção do currículo gerado na página
    document.getElementById('reciboGerado').innerHTML = recibo;
}
