const productCurt = document.querySelectorAll('product');



productCurt.forEach(element => {
    element.addEventListener('click', function(){
        console.log('checked')
    })
});