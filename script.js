const dictionary = ['цетопс', 'дактиль', 'завр']
let dinos = dictionary.slice(0)

const consonant = ["б", "в", "г", "д", "ж", "з",
     "й", "л", "м", "н", "р", "п", "ф", "к", "т",
     "ш", "с", "х", "ц", "ч", "щ"]

// получаем элемент printBlock
const printBlock = document.getElementById("printBlock");

// получаем значение поля key
const keyBox = document.search.key;

function printForm(event) {
     const index = Math.floor(Math.random()*dinos.length)
     const dino = dinos[index];

     // убираем выбранный элемент
     dinos.splice(index, 1)

     if (dinos.length === 0) {
          dinos = dictionary.slice(0)
          dinos.splice(dinos.indexOf(dino), 1)
     }


     const val = keyBox.value;

     // стираем уже существующий текст
     printBlock.innerHTML = '';

     // создаем новый параграф
     const pElement = document.createElement("p");

     const endLet = (val.charAt(val.length - 1))
     // устанавливаем у него текст
     if (consonant.includes(endLet)) {
          pElement.textContent = val + 'о' + dino;
     }
     else if (val.length === 0) {
          pElement.textContent = 'Нет имени';
     }
     else {
          pElement.textContent = val + dino;
     }

     // добавляем параграф в printBlock
     printBlock.appendChild(pElement);
}


let printButton = document.search.print;
//  printButton.addEventListener("click", printForm);
printButton.addEventListener("click", printForm)

search.addEventListener('submit', (event) => event.preventDefault())
