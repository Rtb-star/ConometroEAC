    // ==========================================
    // LÓGICA DO CRONÔMETRO ORIGINAL
    // ==========================================
    const dataFinal = new Date("2026-08-01T07:00:00-03:00").getTime();

    function atualizarContador() {
      const agora = new Date().getTime();
      const diferenca = dataFinal - agora;

      if (diferenca <= 0) return;

      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
      const segundos = Math.floor((diferenca / 1000) % 60);

      document.getElementById("dias").innerText = String(dias).padStart(2, '0');
      document.getElementById("horas").innerText = String(horas).padStart(2, '0');
      document.getElementById("minutos").innerText = String(minutos).padStart(2, '0');
      document.getElementById("segundos").innerText = String(segundos).padStart(2, '0');
    }

    setInterval(atualizarContador, 1000);
    atualizarContador();

    // ==========================================
    // LÓGICA DOS CORAÇÕES SUBINDO
    // ==========================================
    const emojisCoracao = ['❤️', '💛', '💚', '💙', '🤎']; // Cores do seu EAC

    function criarCoracao() {
      const coracao = document.createElement('div');
      coracao.classList.add('coracao-animado');
      
      // Escolhe uma cor aleatória da nossa lista
      coracao.innerText = emojisCoracao[Math.floor(Math.random() * emojisCoracao.length)];
      
      // Posição horizontal aleatória na tela (0 a 100 da largura)
      coracao.style.left = Math.random() * 100 + 'vw';
      
      // Duração da animação aleatória (entre 3 e 6 segundos)
      coracao.style.animationDuration = (Math.random() * 3 + 3) + 's';
      
      document.body.appendChild(coracao);
      
      // Remove o coração da memória do navegador depois de terminar a animação
      setTimeout(() => {
        coracao.remove();
      }, 6000);
    }

    // Cria um novo coração a cada 500 milissegundos
    setInterval(criarCoracao, 500);

    // ==========================================
    // LÓGICA DO MODAL (TELA CHEIA)
    // ==========================================
    function abrirModal(elementoFoto) {
      const modal = document.getElementById("modal");
      const imgModal = document.getElementById("img-modal");
      const textoModal = document.getElementById("texto-modal");
      
      // Pega a imagem de dentro da div clicada
      const imgClicada = elementoFoto.querySelector("img");
      
      // Pega o texto configurado pelo desenvolvedor no data-mensagem
      const mensagem = elementoFoto.getAttribute("data-mensagem");
      
      // Atualiza a foto e o texto grande
      imgModal.src = imgClicada.src;
      textoModal.innerText = mensagem;
      
      // Exibe o modal
      modal.style.display = "flex";
    }

    function fecharModal() {
      const modal = document.getElementById("modal");
      modal.style.display = "none";
    }