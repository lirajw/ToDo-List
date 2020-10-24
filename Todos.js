var ulElement = document.querySelector('#toDos ul')
var inputElement = document.querySelector('#edit input');
var buttonAddElement = document.querySelector('#edit button');

var toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function rendetizarToDos(){

    ulElement.innerHTML = '';

    for (todo of toDos){

        var liElement = document.createElement('li');
        var divContainerElement = document.createElement('div');
        var divmsgElement = document.createElement('div');
        var pElement = document.createElement('p');
        var text = document.createTextNode(todo);
        var buttonElement = document.createElement('button');

        pElement.appendChild(text);
        buttonElement.appendChild(document.createTextNode('Excluir'));
        divmsgElement.appendChild(pElement);
        divContainerElement.appendChild(divmsgElement);
        divContainerElement.appendChild(buttonElement);
        liElement.appendChild(divContainerElement);
        ulElement.appendChild(liElement);



        divmsgElement.setAttribute('class', 'msg')
        divContainerElement.setAttribute('class', 'container')
        buttonElement.setAttribute('id', 'excluir');

        var index = toDos.indexOf(todo);
        buttonElement.setAttribute('onclick', 'excluir('+ index +')');

    }
}

function adicionar(){    
    var texto = inputElement.value;
    inputElement.value = '';
    if(texto !== '')
    {
        toDos.push(texto);
        salvarToLocalStorage();
        rendetizarToDos();
    }
        
}

function excluir(index){

    toDos.splice(index, 1);
    salvarToLocalStorage();
    rendetizarToDos();
}

function salvarToLocalStorage(){

    localStorage.setItem('list_todos', JSON.stringify(toDos));
}

buttonAddElement.onclick = adicionar;

rendetizarToDos();
