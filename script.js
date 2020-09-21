function printForm(e){
  let fruits = ["б", "в", "г", "д", "ж", "з",
  "й", "л", "м", "н", "р", "п", "ф", "к", "т",
   "ш", "с", "х", "ц", "ч", "щ"]

   let dinos = ['цетопс', 'дактиль', 'завр']
   var dino = dinos[Math.floor(Math.random()*dinos.length)];


    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");

    // стираем уже существующий текст
    printBlock.innerHTML = '';

    // создаем новый параграф
    var pElement = document.createElement("p");

    var endLet = (val.charAt(val.length -1))
    // устанавливаем у него текст
    if (fruits.includes(endLet)) {
      pElement.textContent = val + 'о' + dino;
    }
    else if (val.length <= 0) {
      pElement.textContent = 'Нету имени';
    }
    else {
      pElement.textContent = val + dino;
    }

    // добавляем параграф в printBlock
    printBlock.appendChild(pElement);
}


    var printButton = document.search.print;
  //  printButton.addEventListener("click", printForm);
    printButton.addEventListener("click", printForm)

    search.addEventListener('submit', (event) => event.preventDefault())
