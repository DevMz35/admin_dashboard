;(() =>{
const content = document.querySelector('#content');
 document.body.style.backgroundImage = "url('../assets/img.jpg')";
 document.body.style.backgroundSize = 'cover';
 document.body.style.backgroundColor = 'red'

function creatNavElements(){
    const header = document.createElement('header')
    content.appendChild(header);
    header.classList.add('header')

    const h2 = document.createElement('h2');
    const at = document.createElement('a')
    at.href ="#";
    at.textContent = 'Mozsadza';
    h2.appendChild(at)
    header.appendChild(h2)

    const ul = document.createElement('ul');
    ul.classList.add('navigation');
    header.appendChild(ul)
    
     
    const li = document.createElement('li');
     const a = document.createElement('a');
    a.href="#";
    a.textContent = 'Home'
    li.appendChild(a)
    ul.appendChild(li)
       
   const li1 = document.createElement('li');
   const a1 = document.createElement('a')
   a1.href="#";
   a1.textContent = 'About'
   li1.appendChild(a1)
   ul.appendChild(li1)
   
    const li2 = document.createElement('li');
    const a2 = document.createElement('a')
    a2.href="#";
    a2.textContent = 'Contact'
    li2.appendChild(a2)
    ul.appendChild(li2)
       
}
creatNavElements()

function mainElements(){
    const main = document.createElement('main');
    main.classList.add('main')
    const div = document.createElement('div');
    div.classList.add('my-content')
    main.appendChild(div)
    content.appendChild(main)

    const h1 = document.createElement('h1')
    h1.textContent = 'Visite o melhor restaurante da sua cidade!'
    const p = document.createElement('p')
    p.textContent = 'As melhores lembranças são feitas de: Boa comida, bons amigos e bons momentos'
    div.appendChild(h1)
    div.appendChild(p)
    
    function createImg(){
    const img = document.createElement('img');
    img.src='../assets/img.jpg'
    img.style.width = '70vw';
    img.style.height = '60vh';
    img.style.alignItems ='center'
    div.appendChild(img)
}
createImg()


}
mainElements()


function footerElement(){
    const footer = document.createElement('footer')
    footer.classList.add('footer')
    content.appendChild(footer)
    const h2 = document.createElement('h2')
    h2.textContent = '©Alface developer'
    footer.appendChild(h2)
    const tex = document.createElement('p');
    tex.textContent ='Photo by Zakaria Zayane in unplash.'
    footer.appendChild(tex)
}
footerElement()
})();