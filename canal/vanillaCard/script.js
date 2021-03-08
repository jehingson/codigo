const addToCardButtons = document.querySelectorAll(".addToCard");
const addCarritoItemTr = document.querySelector(".tr");
const alert = document.querySelector(".alert");


const comprarButton = document.querySelector('.comprarButton')
comprarButton.addEventListener('click', comprarButtonClick)

addToCardButtons.forEach((addToCardButton) => {
  addToCardButton.addEventListener("click", addToCardItems);
});
function addToCardItems(e) {
  const button = e.target;
  //El elemnto mas cercano (closest)
  const item = button.closest(".card");

  const itemTitle = item.querySelector(".card-title").textContent;
  const itemPrice = item.querySelector(".h6").textContent;
  const itemImg = item.querySelector(".card-img-top").src;

  alert.classList.add("show");
  setTimeout(() => {
    alert.classList.remove("show");
  }, 3000);

  addItemCarrito(itemTitle, itemPrice, itemImg);
}

function addItemCarrito(itemTitle, itemPrice, itemImg) {
  // evaluado si ya existe
  const elementoTitle = addCarritoItemTr.getElementsByClassName("title");

  for (let i = 0; i < elementoTitle.length; i++) {

    if(elementoTitle[i].innerText.trim() === itemTitle.trim()) {

      let inputCantidad = elementoTitle[i].parentElement.parentElement.querySelector(".tabla__cantidad__input");

      inputCantidad.value++;
      CarritoTotal();

      return;
    }
  }

  const addCarritoTable = document.createElement("tr");
  addCarritoTable.classList.add("ItemCarrito");

  const th = `
              <td scope="row">1</td>
                <td class="tabla__productos">
                  <img src=${itemImg} alt=${itemTitle}>
                  <h6 class="title">${itemTitle}</h6>
                </td>
                <td class="tabla__precio">
                  <p>${itemPrice}</p>
                </td>
                <td class="tabla__cantidad">
                  <input class="tabla__cantidad__input" type="number" min="1" value="1" />
                  <button class="delete btn btn-danger"> x </button>
                </td>
                
  `;

  addCarritoTable.innerHTML = th;
  addCarritoItemTr.append(addCarritoTable);

  // Delete Item
  addCarritoTable
    .querySelector(".delete")
    .addEventListener("click", removeItemCarrito);

  addCarritoTable
    .querySelector(".tabla__cantidad__input")
    .addEventListener("change", sumaCantidadImput);

  CarritoTotal();
}

function CarritoTotal() {
  let total = 0;
  const itemCartTotal = document.querySelector(".itemCartTotal");
  const ItemCarrito = document.querySelectorAll(".ItemCarrito");

  ItemCarrito.forEach((item) => {
    const itemPrecio = item.querySelector(".tabla__precio");
    const precio = Number(itemPrecio.textContent.replace("$", ""));

    const itemCantidad = item.querySelector(".tabla__cantidad__input");

    const cantidad = Number(itemCantidad.value);

    total = total + precio * cantidad;
  });
  //innerHTML es su contenido
  itemCartTotal.innerHTML = `Total: $${total.toFixed(2)}`;
}

function removeItemCarrito(e) {
  const buttonDelete = e.target;
  buttonDelete.closest(".ItemCarrito").remove();
  CarritoTotal();
}
function sumaCantidadImput(e) {
  const suma = e.target;
  suma.value < 1 ? (suma.value = 1) : null;
  CarritoTotal();
}


function comprarButtonClick(){
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, option)
})
  addCarritoItemTr.innerHTML = '';
  CarritoTotal()
}