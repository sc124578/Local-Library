function findAccountById(accounts, id) {
  const found = accounts.find((account) => account.id === id)
  return found
}
// test
function sortAccountsByLastName(accounts) {
 accounts.sort((lastNameOne, lastNameTwo) => lastNameOne.name.last > lastNameTwo.name.last ? 1: -1)
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  const accId = account.id
  let total = 0
  books.forEach(book => book.borrows.forEach(borrow => accId === borrow.id && total++))
  return total

}

function getBooksPossessedByAccount(account, books, authors) {
 let books_taken = [];
    books.forEach(book=>{
      if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
        books_taken.push(book);
      }
    })
    books_taken.forEach(book=>{
      let anAuthor = authors.find(person => person.id === book.authorId);
      book['author'] = anAuthor;
    })
    return books_taken;
  }
 


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
