function pressHouse() {

    class Article {
        #content;

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
        get content() {
            return this.#content;
        }
        set content(value) {

            this.#content = value;
        }
        toString() {
            let result = `Title: ${this.title}`
            result += `\n`;
            result += `Content: ${this.content}`;
            return result;
        }
    }

    class ShortReports extends Article {
        #originalResearch = {};
        comments = [];

        constructor(title, content, originalResearch) {
            super(title, content);
            this.originalResearch = originalResearch;
        }
        get content() {
            return super.content;
        }
        set content(value) {

            if (value.length > 150) {
                throw new Error("Short reports content should be less then 150 symbols.");
            }
            super.content = value;
        }
        get originalResearch() {
            return this.#originalResearch;
        }
        set originalResearch(value) {

            if (!value.title || !value.author) {
                throw new Error("The original research should have author and title.");
            }
            this.#originalResearch = value;
        }

        addComment(comment) {
            this.comments.push(comment);
            return "The comment is added.";
        }
        toString() {
            let result = super.toString();
            result += '\n';
            result += `Original Research: ${this.originalResearch.title} by ${this.originalResearch.author}\n`
            if (this.comments.length !== 0) {
                result += 'Comments:\n';
                for (const comment of this.comments) {
                    result += `${comment}\n`;
                }
            }
            return result.trim();
        }

    }

    class BookReview extends Article {
        clients = [];
        constructor(title, content, book) {
            super(title, content);
            this.book = book;
        }

        addClient(clientName, orderDescription) {
            if (this.clients.find(x => x.orderDescription == orderDescription)) {
                throw new Error("This client has already ordered this review.");
            }
            let client = { clientName, orderDescription };
            this.clients.push(client);
            return `${clientName} has ordered a review for ${this.book.name}`;
        }

        toString() {
            let result = super.toString();
            result += '\n';
            result += `Book: ${this.book.name}\n`;

            if (this.clients.find(x => x.orderDescription)) {
                result += 'Orders:\n';
                for (const client of this.clients) {
                    result += `${client.clientName} - ${client.orderDescription}\n`;
                }
            }
            return result.trim();
        }

    }

    return {
        Article,
        ShortReports,
        BookReview
    }
}
let classes = pressHouse();
let lorem = new classes.Article("Lorem", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non tortor finibus, facilisis mauris vel…");
console.log(lorem.toString());
//------------------------------
let short = new classes.ShortReports("SpaceX and Javascript", "Yes, its damn true.SpaceX in its recent launch Dragon 2 Flight has used a technology based on Chromium and Javascript. What are your views on this ?", { title: "Dragon 2", author: "wikipedia.org" });
console.log(short.addComment("Thank god they didn't use java."))
short.addComment(`In the end JavaScript"s features are executed in C++ — the underlying language.`)
console.log(short.toString());
//------------------------------
let book = new classes.BookReview("The Great Gatsby is so much more than a love story", "The Great Gatsby is in many ways similar to Romeo and Juliet, yet I believe that it is so much more than just a love story. It is also a reflection on the hollowness of a life of leisure. ...", { name: "The Great Gatsby", author: "F Scott Fitzgerald" });
console.log(book.addClient("The Guardian", "100 symbols"));
console.log(book.addClient("Goodreads", "30 symbols"));
console.log(book.toString());
