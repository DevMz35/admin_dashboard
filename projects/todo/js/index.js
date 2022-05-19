;(() =>{
    
    const newItem = document.querySelector('.new-list');
    const addNew = document.querySelector('#new-list');
    const btn = document.querySelector('#btn');
    const delet = document.querySelector('.delet')

    
    btn.addEventListener('click', ()=>{
        if(addNew.value ===''){
            alert('Sorry, add new item first!')
        }else {
            const label = document.createElement('label');
            const input = document.createElement('input')
            input.type = 'checkbox';
            const p = document.createElement('p');
            p.textContent = addNew.value;
            const button = document.createElement('button')
            button.innerHTML = 'del';
            button.classList.add('delet')
            label.appendChild(input);
            label.appendChild(p);
            label.appendChild(button)
            newItem.appendChild(label);
        }
    
    })
    document.addEventListener('click', (e)=>{
        const el = e.target;
        if(el.classList.contains('delet')){
            el.parentElement.remove()
        }
    })

})();