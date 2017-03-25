pl.view.listBook = {
    setupUserInterface: function () {
        var tableBodyEl = document.getElementById("table#books>tbody");
        var keys=[], key="", row={};

        Book.loadAll();
        keys = Object.keys(Book.instances);

        for (var key in keys) {
            row = tableBodyEl.insertRow();
            row.insertCell(-1).textContent = Book.instances[key].isbn;
            row.insertCell(-1).textContent = Book.instances[key].title;
            row.insertCell(-1).textContent = Book.instances[key].year;
        }


    }


};