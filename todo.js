function TodoModule(todoContainerElement) {  

    function todoItem(text, priority) {
        this.text = text;
        this.priority = priority;
    }
    
    var list = [];
    var addItem = document.getElementById("add");
    var addButton = addItem.addEventListener("click", newTodoItem);

    function newTodoItem() {
        var textValue = document.getElementById("setItem").value;
        var priValue = document.getElementById("setPri").value;
        var newItem = new todoItem(textValue, priValue);
        list.push(newItem);
        addTodoItem(newItem);        
    }

    function addTodoItem(item) {

        var itemDiv = document.createElement("div");
        itemDiv.id = "td" + (list.length - 1);
        itemDiv.className = "itembox";
        var boxAdd = document.getElementById("toDoList").appendChild(itemDiv);

        var textHeading = document.createElement("h2");
        textHeading.innerHTML = item.text;
        var textAdd = document.getElementById(itemDiv.id).appendChild(textHeading);

        var priHeading = document.createElement("h3");
        priHeading.innerHTML = "Priority: " + item.priority;
        var priAdd = document.getElementById(itemDiv.id).appendChild(priHeading);

        var doneBox = document.createElement("div");
        doneBox.className = "doneBox";
        var doneAdd = document.getElementById(itemDiv.id).appendChild(doneBox);

        var doneButton = document.createElement("button");
        doneButton.className = "done";
        doneButton.innerHTML = "Done";
        document.getElementById(itemDiv.id).appendChild(doneButton);

        markTodoItemAsDone();

        var clearItem = document.getElementById("setItem");
        clearItem.value = "";

    }

    function markTodoItemAsDone() {
        var buttons = document.getElementsByClassName("done");
        var i;
        for (i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function () {
                var boxDiv = this.previousElementSibling;
                boxDiv.innerHTML = "<img src='images/check.gif' />";
                this.innerHTML = "";
            }
        }

    }

    return {
        addTodoItem: addTodoItem,
        markTodoItemAsDone: markTodoItemAsDone
    }

}

var tm = TodoModule('todo');