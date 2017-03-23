function Book(slots) {
    this.isbn = slots.isbn;
    this.title = slots.title;
    this.year = slots.year;
}

Book.instances = {}

Book.add = function(slots) {
    var book = new Book(slots);
    Book.instances[slots.isbn] = body;
    console.log("Book " + slots.isbn + " created!");
}

bookString = localStorage["books"];