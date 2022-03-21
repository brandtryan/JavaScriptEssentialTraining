class Book {
  constructor(title, author, isbn, pubDate, dateAcquired) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.pubDate = pubDate;
    this.dateAcquired = dateAcquired;
  }

  bookAge() {
    let now = new Date();
    let aquired = new Date(this.dateAcquired);
    let elapsed = now - aquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }

  bookPubAge() {
    let now = new Date();
    let published = new Date(this.pubDate);
    let elapsed = now - published; // elapsed time in milliseconds
    let daysSincePublished = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSincePublished;
  }
}

export default Book;
