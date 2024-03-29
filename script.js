let data = new Date()



function cadVendedor(){
    let nomeVendedor = document.getElementById('nomeVendedor').value;
    let nacVendedor = document.getElementById('nacVendedor').value;
    let cpfVendedor = document.getElementById('cpfVendedor').value;
    let rgVendedor = document.getElementById('rgVendedor').value;
    let enderecoVendedor = document.getElementById('endVendedor').value;
    

    document.getElementById('nomeVend').innerHTML = `${nomeVendedor}`
    document.getElementById('nacVend').innerHTML = `${nacVendedor}`
    document.getElementById('rgVend').innerHTML = `${rgVendedor}`
    document.getElementById('cpfVend').innerHTML = `${cpfVendedor}`
    document.getElementById('endVend').innerHTML = `${enderecoVendedor}`
    document.getElementById('nomeVendAss').innerHTML = `${nomeVendedor}`

    let genVend = document.getElementsByName("genVend")
    if(genVend[1].checked){
        document.getElementById("portador").innerHTML = "portadora"
        document.getElementById('vendedoraAss').innerHTML = "Vendedora"
    } else{
        document.getElementById("portador").innerHTML = "portador"
        document.getElementById('vendedoraAss').innerHTML = "Vendedor"
    }
}


function cadComprador(){
    let nomeComprador = document.getElementById('nomeComprador').value;
    let nacComprador = document.getElementById('nacComprador').value;
    let cpfComprador = document.getElementById('cpfComprador').value;
    let rgComprador = document.getElementById('rgComprador').value;
    let enderecoComprador = document.getElementById('endComprador').value;
    let genComp = document.getElementsByName('genComp')

    document.getElementById('nomeComp').innerHTML = `${nomeComprador}`
    document.getElementById('nacComp').innerHTML = `${nacComprador}`
    document.getElementById('rgComp').innerHTML = `${rgComprador}`
    document.getElementById('cpfComp').innerHTML = `${cpfComprador}`
    document.getElementById('endComp').innerHTML = `${enderecoComprador}`
    document.getElementById('nomeCompAss').innerHTML = `${nomeComprador}`
    

    if(genComp[1].checked){
        document.getElementById('a_compradora').innerHTML = `a compradora`
        document.getElementById('a_compradora2').innerHTML = `a compradora`
        document.getElementById('compradorAss').innerHTML = `Compradora`
        document.getElementById('portadorComp').innerHTML = `portadora`
    } else {
        document.getElementById('a_compradora').innerHTML = `ao comprador`
        document.getElementById('a_compradora2').innerHTML = `o comprador`
        document.getElementById('compradorAss').innerHTML = `Comprador`
        document.getElementById('portadorComp').innerHTML = `portador`
    }
}

function cadObjeto() {
    let valor = document.getElementById('valor').value
    let valorE = document.getElementById('valorE').value
    let endObjeto = document.getElementById('endObjeto').value
    let tipoObjeto = document.getElementsByName('tipoObjeto')
    
    // a partir daqui as metragens
    let frente = Number(document.getElementById('frente').value)
    let frenteE = document.getElementById('frenteE').value
    let direita = Number(document.getElementById('direita').value)
    let direitaE = document.getElementById('direitaE').value
    let esquerda = Number(document.getElementById('esquerda').value)
    let esquerdaE = document.getElementById('esquerdaE').value
    let fundos = Number(document.getElementById('fundos').value)
    let fundosE = document.getElementById('fundosE').value
    
    document.getElementById('valorCima').innerHTML = `${valor}`
    document.getElementById('valorDentro').innerHTML = `${valor}`
    document.getElementById('valorEs').innerHTML = `${valorE}`
    document.getElementById('enderecoObjeto').innerHTML = `${endObjeto}`
    document.getElementById('mFrente').innerHTML = `${frente}`
    document.getElementById('mFrenteE').innerHTML = `${frenteE}`
    document.getElementById('mDireita').innerHTML = `${direita}`
    document.getElementById('mDireitaE').innerHTML = `${direitaE}`
    document.getElementById('mEsquerda').innerHTML = `${esquerda}`
    document.getElementById('mEsquerdaE').innerHTML = `${esquerdaE}`
    document.getElementById('mFundos').innerHTML = `${fundos}`
    document.getElementById('mFundosE').innerHTML = `${fundosE}`

    if(tipoObjeto[1].checked){
        document.getElementById('titulo').innerHTML = `TERRENO`
        document.getElementById('titulo2').innerHTML = `terreno`
        document.getElementById('titulo3').innerHTML = `terreno esse`
    } else {
        document.getElementById('titulo').innerHTML = `IMÓVEL`
        document.getElementById('titulo2').innerHTML = `imóvel`
        document.getElementById('titulo3').innerHTML = `com terreno`
    }    
}
function localeData(){
    let localData = document.getElementById('localData').value

    document.getElementById('localeData').innerHTML = `${localData}`
}