vendas = [
	{ valor: 100, produto: { tipo: "camisa" }},
	{ valor: 100, produto: { tipo: "sapato" }},
	{ valor: 100, produto: { tipo: "gravata" }}
]

function desconto_padrao(venda){
	if(venda.produto.tipo !== "camisa"){
		venda.desconto = 0.05;
	}
}

vendas.forEach( desconto_padrao );

function valorComDescontoPadrao(item){

  return ( item.produto.tipo !== "camisa" ) ? item.valor-(item.valor*item.desconto) : item.valor; 
}

vendas
	.map( valorComDescontoPadrao )
	.reduce( function(a,b){return a+b;} );