const books = [
    { id: 1, title: "Clean Code", author: "Robert C. Martin", category: "Programming", available: true },
    { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", available: true },
    { id: 3, title: "Introduction to Algorithms", author: "Thomas H. Cormen", category: "Computer Science", available: false }
];

function renderBooks(booksToRender) {
    const grid = document.getElementById('catalogue');
    grid.innerHTML = '';
    
    booksToRender.forEach(book => {
        const card = document.createElement('div');
        card.style.background = '#ffffff';
        card.style.padding = '1.5rem';
        card.style.borderRadius = '8px';
        card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <p>Status: <span style="color: ${book.available ? 'green' : 'red'}">${book.available ? 'Available' : 'Checked Out'}</span></p>
        `;
        grid.appendChild(card);
    });
}

renderBooks(books);
// Added new helper feature
function logLibraryStatus() { console.log("Library system active"); }