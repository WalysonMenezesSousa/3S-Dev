async function cadastrarContato(objetoContato) {

    console.log(objetoContato);

    const resposta = fetch("http://localhost:3000/contatos", {
        method: "POST",
        body: JSON.stringify(objetoContato), //converte o objeto para JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
    } );

    return await resposta;
}


async function buscarEndereco(CEP) {


    if (CEP.trim().length < 8) {
        alert("O campo 'CEP' deve conter 8 digitos.");
        return false;
    }

    try {
        aguardandoCampos();

        let retorno = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
        let dados = await retorno.json();


        document.getElementById("Endereco").value = dados.logradouro;
        document.getElementById("Bairro").value = dados.bairro;
        document.getElementById("Cidade").value = dados.localidade;

    }
    catch (error) {
        console.log(error);
    }
    // buscar o CEP La ViaCEP

}



function aguardandoCampos() {
    document.getElementById("Endereco").value = "Aguarde...";
    document.getElementById("Bairro").value = "Aguarde...";
    document.getElementById("Cidade").value = "Aguarde...";
}

function validarFormulario() {

    let quantidadeErros = 0;

    let nome = document.getElementById("nome").value;
    if (nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
        // alert("O campo 'Nome' é obrigatório.");     
    }
    else {
        reiniciaBorda("nome");
    }


    let sobrenome = document.getElementById("sobrenome").value;
    if (sobrenome.trim().length == 0) {
        formError("sobrenome");
        quantidadeErros++;
        // alert("O campo 'Sobrenome' é obrigatório.");     
    }
    else {
        reiniciaBorda("sobrenome");
    }


    let email = document.getElementById("email").value;
    if (email.trim().length == 0) {
        formError("email");
        quantidadeErros++;
        // alert("O campo 'Email' é obrigatório.");     
    } else {
        reiniciaBorda("email");
    }


    let telefone = document.getElementById("telefone").value;
    if (telefone.trim().length == 0) {
        formError("telefone");
        quantidadeErros++;
        // alert("O campo 'Telefone' é obrigatório.");     
    } else {
        reiniciaBorda("telefone");
    }


    let DDD = document.getElementById("ddd").value;
    if (DDD.trim().length == 0) {
        formError("ddd");
        quantidadeErros++;
        // alert("O campo 'DDD' é obrigatório.");     
    } else {
        reiniciaBorda("ddd");
    }


    let numero = document.getElementById("numero").value;
    if (numero.trim().length == 0) {
        formError("numero");
        quantidadeErros++;
        // alert("O campo 'Número' é obrigatório.");     
    } else {
        reiniciaBorda("numero");
    }


    let CEP = document.getElementById("CEP").value;
    if (CEP.trim().length == 0) {
        formError("CEP");
        quantidadeErros++;
        // alert("O campo 'CEP' é obrigatório.");     
    } else {
        reiniciaBorda("CEP");
    }


    let Endereco = document.getElementById("Endereco").value;
    if (Endereco.trim().length == 0) {
        formError("Endereco");
        quantidadeErros++;
        // alert("O campo 'Endereço' é obrigatório.");
    } else {
        reiniciaBorda("Endereco");
    }


    let numeroEndereco = document.getElementById("numeroEndereco").value;
    if (numeroEndereco.trim().length == 0) {
        formError("numeroEndereco");
        quantidadeErros++;
        // alert("O campo 'Número do Endereço' é obrigatório.");
    } else {
        reiniciaBorda("numeroEndereco");
    }


    let Bairro = document.getElementById("Bairro").value;
    if (Bairro.trim().length == 0) {
        formError("Bairro");
        quantidadeErros++;
        // alert("O campo 'Bairro' é obrigatório.");
    } else {
        reiniciaBorda("Bairro");
    }


    let Cidade = document.getElementById("Cidade").value;
    if (Cidade.trim().length == 0) {
        formError("Cidade");
        quantidadeErros++;
        // alert("O campo 'Cidade' é obrigatório.");
    } else {
        reiniciaBorda("Cidade");
    }

    let complemento = document.getElementById("complemento").value;
    if (complemento.trim().length == 0) {
        formError("complemento");
        quantidadeErros++;
        //alert("O campo 'Complemento' é obrigatório.");
    } else {
        reiniciaBorda("complemento");
    }

    let apt = document.getElementById("apt").value;
    if (apt.trim().length == 0) {
        formError("apt");
        quantidadeErros++;
        //alert("O campo 'Apt' é obrigatório.");
    } else {
        reiniciaBorda("apt");
    }

    let anotacoes = document.getElementById("anotacoes").value;
    if (anotacoes.trim().length == 0) {
        formError("anotacoes");
        quantidadeErros++;
        //alert("O campo 'Anotações' é obrigatório.");
    } else {
        reiniciaBorda("anotacoes");
    }

    if (quantidadeErros > 0) {
        alert("Existe" + quantidadeErros + " erro(s) no formulário. Por favor, corrija-os antes de enviar.");
        quantidadeErros = 0;
    } else {
        let objetoContato = {
            email : email,
            telefone : telefone,
            DDD : DDD,
            numero : numero,
            CEP : CEP,
            Endereco : Endereco,
            numeroEndereco : numeroEndereco,
            Bairro : Bairro,
            Cidade : Cidade,
            nome: nome,
            sobrenome: sobrenome,
            anotacoes : anotacoes,
        }

        let cadastrado = cadastrarContato(objetoContato);

        reiniciaTodasAsBordas();
    }
}

function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}