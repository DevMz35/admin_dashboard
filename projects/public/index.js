const display = document.querySelector('.calculadora')
const keys = document.querySelector('.teclado');

keys.addEventListener('click', e => {
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const numDisplay = display.textContent;

        if(!action){
            if(numDisplay === '0'){
               display.textContent = keyContent;
            }else {
                display.textContent = numDisplay + keyContent;
            }
        }else if(action === 'add' || action ==='subt'
    || action ==='mult' || action === 'divide'){
        console.log('Operador')
    }

    }
})