var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//var todos = ["Estudar JavaScript", "Ler livro", "Ver e-mails"];
var todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
    listElement.innerHTML = "";
    for (const item of todos) {
        // cria item 'li' e define um texto
        var itemList = document.createElement("li");
        var textItem = document.createTextNode(item);

        // cria um elemento 'a', define um texto e add nele um atributo 'href'
        var linkElement = document.createElement("a");
        linkElement.innerHTML = "Excluir";
        linkElement.setAttribute("href", "#");
        var espaco = document.createTextNode(" ");

        // pega a posição do item atual
        var posItem = todos.indexOf(item);
        console.log(posItem);

        // seta no link um evento onclick e põe uma função para remover o item atual
        linkElement.setAttribute("onclick", `removeTodo(${posItem})`);

        // adiciona o texto e depois o link no 'li'
        itemList.appendChild(textItem);
        itemList.appendChild(espaco);
        itemList.appendChild(linkElement);

        // adiciona o 'li' na lista 'ul'
        listElement.appendChild(itemList);
    }
}

renderTodos();

function addTodo() {
    var newTodo = inputElement.value;
    todos.push(newTodo);
    console.log(todos);
    inputElement.value = "";
    renderTodos();
    localStorage.setItem("todos", JSON.stringify(todos));
}

function saveToStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

buttonElement.onclick = addTodo;

function removeTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}
