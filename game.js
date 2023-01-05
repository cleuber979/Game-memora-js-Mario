
const grid = document.querySelector('.grid');/*estou pegando a propriedade css do grid*/

const characters =[
   'bomb',
   'fantasma',
   'caixablock',
   'koopa',
   'marioAllstar',
   'marioAntigo',
   'plantaCarnivora',
   'tartaruga',
   'yoshi',
   'wario',
   'waluidi',
   'mariosnes',
   'luidi',
   'espinho',
   'syguy'
   

];
 const createElement = (tag, className) =>{
 const element = document.createElement(tag)
 element.className = className
 return element;
}

let firstCard = '';
let secondCard= '';

const checEndGame= ()=>{
  const disabledCards = document.querySelectorAll('.disable-card');

  if(disabledCards.length===30){
    alert('Parabéns, você ganhou !');
  }

}

const checkCards= ()=>{

const firstCharacter = firstCard.getAttribute('data-character');
const secondCharacter = secondCard.getAttribute('data-character');

if(firstCharacter==secondCharacter){

  firstCard.firstChild.classList.add('disable-card');
  secondCard.firstChild.classList.add('disable-card');

  firstCard = '';
  secondCard= '';
 
  checEndGame();

}else{

setTimeout(()=>{
  firstCard.classList.remove('reveal-card');
  secondCard.classList.remove('reveal-card');

  firstCard = '';
  secondCard= '';

},800);


}

}

const revealCard = ({target})=>{

  if(target.parentNode.className.includes('reveal-card')){
    return;
  }

  if(firstCard== ''){
   
    target.parentNode.classList.add('reveal-card');
    firstCard= target.parentNode; 

  }else if (secondCard==''){
    target.parentNode.classList.add('reveal-card');
    secondCard = target.parentNode;

    checkCards();

  }

}


const createCard = (character) => {

    const card = createElement('div','card'); /*esse função serve para criar um elemento html um construtor*/
    const front = createElement('div','face front');
    const back = createElement('div','face back');

    front.style.backgroundImage =`url('./img/${character}.png')`;/* essa linha faz a gente crar as cartas dinamicamente*/

   

    card.appendChild(front);/*estou acrescentando um filho para essa card montando a carta */
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    
    card.setAttribute('data-character',character)

  return card;

}
                      /*função que cria o game */
const loadGame = () => {

  const duplicateCharacters =[...characters,...characters];

  const shuffledArray = duplicateCharacters.sort(() => Math.random()-.5   );

  shuffledArray.forEach((character) => {
    
        const card = createCard(character);/* const vai pecrrer e criar as cartas*/
        grid.appendChild(card);

});

}
 loadGame();

  