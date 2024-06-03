$(document).ready(function () {
  // Configuração do carrossel Slick
  $("#carousel-imagens").slick({
    autoplay: true, // Ativa a reprodução automática das imagens do carrossel
  });

  // Alternar visibilidade do menu hamburguer
  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle(); // Exibe ou oculta o menu de navegação com um efeito de deslizamento
    $(this).toggleClass("menu-aberto"); // Alterna a classe "menu-aberto" no botão do menu hamburguer
  });

  // Aplicação de máscara no campo de telefone
  $("#telefone").mask("(00) 00000-0000"); // Aplica a máscara de telefone no formato (00) 00000-0000

  // Configuração da validação do formulário
  $("form").validate({
    rules: {
      // Regras de validação para os campos do formulário
      nome: {
        required: true, // O campo "nome" é obrigatório
      },
      email: {
        required: true, // O campo "email" é obrigatório
        email: true, // O campo "email" deve conter um endereço de email válido
      },
      telefone: {
        required: true, // O campo "telefone" é obrigatório
      },
      mensagem: {
        required: true, // O campo "mensagem" é obrigatório
      },
      veiculoDeInteresse: {
        required: false, // O campo "veículo de interesse" não é obrigatório
      },
    },
    messages: {
      // Mensagens de erro personalizadas para os campos
      nome: "Por favor, insira o seu nome", // Mensagem de erro para o campo "nome"
    },
    submitHandler: function (form) {
      // Função a ser executada quando o formulário é enviado corretamente
      console.log(form); // Exibe o formulário no console do navegador
    },
    invalidHandler: function (evento, validador) {
      // Função a ser executada quando o formulário contém campos inválidos
      let camposIncorretos = validador.numberOfInvalids(); // Obtém o número de campos inválidos
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`); // Exibe um alerta com o número de campos inválidos
      }
    },
  });

  // Rolar suavemente para a seção de contato com o veículo de interesse pré-preenchido
  $(".lista-veiculos button").click(function () {
    const destino = $("#contato"); // Define o destino como a seção de contato
    const nomeVeiculo = $(this).parent().find("h3").text(); // Obtém o nome do veículo a partir do título do veículo
    $("#veiculo-interesse").val(nomeVeiculo); // Preenche o campo "veículo de interesse" com o nome do veículo
    $("html, body").animate(
      {
        scrollTop: destino.offset().top, // Rola suavemente até a seção de contato
      },
      1000
    ); // A animação dura 1000 milissegundos (1 segundo)
  });

  $(document).click(function (event) {
    // Verifica se o clique foi fora do menu de navegação e do botão do menu hamburguer
    if (!$(event.target).closest("nav, .menu-hamburguer").length) {
      // Fecha o menu de navegação com um efeito de deslizamento
      $("nav").slideUp();
      // Remove a classe "menu-aberto" do botão do menu hamburguer
      $(".menu-hamburguer").removeClass("menu-aberto");
    }
  });

  // Rolagem suave para as seções ao clicar nos links de navegação
  $("nav a").click(function (e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    const target = $(this.hash); // Obtém o elemento alvo (seção) a partir do atributo href do link
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 80, // Rola suavemente até a seção alvo, ajustando o deslocamento conforme necessário (80 pixels de ajuste)
        },
        1000
      ); // A animação dura 1000 milissegundos (1 segundo)
    }
  });
});
