function updatePrice(featureId,price)
{
    const featureCost = document.getElementById(featureId);
    featureCost.innerText = price;  
    totalPrice();
}
// calculate the cost 
function totalPrice()
{
    const bestPrice = parseInt(document.getElementById('best-price').innerText); 
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText); 
    const storagePrice = parseInt(document.getElementById('storage-cost').innerText); 
    const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText); 
    let totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('final-result').innerText = totalPrice;
}
// memory-extra add on
document.getElementById('memory-8GB').addEventListener('click',function()
{
    updatePrice('memory-cost',0);  
})
document.getElementById('memory-16GB').addEventListener('click',function()
{
    updatePrice('memory-cost',180);  
})
// storage-extra add on
document.getElementById('storage-256GB').addEventListener('click',function()
{
    updatePrice('storage-cost',0);  
})
document.getElementById('storage-512GB').addEventListener('click',function()
{
    updatePrice('storage-cost',100);  
})
document.getElementById('storage-1TB').addEventListener('click',function()
{
    updatePrice('storage-cost',180);  
})
// delivery-way
document.getElementById('delivery-free').addEventListener('click',function()
{
    updatePrice('delivery-cost',0);  
})
document.getElementById('delivery-20').addEventListener('click',function()
{
    updatePrice('delivery-cost',20);  
})
// promo code apply section 
document.getElementById('promo-button').addEventListener('click',function()
{
    const promoCode = document.getElementById('promo-input').value;
    if(promoCode == 'siambd')
    {
        const totalPrice = parseInt( document.getElementById('total-price').innerText);
        console.log(totalPrice)
        const newTotalPrice = totalPrice-totalPrice*.2 ;
        document.getElementById('total-price').innerText = newTotalPrice ;
        document.getElementById('final-result').innerText = newTotalPrice ;
    }
    else
    {
        alert("Promocode not matched !! Please input 'siambd' correctly ");
    }
    
})