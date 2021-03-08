const addToCard = document.querySelectorAll('.addToCard');
const tbody = document.querySelector('.tbody') 


addToCard.forEach((button) =>{
  button.addEventListener("click", addToCardItems)
})


function addToCardItems(e){
  const button = e.target
  
  const item = button.closest(".card")
  
  const itemTitle = item.querySelector(".card-title").textContent;
  const itemPrice = item.querySelector(".text-danger").textContent;
  const itemImg = item.querySelector('.card-img-top').src;
 
  
  addItemCarrito(itemTitle, itemPrice, itemImg)

}

function addItemCarrito(itemTitle, itemPrice, itemImg){

  const titleELemento = tbody.getElementsByClassName('title')
  for(let i = 0 ; i < titleELemento.length ; i++){
    if(titleELemento[i].innerText.trim() === itemTitle.trim()){

      let inputCantidad = titleELemento[i].parentElement.parentElement.querySelector(".input_cantidad")

      inputCantidad.value++;

      CarritoTotal()

      return ;

    }
  }

  const tr = document.createElement('tr')
  tr.classList.add('ItemCarrito')

  const Content = `
  <th scope="row">1</th>
  <td class="table__productos">
    <img src=${itemImg} alt="">
    <h6 class="title">${itemTitle}</h6>
  </td>
  <td class="table__precio"><p>${itemPrice}</p></td>
  <td class="table__cantidad">
    <input class="input_cantidad" type="number" min="1" value="1" />
    <button class="delete btn btn-danger">x</button>
  </td>
  
  `

  tr.innerHTML = Content;
  tbody.append(tr)

  tr.querySelector(".delete").addEventListener("click", removeItemCarrito)

  tr.querySelector(".input_cantidad").addEventListener("change", sumaCantidaInput)

  CarritoTotal()

}

function CarritoTotal(){
  let total = 0;
  const itemCartTotal = document.querySelector('.itemCartTotal')
  const ItemCarrito = document.querySelectorAll('.ItemCarrito')
  
  ItemCarrito.forEach((item) => {
    
    const itemPrecio = item.querySelector('.table__precio')
    const precio = Number(itemPrecio.textContent.replace("$", ''))
    
    const itemCantidad = item.querySelector('.input_cantidad')
    const cantidad = Number(itemCantidad.value)

    total = total + precio*cantidad
  })
  itemCartTotal.innerHTML = `Total: $${total.toFixed(2)}`
  
}

function removeItemCarrito(e){
  const buttonDelete = e.target
  buttonDelete.closest(".ItemCarrito").remove()
  CarritoTotal()
}

function sumaCantidaInput(e){
  const suma = e.target
  suma.value < 1 ? (suma.value =1) : null;
  CarritoTotal()
}