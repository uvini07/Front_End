let clientes = [];

function Cadastro(nome, email, senha, confirmarSenha, telefone, endereco) {
    let verificar = 0;


    if (nome.length < 10) {
        console.log("Erro! Por favor, insira seu nome completo")
    } else {
        verificar = verificar + 1
        if (nome.includes("@", "#", "!", "$", "%", "¨", "*", ")", "(", "?", "/", "+", "=", "-", "_")) {
            console.log("Por favor, digite apenas letras no seu nome")
        } else {
            verificar = verificar + 1
            if (!email.includes("@")) {
                console.log("E-mail inválido")
            } else {
                verificar = verificar + 1
                if (senha.length <= 7 || !senha.includes("@", "#", "!", "$", "%", "¨", "*")) {
                    console.log("Por favor, digite uma senha com mais de 7 caracteres e utilize pelo menos 1 caractere especial (!,@,#,$,%,¨,&,*)")
                } else {
                    verificar = verificar + 1
                    if (senha !== confirmarSenha) {
                        console.log("As senhas não coincidem")
                    } else {
                        verificar = verificar + 1
                        if (telefone.length !== 11) {
                            console.log("Por favor, digite seu número de telefone corretamente")
                        } else {
                            verificar = verificar + 1
                        }
                    }
                }
            }
        }
    }

    if (verificar === 6) {
        console.log("Cadastro realizado com sucesso");
        clientes.push({
            nome: nome,
            email: email,
            senha: senha,
            confirmacao: confirmarSenha,
            telefone: telefone,
            endereco: endereco
        });
    }
}


function login(email, senha) {
    if (clientes.length === 0) {
        console.log("Erro! Nenhum usuário cadastrado.")
        return
    }

    const usuario = clientes.find((usuario) => usuario.email === email)

    if (!usuario) {
        console.log("Usuário não encontrado. Verifique o email.")
        return
    }

    if (usuario.senha === senha) {
        console.log("Login bem-sucedido!")
    } else {
        console.log("Senha incorreta. Tente novamente.")
    }
}

function perfil(email) {
    const usuario = clientes.find((usuario) => usuario.email === email);

    if (!usuario) {
        console.log("Usuário não encontrado. Verifique o email.");
        return;
    }

    const { nome, telefone, endereco } = usuario;
    const { rua, numero, estado } = endereco;

    console.log(`Nome: ${nome}`);
    console.log(`Telefone: ${telefone}`);
    console.log(`Endereço: ${rua}, ${numero}, ${estado}`);
    console.log(`Email: ${email}`);
}

function comentarios(comentar, email) {
    const usuario = clientes.find((usuario) => usuario.email === email);

    if (!usuario) {
        console.log("Usuário não encontrado. Verifique o email.");
        return;
    }

    const { nome } = usuario;

    console.log(`Comentário de ${nome}: ${comentar}`);
}

//nome email senha confirmar senha telefone e endereço
Cadastro("Murilo Caua Marcelo", "joao.matador@gmail.com", "joao@123", "joao@123", "11498593103", {
    rua: "Rua dos Flox",
    numero: 123,
    CEP: "10779183960",
    cidade: "CAjmar",
    estado: "SP"
});

login("joao.matador@gmail.com", "joao@123")
perfil("joao.matador@gmail.com");
comentarios("Este é um ótimo produto!", "joao.matador@gmail.com");
console.log(clientes)