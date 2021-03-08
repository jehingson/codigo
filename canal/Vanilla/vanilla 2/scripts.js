const ClickButton = document.querySelectorAll('.button')
const tbody = document.querySelector('.tbody')
let carrito = []

ClickButton.forEach((button) => {
  button.addEventListener('click', addToCardItem)
})

function addToCardItem(e){
  const button = e.target

  const item = button.closest('.card')
  const itemTitle = item.querySelector(".card-title").textContent;
  const itemPrice = item.querySelector(".precio").textContent;
  const itemImg = item.querySelector('.card-img-top').src;

  let newItem = {
    title: itemTitle,
    precio: itemPrice,
    img: itemImg,
    cantidad: 1
  }

  



  
  addItemCarrito(newItem)
}

function addItemCarrito(newItem){
  
const alert = document.querySelector('.alert')
setTimeout(function(){ 
  alert.classList.add("hide")
}, 2000);
alert.classList.remove("hide")

const titleElemento = tbody.getElementsByClassName('title')
for(let i=0;  i < carrito.length ; i++ ){
  if(carrito[i].title.trim() === newItem.title.trim()) {
    carrito[i].cantidad ++; 
    let inputCantidad = titleElemento[i].parentElement.parentElement.querySelector('.input__cantidad')
    inputCantidad.value++;
    CarritoTotal()
    return null
  }
}
carrito.push(newItem)
renderCarrito()

}

function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
  const tr = document.createElement('tr')
  tr.classList.add('ItemCarrito')
  const Content = `
    <th scope="row">1</th>
    <td class="table__productos">
      <img src=${item.img} alt="">
      <h6 class="title">${item.title}</h6>
    </td>
    <td class="table__precio"><p>${item.precio}</p></td>
    <td class="table__cantidad">
      <input class="input__cantidad" type="number" min="1" value=${item.cantidad} />
      <button class="delete btn btn-danger">x</button>
    </td>
    `
    tr.innerHTML = Content;
    tbody.append(tr)

    tr.querySelector(".delete").addEventListener("click", removeItemCarrito)

    tr.querySelector(".input__cantidad").addEventListener("change", sumaCantidaInput)
  
  })

  CarritoTotal()

}

function CarritoTotal(){
  let total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  console.log(carrito)
  carrito.forEach((item) => {
    // const itemPrecio = item.querySelector('.table__precio')
    // const precio = Number(itemPrecio.textContent.replace("$", ''))
    // const itemCantidad = item.querySelector('.input__cantidad')
    // const cantidad = Number(itemCantidad.value)
    const precio = Number(item.precio.replace("$",''))
    total = total + precio*item.cantidad
   
  })
  itemCartTotal.innerHTML = `Total: $${total.toFixed(2)}`
  localStorages()
}


function removeItemCarrito(e){
  const buttonDelete = e.target
  const tr = buttonDelete.closest(".ItemCarrito")
  const titles = tr.querySelector('.title').textContent
  for (let i = 0 ; i< carrito.length ; i++){
    let titless = carrito[i].title;
    if(titless.trim() === titles.trim()){
      carrito.splice(i, 1)
      console.log('vamos bien')
    }
  }
  tr.remove()
  const alert = document.querySelector('.alert-danger')
  setTimeout(function(){ 
    alert.classList.add("remove")
  }, 2000);
  alert.classList.remove("remove")
  CarritoTotal()
}

function sumaCantidaInput(e){
  const suma = e.target
  const tr = suma.closest(".ItemCarrito")
  const titles = tr.querySelector('.title').textContent
  console.log(titles)
  carrito.forEach(item => {
    if(item.title.trim() === titles.trim()){
      suma.value < 1 ? (suma.value =1) : suma.value;
      item.cantidad = suma.value;
      CarritoTotal()
    } 
  })
}

function localStorages(){
  localStorage.setItem('carrito', JSON.stringify(carrito))
}

window.onload = function(){
  const storage = JSON.parse(localStorage.getItem('carrito'));
  if(storage){
    carrito = storage;
    console.log(carrito)
    renderCarrito();
  }
}