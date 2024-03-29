

function cadVendedor(){
    let vendedor = {
        Nome: document.getElementById('nomeVendedor').value, 
        CPF: document.getElementById('cpfVendedor').value, 
        RG: document.getElementById('rgVendedor').value,
        Endereço:document.getElemetById("endVendedor").value,
        }
}

function cadComprador(){
    let vendedor = {
        Nome: document.getElementById('nomeComprador').value, 
        CPF: document.getElementById('cpfComprador').value, 
        RG: document.getElementById('rgComprador').value,
        Endereço:document.getElemetById("endComprador").value,
        }
}











/*function gerarRecibo() {
    // Obtenha os dados do vendedor
    var nomeVendedor = document.getElementById('nomeVendedor').value;
    var cpfVendedor = document.getElementById('cpfVendedor').value;
    var rgVendedor = document.getElementById('rgVendedor').value;
    var endereçoVendedor = document.getElementById('endereçoVendedor').value;
    

    // Obtenha os dados do comprador
    var nomeComprador = document.getElementById('nomeComprador').value;
    var cpfComprador = document.getElementById('cpfComprador').value;
    var rgComprador = document.getElementById('rgComprador').value;
    var endereçoComprador = document.getElementById('endereçoComprador').value;

    // ... obter dados do Objeto
    var endObjeto = document.getElementById('endObjeto').value;
    var mFrente = document.getElementById('mFrente').value;
    var mDireita = document.getElementById('mDireita').value;
    var mEsquerda = document.getElementById('mEsquerda').value;
    var mFundos = document.getElementById('mFundos').value;


    

    // Crie o recíbo formatado
    var recibo = `
    <h3>CONTRATO DE COMPRA E VENDA DE TERRENO</h3>

    <h4>R$ 11.000,00</h4>
    
    <p>
        Pelo Presente Instrumento Particular de CONTRATO DE COMPRA E VENDA DE IMÓVEL. Eu, ${nomeVendedor}, brasileiro,  portador do RG nº ${rgVendedor} e do CPF: ${cpfVendedor} residente e domiciliado em ${endereçoVendedor}, declaro ter recebido de ${nomeComprador}, brasileiro, portador do RG nº ${rgComprador} e do CPF: ${cpfComprador}, residente e domiciliado em ${endereçoComprador}, a quantia de R$ 11.000,00 (onze mil reais), referente à venda que lhe fiz de um --- localizado na ${endObjeto}, com terreno medindo ${mFrente}30.0 (trinta metros) de frente, com ${mDireita}30.0 (trinta metros) pela lateral direita, com ${mEsquerda}() metros pela lateral esquerda e ${mFundos}30.0 (trinta metros) pelos fundos, tendo como vizinhos, pelo lado direito a Sr.ª Regiane do Socorro Almeida, pelo lado esquerdo o Sr.ª Rayanny Alves da Silva e finalmente pelos fundos com terras pertencentes a quem for de direito.
        A presente venda foi feita de livre e desembaraçada de todo e quaisquer ônus judicial ou extrajudicial, pelo que dou a compradora plena, geral, definitiva e irrevogável quitação, transferindo-lhe todos os direitos e deveres que me cabiam sobre o citado TERRENO ora vendido, podendo daqui por diante a compradora fazer do imóvel o uso que melhor lhe convier.
        E por ser expressão da verdade  datamos e assinamos o presente recibo na presença de 02 (duas) testemunhas que também assinarão para melhor clareza e validade.
    </p>
    
    <h4>Capanema, 07 de fevereiro de 2024</h4>
    
    
    
    <p>Vendedor: ___________________________________________________________
    ${nomeVendedor}
    RG nº ${rgVendedor} PC/PA e CPF: ${cpfVendedor}</p>
    
    
    
    <p>
        Compradora:  ___________________________________________________________
        ${nomeComprador}
        RG nº ${rgComprador} PC/PA e CPF: ${cpfComprador}
    </p>
    
    <p>
        Testemunhas:
        
        ________________________________________________________
        
        _______________________________________________________
    </p>
    
    

        
        <!-- Adicione outras informações do currículo -->
    `
    

    ;

    // Atualize a seção do currículo gerado na página
    document.getElementById('reciboGerado').innerHTML = recibo;
}
function teste (){
    //Dados vendedor
    let nomeVendedor = document.getElementById('nomeVendedor').value;
    var cpfVendedor = document.getElementById('cpfVendedor').value;
    var rgVendedor = document.getElementById('rgVendedor').value;
    var endereçoVendedor = document.getElementById('endereçoVendedor').value;

    //dados Comprador
    var nomeComprador = document.getElementById('nomeComprador').value;
    var cpfComprador = document.getElementById('cpfComprador').value;
    var rgComprador = document.getElementById('rgComprador').value;
    var endereçoComprador = document.getElementById('endereçoComprador').value;

    //Dados Objeto do contrato
    var terrenoOuImovel = document.getElementById('terrenoOuImovel').value;
    var endObjeto = document.getElementById('endObjeto').value;
    var mFrente = document.getElementById('mFrente').value;
    var mDireita = document.getElementById('mDireita').value;
    var mEsquerda = document.getElementById('mEsquerda').value;
    var mFundos = document.getElementById('mFundos').value;
    
    // Usando dados do Vendedor
    document.getElementById('nameV').innerText = nomeVendedor;
    document.getElementById('nameVa').innerText = nomeVendedor;


    // Usando dados do Comprador



    // Usando dados do Objeto
    document.getElementById('terOuIm').innerText = terrenoOuImovel
}*/
