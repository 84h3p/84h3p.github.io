function printForm(e){
  let fruits = ["б", "в", "г", "д", "ж", "з",
  "й", "л", "м", "н", "р", "п", "ф", "к", "т",
   "ш", "с", "х", "ц", "ч", "щ"]

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
      pElement.textContent = val + 'оцетопс';
    }
    else {
      pElement.textContent = val + 'цетопс';
    }

    // добавляем параграф в printBlock
    printBlock.appendChild(pElement);
}


    var printButton = document.search.print;
  //  printButton.addEventListener("click", printForm);
    printButton.addEventListener("click", printForm);
