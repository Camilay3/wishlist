//declaração de variáveis
var o = window.document.getElementById('listas');
var b = window.document.getElementById('botãoDados');
var s = window.document.getElementById('upper');
var ss = window.document.getElementById('saldo');
var t = window.document.getElementById('subtitle');
let prod = document.querySelector('input#produto');
let valor = document.querySelector('input#valor');
var saldo = document.querySelector('input#saldo');
var ol = document.getElementById('results');
var item = document.getElementsByTagName('li');
let ulC = document.getElementById('cálculos');
var itemulC = document.getElementsByTagName('li');
let ulB = document.getElementById('cálculos');
var itemulB = document.getElementsByTagName('li');
let ulP = document.getElementById('cálculos');
var itemulP = document.getElementsByTagName('li');
let valores = [];
let produtos = [];
let possibles = [];

//preloader
const overlay = document.querySelector('.overlay');
window.addEventListener('load', function(){
    overlay.style.display = 'none';
})

//funções
function adicionarItem() {
    if (prod.value == '' || valor.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Algo deu errado!',
            text: 'Preencha os campos corretamente!',
        })
    } else {
        produtos.push(String(` ${prod.value}`));
        valores.push(Number(valor.value));

        var li = document.createElement('li');
        li.appendChild(document.createTextNode(`${prod.value} (R$ ${valor.value})`));
        ol.appendChild(li);
        prod.value = "";
        valor.value = "";
    }
}

function analisarDados() {
    if (saldo.value == ''){
        Swal.fire({
            icon: 'error',
            title: 'Algo deu errado!',
            text: 'Preencha os campos corretamente!',
        })
    } else {
        var maior = Math.max.apply(null, valores);
        var menor = Math.min.apply(null, valores);

        var indiMa = valores.indexOf(maior);
        var indiMe = valores.indexOf(menor);

        var maisCaro = `O produto mais caro é: ${produtos[indiMa]} (R$ ${maior})`;
        var maisBarato = `O produto mais barato é: ${produtos[indiMe]} (R$ ${menor})`;

        for(var i = 0; i < valores.length; i++) {
            if (valores[i] <= saldo.value) {
                var indV = valores.indexOf(valores[i]);
                possibles.push(produtos[indV]);
            }
        }

        if (possibles.length > 1){
            var possiveis = `Os produtos que você pode comprar são: ${possibles}`;
        } else if (possibles.length == 1) {
            var possiveis = `O produto que você pode comprar é: ${possibles}`;
        }

        var liulC = document.createElement('li');
        var liulB = document.createElement('li');
        liulC.appendChild(document.createTextNode(`${maisCaro}`));
        liulB.appendChild(document.createTextNode(`${maisBarato}`));
        ulC.appendChild(liulC);
        ulB.appendChild(liulB);    

        if (possibles.length >= 1) {
            var liulP = document.createElement('li');
            liulP.appendChild(document.createTextNode(`${possiveis}`));
            ulP.appendChild(liulP);
        } else{
            var liulP = document.createElement('li');
            liulP.appendChild(document.createTextNode(`Você não pode comprar nenhum produto`));
            ulP.appendChild(liulP);
        }
        
        o.style.display = 'none';
        b.style.display = 'none';
        ol.style.display = 'none';
        s.style.display = 'none';
        ss.style.display = 'none';
        t.innerText = 'Resultados obtidos';
    }
}

//adicionar opção de excluir item da lista
//adicionar opção de limpar lista
