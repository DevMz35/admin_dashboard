const display = document.querySelector('.calculeter');
const keys = document.querySelector('.btns')

 
keys.addEventListener('click', (e) => {
    if (e.target.matches('button')) {

        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
       
        if (!action) {

            if (displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }

        } else if (action === "add" ||
            action === 'subt' || action === 'mult' || action === 'divide') {
            console.log('operator key')

        } else if (action === 'calculator') {
            const secondValue = displayedNum;

        } else if (action === 'delete') {
            console.log('apagar')

        } else if (action === 'clear') {
            console.log('Limpar')

        } else if (action === 'decimal') {
            display.textContent = displayedNum + '.';
        }

    }
})