;(function(){
  const Library = []
  const title = document.querySelector('.title');
  const author  = document.querySelector('.author');
  const page = document.querySelector('.page');
  const btn = document.querySelector('.form');
  const books = document.querySelector('.new-book');

  
    class Book {
        constructor(title, author, page) {
            this.title = title;
            this.author = author;
            this.page = page;
        }
    }


const book = new Book(title.value, author.value, page.value);

btn.addEventListener('submit', (e) =>{
   e.preventDefault()

   if(title.value === '' && author.value === '' && page.value === ''){
       console.log('Por favor preecha o espaco vazio')
   }else{
       for(const an in book){
       Library.push(an)
        for( let i = 0; i<= Library.length; i++){
          books.textContent= Library[i]
       }
   }
   }
 })
    
})();