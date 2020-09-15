function printForm(e){

    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");

    // стираем уже существующий текст
    printBlock.innerHTML = '';

    // создаем новый параграф
    var pElement = document.createElement("p");
    // устанавливаем у него текст
    pElement.textContent = val + 'цетопс';
    // добавляем параграф в printBlock
    printBlock.appendChild(pElement);
}


    var printButton = document.search.print;
    printButton.addEventListener("click", printForm);
