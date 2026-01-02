let pedido = [];
let desconto = 0;

function addItem(item) {
  pedido.push(item);
  atualizarPedido();
}

function atualizarPedido() {
  const lista = document.getElementById("pedido");
  lista.innerHTML = "";

  pedido.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    lista.appendChild(li);
  });
}

function raspadinha() {
  const descontos = [5, 10, 15, 20];
  desconto = descontos[Math.floor(Math.random() * descontos.length)];

  document.getElementById("desconto").innerHTML =
    `🎉 Parabéns! Você ganhou <b>${desconto}% de desconto</b> em pizzas de <b>Frango ou Carne do Sol</b>!`;
}

function finalizarPedido() {
  if (pedido.length === 0) {
    alert("Adicione itens ao pedido!");
    return;
  }

  let mensagem = "🍕 *Pedido - Pizzaria Acapulco*%0A";

  pedido.forEach(item => {
    mensagem += `- ${item}%0A`;
  });

  if (desconto > 0) {
    mensagem += `%0A🎁 Desconto aplicado: ${desconto}% (Frango / Carne do Sol)`;
  }

  mensagem += "%0AEndereço:%0AForma de pagamento:";

  let telefone = "5585997038840";
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}
