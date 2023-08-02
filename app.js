let inputArea = document.querySelector('.inputAreaClass');
let inputItem = document.getElementById('inputId');
let buttonItem = document.getElementById('buttonId')
let contentArea = document.querySelector('.contentAreaClass');

buttonItem.addEventListener('click', writeFunction);

function writeFunction() {
    if (inputItem.value == "") {
        alert("Null Value");
    } else {
        let listItem = document.createElement('li');
        let deleteButton = document.createElement('div');
        let doneButton = document.createElement('div');
        doneButton.classList.add('doneButtonClass');
        deleteButton.classList.add('deleteButtonClass');
        doneButton.innerHTML = "+";
        deleteButton.innerHTML = "-";
        listItem.innerText = inputItem.value;
        contentArea.appendChild(listItem);
        listItem.appendChild(doneButton);
        listItem.appendChild(deleteButton);
        inputItem.value = "";
        doneButton.addEventListener('click', function () {
            listItem.classList.toggle('lineClass');
        });
        deleteButton.addEventListener('click', function () {
            contentArea.removeChild(listItem);
        });
    }
}



