;
(() => {
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const resultado = document.querySelector('.resultado');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', () => {
        if (peso.value === '' && altura.value === '') {
            const p = document.createElement('p')
            p.textContent = 'por favor preencha o campo vazio'
            p.style.color = 'red'
            p.style.fontSize = '1.5rem'
            p.style.textTransform = 'capitalize'
            p.style.padding = '2rem'
            resultado.appendChild(p)
        } else {
            const resu = Number(peso.value) / (Number(altura.value) * Number(altura.value));
            const result = resu.toFixed(2)
            if (result <= 18.4) {
                const pa = document.createElement('p');
                pa.textContent = `Seu peso é ${result} e você está abaixo de peso normal.`
                pa.style.color = 'red'
                pa.style.fontSize = '1.5rem'
                pa.style.padding = '2rem'
                resultado.appendChild(pa)
            } else if (result > 18.4 && result < 24.9) {
                const resul = document.createElement('p');
                resul.textContent = `O seu peso é ${result}. Parabens! seu peso está dendro do normal.`
                resul.style.color = 'green';
                resul.style.fontSize = '1.5rem';
                resul.style.textTransform = 'capitalize'
                resul.style.padding = '2rem'
                resultado.appendChild(resul)
            } else if (result > 24.9 && result < 29.9) {
                const danger = document.createElement('p');
                danger.style.fontSize = '1.5rem';
                danger.style.color = 'yellow';
                danger.style.padding = '2rem'
                danger.textContent = `Seu imc é ${result}. Você está acima de peso.`
                resultado.appendChild(danger)
            } else if (result > 30 && result < 34.9) {
                const pa = document.createElement('p');
                pa.textContent = `Lamentamos, você é obeso! seu imc é ${result}, obesidade grau 1.`
                pa.style.color = 'red'
                pa.style.textTransform = ' capitalize';
                pa.style.fontSize = '1.5rem'
                pa.style.padding = '2rem'
                resultado.appendChild(pa)
            } else if (result >= 35 && result <= 39.9) {
                const pa = document.createElement('p');
                pa.textContent = `Você está obeso! Seu imc é ${result}. Obesidade grau 2.`
                pa.style.color = 'red'
                pa.style.fontSize = '1.5rem';
                pa.style.textTransform = 'capitalize';
                pa.style.padding ='2rem'
                resultado.appendChild(pa)
            } else if (result >= 40) {
                const pa = document.createElement('p');
                pa.textContent = `Você está obeso! Seu imc é ${result}. Obesidade grau 3 (severa).`
                pa.style.color = 'red'
                pa.style.fontSize = '1.5rem';
                pa.style.textTransform = 'capitalize';
                pa.style.padding = '2rem'
                resultado.appendChild(pa)
            }

        }
    })

})();