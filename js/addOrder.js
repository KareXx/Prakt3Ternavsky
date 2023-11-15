document.addEventListener('DOMContentLoaded', () =>{
    const changeQuantity = document.querySelectorAll('.main__order__food__quantitybtn__changequantity');
    const quantityElement = document.querySelector('#quantity');
    const productPrice = document.querySelector('#price');
    const fullPriceElement = document.querySelector('.main__order__price');
    const buyBtn  = document.querySelector('.main__order__doOrderBtn');
    const price = 4;
    let quantity = 0;


    changeQuantity.forEach(click =>{
        click.addEventListener('click',() =>{
            if (click.innerText === '-' && quantity > 0 ){
                quantity -= 1;
                quantityElement.textContent = quantity; 
                fullPriceElement.textContent = `Price: ${price*quantity}$`;
            }else if (click.innerText === '+'){
                quantity += 1;
                quantityElement.textContent = quantity; 
                quantityElement.textContent = quantity; 
                fullPriceElement.textContent = `Price: ${price*quantity}$`;
            }
        });
    });

    buyBtn.addEventListener('click', () =>{
        if(quantity > 0){
            var data = confirm(`Ви підтверджуєте замовлення?`);
            if (data){
                alert('Ви зробили замовлення');
                quantity = 0;
                quantityElement.textContent = quantity
                fullPriceElement.textContent = `Price: ${price*quantity}$`;
            }
        }
    });
});