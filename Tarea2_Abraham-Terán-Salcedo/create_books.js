/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

import * as BooksModule from "./books.js";


let printedBook_1 = new BooksModule.PrintedBook("American Pastoral", "Roth, Philip", 1997, 423);
let printedBook_2 = new BooksModule.PrintedBook("The Talented Mr. Ripley", "Highsmith, Patricia", 1955, 252);
let audiobook_1 = new BooksModule.Audiobook("The Society of the Spectacle", "Debord, Guy", 1967, "4:16");
let audiobook_2 = new BooksModule.Audiobook("His Master's Voice", "Lem, Stanislaw", 1967, "9:17");
let ebook_1 = new BooksModule.EBook("Scientific Programming with Python", "Hill, Christian", 2015, "PDF");
let ebook_2 = new BooksModule.EBook("Discovering Modern CPP", "Gottschling, Peter", 2015, "EPUB");


let the_library = new BooksModule.Library();

the_library.SaveBookAsJSON(printedBook_1);
the_library.SaveBookAsJSON(printedBook_2);
the_library.SaveBookAsJSON(audiobook_1);
the_library.SaveBookAsJSON(audiobook_2);
the_library.SaveBookAsJSON(ebook_1);
the_library.SaveBookAsJSON(ebook_2);

console.log("\n create_books.js: books created. you can now run main.js")