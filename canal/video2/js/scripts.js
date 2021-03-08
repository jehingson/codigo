const productoDOM = document.querySelector(".productos__center");
const carritoDOM = document.querySelector(".carrito");
const carritoCenter = document.querySelector(".carrito__center");
const openCarrito = document.querySelector(".carrito__icon");
const closeCarrito = document.querySelector(".close__carrito");
const overlay = document.querySelector(".carrito__overlay");
const carritoTotal = document.querySelector(".carrito__total");
const clearCarritoBtn = document.querySelector(".clear__carrito");
const itemTotales = document.querySelector(".item__total");
const detalles = document.getElementById('detalles')

let carrito = [];
let buttonDOM = [];

class UI {
	detalleproducto(id){
		console.log(productos, id)
		const filtroData = productos.filter(item => item.id == id)
		
		let elementos = ''
		filtroData.forEach(producto => {
        elementos += `
        <article class=" detalle-grid">
        <img
          src=${producto.image}
          alt=""
          class="img-fluid"
        />
        <div class="detalles-content">
          <h3>${producto.title}</h3>
          <div class="rating">
            <span>
              <i class="bx bxs-star"></i>
            </span>
            <span>
              <i class="bx bxs-star"></i>
            </span>
            <span>
              <i class="bx bxs-star"></i>
            </span>
            <span>
              <i class="bx bxs-star"></i>
            </span>
            <span>
              <i class="bx bx-star"></i>
            </span>
          </div>
          <p class="precio"><b>Precio: </b><span>$ ${producto.price}</span></p>
          
          <p class="description">
            <b>Descripción: </b> <span> Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Magnam voluptates quos similique provident laborum
            laboriosam omnis expedita est corrupti. Nisi esse saepe veritatis
            eos iure modi maxime labore voluptate sit, provident natus rem nihil
            ad? Dignissimos voluptates sapiente aspernatur dolor autem sunt.
            Soluta sint obcaecati perferendis nulla eaque quibusdam repellat! </span>
          </p>
          <p class="description"> <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
            tenetur ipsum possimus ratione eum voluptate modi! Cumque mollitia
            esse atque dolore deleniti facilis dolorem modi aspernatur. Aliquid
            molestias hic, temporibus quo, aut sunt quisquam nostrum delectus
            aliquam repellat tempore quam harum repellendus porro ea. Molestiae
						corporis incidunt commodi ducimus id.
					</span>
					</p>
					
					<div class="bottom">
            <div class="btn__group">
              <a href="#" class="btn addToCart" data-id=${producto.id}>Añadir carrito</a>
            </div>
          </div>
				</div>
      </article>
        `
			});
			detalles.innerHTML = elementos
	}

  renderProductos(productos) {
    let results = "";
    productos.forEach((producto) => {
      results += `
            <div class="producto">
            <div class="image__container">
              <img
                src=${producto.image}
                alt=""
              />
            </div>
            <div class="producto__footer">
              <h1>${producto.title}</h1>
              <div class="rating">
                <span>
                  <i class="bx bxs-star"></i>
                </span>
                <span>
                  <i class="bx bxs-star"></i>
                </span>
                <span>
                  <i class="bx bxs-star"></i>
                </span>
                <span>
                  <i class="bx bxs-star"></i>
                </span>
                <span>
                  <i class="bx bx-star"></i>
                </span>
              </div>
              <div class="price">$${producto.price}</div>
              <div class="bottom">
                <div class="btn__group">
                  <button class="btn addToCart" data-id= ${producto.id} >Añadir carrito</button>
                  <a href="producto-detalles.html?id=${producto.id}" class="btn view">Vista</a>
                </div>
              </div>
            </div>
          </div> 
          `;
    });
    productoDOM.innerHTML = results;
  }

  getButtons() {
		const buttons = [...document.querySelectorAll(".addToCart")];
		buttonDOM = buttons;
		buttons.forEach(button => {
			const id = button.dataset.id;
			const inCart = carrito.find(item => item.id === parseInt(id, 10));

			if(inCart){
				button.innerText = "En el carrito",
				button.disabled = true;
			}

			button.addEventListener("click", e => {
				e.preventDefault();
				e.target.innerHTML = "En el carrito"
				e.target.disabled = true;

				// GET productos al carrito
				const carritoItem = {...Storage.getProducto(id), cantidad: 1}

				// agregamos el producto al carrito
				carrito = [...carrito, carritoItem]

				// Guardar el carrito rn local storge
				Storage.saveCart(carrito)
				//set cart values
				this.setItemValues(carrito)
				//
				this.addCarritoItem(carritoItem)
				//Show el carrito
			});
		});
	}
	
	setItemValues(carrito){
		let tempTotal = 0;
		let itemTotal = 0;

		carrito.map(item => {
			tempTotal += item.price * item.cantidad;
			itemTotal += item.cantidad;
		});

		carritoTotal.innerText = parseFloat(tempTotal.toFixed(2));
		itemTotales.innerText = itemTotal
	}

