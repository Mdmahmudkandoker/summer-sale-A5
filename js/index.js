// 

let total = 0;
let count = 1;
const applyButton = document.getElementById("apply-btn");
const input = document.getElementById("input-field");
const selectedItemContainer = document.getElementById("selected-items");
const discountPrice = document.getElementById("discount");
const productTotal = document.getElementById("total");
const allGrandTotal = document.getElementById("grand-total")

// 

function handleClickBtn(target) {
  const itemName = target.childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerText = count + ". " + itemName;
  count += 1; 
  selectedItemContainer.appendChild(li);

  const price = target.childNodes[5].innerText.split(" ")[0];

  total = parseInt(total) + parseInt(price);
  document.getElementById("total").innerText = total;

  const purchaseButton = document.getElementById("purchase-btn");

  purchaseButton.removeAttribute("disabled");

  purchaseButton.classList.remove("bg-slate-300");

  purchaseButton.classList.add("bg-[#E527B2]");

  if (total >= 200) {
    applyButton.removeAttribute("disabled");

    applyButton.classList.remove("bg-slate-300");

    applyButton.classList.add("bg-[#E527B2]");
  }
}

//
applyButton.addEventListener("click", function () {
  
  const inputText = input.value;
  if (inputText === "SELL200") {
    const totalPrice = total;
    const discountCalculation = (totalPrice / 100) * 20;

    
    discountPrice.innerText = discountCalculation.toFixed(2);
    const grandTotal = totalPrice - discountCalculation;
    document.getElementById("grand-total").innerText = grandTotal;
  }
  else{
    alert('Invalid coupon code');
  }
  input.value = "";
});

// 

document.getElementById('home-btn').addEventListener('click', function(){
    count = 1;
    discountPrice.innerText = "00.00";
    productTotal.innerText = "00.00";
    allGrandTotal.innerText = "00.00";
    selectedItemContainer.innerHTML = "";
})



