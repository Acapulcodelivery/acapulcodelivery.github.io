<script>
let pedidos = [];
let total = 0;

function add(nome, preco){
  pedidos.push({ nome, preco });
  total += preco;
  atualizar();
}

function remover(i){
  total -= pedidos[i].preco;
  pedidos.splice(i, 1);
  atualizar();
}

function atualizar(){
  const lista = document.getElementById("lista");
  const totalEl = document.getElementById("total");
  const qtd = document.getElementById("qtd");
  const cart = document.getElementById("cart-float");

  lista.innerHTML = "";

  pedidos.forEach((p, i) => {
    lista.innerHTML += `
      <div class="item-pedido">
        <span>${p.nome} - R$ ${p.preco.toFixed(2).replace('.', ',')}</span>
        <button onclick="remover(${i})">X</button>
      </div>
    `;
  });

  totalEl.innerText = total.toFixed(2).replace('.', ',');
  qtd.innerText = pedidos.length;
  cart.style.display = pedidos.length ? "block" : "none";
}

function finalizar(){
  if(!pedidos.length){
    alert("Adicione itens ao pedido");
    return;
  }

  let msg = "🍕 Pedido%0A";
  pedidos.forEach(p => {
    msg += • ${p.nome} - R$ ${p.preco.toFixed(2)}%0A;
  });
  msg += %0A💰 Total: R$ ${total.toFixed(2)};

  window.open("https://wa.me/5585997038840?text=" + msg);
}
</script>
  let telefone = "5585997038840";
  window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
}

