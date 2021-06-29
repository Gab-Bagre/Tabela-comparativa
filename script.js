function tabela(valores, tipos, resultado) {
    $(".tabelaComparacoes").find("tbody")
    let novaLinha = "<tr>" + "<td>" + valores + "</td>" + "<td>" + tipos + "</td>" + "<td>" + resultado + "</td>" + "</tr>"
    $(".tabelaComparacoes").find("tbody").append(novaLinha)
}

function comparacao(valor1, valor2, tipo1, tipo2) {
    let resultadoComparacao = null
    comparador = ($("#selecaoDeCondicional").val())
    if (comparador == "==") {
        resultadoComparacao = valor1 == valor2 || tipo1 == tipo2
    } else if (comparador == "!=") {
        resultadoComparacao = valor1 != valor2 || tipo1 != tipo2
    } else if (comparador == "===") {
        resultadoComparacao = valor1 === valor2 && tipo1 == tipo2
    } else if (comparador == "!==") {
        resultadoComparacao = valor1 != valor2 && tipo1 != tipo2
    } return resultadoComparacao
    
}

$("#verifica").on('click', function () {

    let valor1 = $('#elemento1').val()
    let valor2 = $('#elemento2').val()
    var testeRegexp = new RegExp(/^[0-9\.?\,?]+$/i)
    var verificaPrimeiroCaractere1 = valor1.substr(0, 1)
    var verificaUltimoCaractere1 = valor1.substr(-1, 1)
    var verificaPrimeiroCaractere2 = valor2.substr(0, 1)
    var verificaUltimoCaractere2 = valor2.substr(-1, 1)
    var valorConvertido1 = null
    var valorConvertido2 = null
    var tipo1 = null
    var tipo2 = null

    if (valor1 == "true" || valor1 == "false") {
        if (valor1 == "false") {
            valorConvertido1 = false
        } else {
            valorConvertido1 = true
        }

        tipo1 = typeof valorConvertido1

    } else if (((verificaPrimeiroCaractere1 == "'") && (verificaUltimoCaractere1 == "'")) || ((verificaPrimeiroCaractere1 == "\"") && (verificaUltimoCaractere1 == "\""))) {
        valorConvertido1 = valor1
        tipo1 = typeof valorConvertido1
    } else if (!testeRegexp.test(valor1)) {
        valorConvertido1 = valor1
        tipo1 = typeof valor1
    } else {
        let valorNum1 = Number.parseFloat(valor1)
        valor1 = valorNum1
        tipo1 = typeof valor1
    }
    
    if (valor2 == "true" || valor2 == "false") {
        if (valor2 == "false") {
            valorConvertido2 = false
        } else {
            valorConvertido2 = true

        }
        tipo2 = typeof valorConvertido2
    } else if (((verificaPrimeiroCaractere2 == "'") && (verificaUltimoCaractere2 == "'")) || ((verificaPrimeiroCaractere2 == "\"") && (verificaUltimoCaractere2 == "\""))) {
        valorConvertido2 = valor2
        tipo2 = typeof valorConvertido2

    } else if (!testeRegexp.test(valor2)) {
        valorConvertido2 = valor2
        tipo2 = typeof valorConvertido2
    } else {
        let valorNum2 = Number.parseFloat(valor2)
        valor2 = valorNum2
        tipo2 = typeof valor2
    }
    var resultado = comparacao(valor1,valor2,tipo1,tipo2) 
    tabela(valor1 + " " + "|" + " " + valor2, tipo1 + " " + "|" + " " + tipo2, resultado)

})