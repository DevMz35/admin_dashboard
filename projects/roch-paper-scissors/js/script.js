;(() =>{
  const btn = document.querySelector('#btn');
  const rock = document.querySelector('#rock')
  const paper = document.querySelector('#paper')
  const scissor = document.querySelector('#scissors')
  const result = document.querySelector('.result')

  const playerGame = (select) =>{ 
      if(select === rock && computer === rock.checked ||
         select === paper && computer === paper.checked
          || select === scissor && computer === scissor.checked){
           console.log('Empate')
      }
  }

   function computer(){
       switch(Math.floor(Math.random() * 3)){
           case 0:
               return rock;
               case 1:
                   return paper;
                   case 2:
                       return scissor
       }
   }

  btn.addEventListener('click', () =>{
      
     console.log(playerGame(rock))
     
  })
       
    
      

  })();