/*Banners*/
let conteudoSlide = [
	[`
		<p>Criamos aplicações</p>
		<ul>
			<li>Androids</li>
			<li>Web</li>
			<li>Desktop</li>
		</ul>
	`],
	[`
		<p>Damos cursos de programação</p>
		<ul>
			<li>
				web
			</li>
			<li>
				redes
			</li>
			<li>
				design
			</li>
		</ul>
	`],
	[`
		<p>visite a nossa loja online</p>
		<ul>
			<li>
				<a href=#>click</a>
			</li>
		</ul>
	`],
	[`
		<p>Damos cursos de programação</p>
		<ul>
			<li>
				web
			</li>
			<li>
				redes
			</li>
			<li>
				design
			</li>
		</ul>
	`],
	[`
		<p>visite a nossa loja online</p>
		<ul>
			<li>
				<a href=#>click</a>
			</li>
		</ul>
	`]
]
let svgSlide = [
	['./imgs/servicos/file.svg'],
	['./imgs/servicos/code.svg'],
	['./imgs/servicos/shop.svg'],
	['./imgs/servicos/code.svg'],
	['./imgs/servicos/shop.svg']
]

let titulos = ["criação de app", "cursos", "loja online", "cursos", "loja online"]
let quantidadeImagens = window.document.querySelectorAll(".bolinhas")[0]
//cards
let servicosCardsS = window.document.querySelectorAll(".cards-secition3")[0]
servicosCardsS.innerHTML = ""
function adicionarCards(imagens, conteudo){
	for(let i=0; i<imagens.length; i++){
		servicosCardsS.innerHTML+=`<div class="cardS">
					<div class="imgs-cards-s">
						<img src=${imagens[i]} alt=imagem class=imgsServicos>
					</div>
					<div class="titulo-card-s">
						${titulos[i]}
					</div>
					<div class="descricao-cards-s">
						<div class="conteudoCardsJ">
							${conteudo[i]}
						</div>
						<div class="ler-mais-cards-s">
							<a href="#">
								saiba mais
							</a>
						</div>
					</div>
				</div>`
	}
}

adicionarCards(svgSlide, conteudoSlide)

/*-----------------------------------------------------------*/


/*Humburguer*/
const humburguer = window.document.querySelectorAll(".humburguer")[0]
const navMenu = window.document.querySelectorAll(".nav-menu")[0]

humburguer.addEventListener("click", ()=>{
	humburguer.classList.toggle("active");
	navMenu.classList.toggle("active");
})

console.log("Certo")
/*-----------------------------------------------------------*/

/*Cards*/
/*-----------------------------------------------------------*/
/*-----------------------------------------------------------*/