	addCarritoItem({image, price, title, id}){
		const div = document.createElement("div")
		div.classList.add("carrito__item")

		div.innerHTML = `
		<img src=${image} alt=${title}>
              <div>
                <h3>${title}</h3>
                <h3 class="price">$${price}</h3>
              </div>
              <div>
                <span class="increase" data-id=${id}>
                    <i class="bx bxs-up-arrow"></i>
                  </span>
                  <p class="item__cantidad">1</p>
                  <span class="decrease" data-id=${id}>
                      <i class="bx bxs-down-arrow"></i>
                  </span>
              </div>
              <div>
                <span class="remove__item" data-id=${id}>
                    <i class="bx bx-trash"></i>
                </span>
							</div>
							`
							carritoCenter.appendChild(div);
	}
	show(){
		carritoDOM.classList.add("show")
		overlay.classList.add("show")
	}
	hide(){
		carritoDOM.classList.remove("show")
		overlay.classList.remove("show")
	}
	setAPP(){
		carrito = Storage.getCart();
		this.setItemValues(carrito)
		this.populate(carrito) 

		openCarrito.addEventListener("click", () => (
			this.show()
		 ))
		closeCarrito.addEventListener("click", this.hide)
	}

	populate(carrito){
		carrito.forEach(item => this.addCarritoItem(item))
	}

	cartLogic(){
		clearCarritoBtn.addEventListener("click", () =>{
			this.clearCarrito()
			this.hide()
		});

		carritoCenter.addEventListener("click", e=>  {
	
			const	target = e.target.closest("span")
			const targetElement = target.classList.contains("remove__item");
			console.log(targetElement)
			console.log(target)
			
			
			if(!target) return;
			if(targetElement){
				const id = parseInt(target.dataset.id);
        this.removeItem(id);
				carritoCenter.removeChild(target.parentElement.parentElement)
			}else if(target.classList.contains("increase")){
				const id = parseInt(target.dataset.id, 10);
				let tempItem = carrito.find(item => item.id === id);
				tempItem.cantidad++;
				Storage.saveCart(carrito)
				this.setItemValues(carrito)
				target.nextElementSibling.innerText = tempItem.cantidad;

			}else if (target.classList.contains("decrease")){
				const id = parseInt(target.dataset.id, 10);
				let tempItem = carrito.find(item => item.id === id);
				tempItem.cantidad--;

				if(tempItem.cantidad > 0){
					Storage.saveCart(carrito);
					this.setItemValues(carrito);
					target.previousElementSibling.innerText = tempItem.cantidad;
				}else{
					this.removeItem(id);
					carritoCenter.removeChild(target.parentElement.parentElement)
				}
			}
		});
	}

	clearCarrito(){
		const cartItems = carrito.map(item => item.id)
		cartItems.forEach(id => this.removeItem(id));

		while (carritoCenter.children.length > 0){
			carritoCenter.removeChild(carritoCenter.children[0])
		}
	}

	removeItem(id){
		carrito = carrito.filter(item => item.id !== id);
		console.log(carrito)
		this.setItemValues(carrito)
		Storage.saveCart(carrito)

		let button = this.singleButton(id);
		if(button){
		button.disabled = false;
		button.innerText = "Añadir carrito";
		}	
	}

	singleButton(id){
		return buttonDOM.find(button => parseInt(button.dataset.id) === id)
	}
}


class Productos {
	async getProductos(){
		try{
			const result = await fetch("productos.json");
			const data = await result.json()
			const productos = data.items;
			return productos
		}catch(err){
			console.log(err)
		}
	}
}

class Storage {
	static saveProduct(obj){
		localStorage.setItem("productos", JSON.stringify(obj))
	}

	static saveCart(carrito){
		localStorage.setItem("carrito", JSON.stringify(carrito))
	}

	static getProducto(id){
		const productos = JSON.parse(localStorage.getItem("productos"))
		return productos.find(producto => producto.id === parseFloat(id, 10))
	}

	static getCart(){
		return localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
	}
}
let category = "";
let productos = [];

function categoryValue(){
	const ui = new UI();

	category = document.getElementById("category").value;
	if(category.length > 0){
		producto = productos.filter(regx => regx.category === category)
		console.log(producto)
		ui.renderProductos(producto)
	
	
	}else{
		console.log(productos)
		ui.renderProductos(productos)
	}
}

	const query = new URLSearchParams(window.location.search)
	let id = query.get('id')
	

document.addEventListener("DOMContentLoaded", async () => {

	const productoLista = new Productos();
	const ui = new UI();
	
	ui.setAPP()
	
	productos = await productoLista.getProductos()
	if(id){
		ui.detalleproducto(id)
		Storage.saveProduct(productos)
		ui.getButtons();
		ui.cartLogic()
	}else{
		ui.renderProductos(productos)
		Storage.saveProduct(productos)
		ui.getButtons();
		ui.cartLogic()
		
	}
	
	

})
