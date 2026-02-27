/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

/*-*-*-*-*-*-*-*-*-*- TAREA DOS (2) -*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*/
console.log("-------- TAREA DOS (2) ----------------------------------------------------")

/*-----------------------------------------------------------------------------------------------------*/
/* ---| Ejercicio 2.1: Crear un CRUD (Create, Read, Update, Delete) para un sistema de biblioteca
    --| que permita la gestión de títulos, usando como base de datos no persistente un objeto.
    --| Al momento de crear un título, el sistema debe solicitar los datos entre los cuales se debe
    --| encontrar el archivo del cual leerá el contenido del texto.
    --| 
    --| Utilizar:
    --|  * Clase base para título.
    --|  * Subclases para al menos 3 tipos de títulos.
    --|  * Métodos de instancia y estáticos.
    --|  * Encapsulamiento (1 caso es suficiente).
    --|  * Lectura asíncrona de archivos.
    --|  * Rescate: Escribir objeto bd en un archivo para hacerlo persistente,
    --|             leyéndolo cada vez que se inicie el sistema.
*/

console.log("\n -*- Ejercicio 2.1: Programación Orientada a Objectos.\n");

import * as BooksModule from "./books.js";

let main_library = new BooksModule.Library();
await main_library.Initialize();

let books_database = main_library.GetDB;

/*
console.log("\n--- Contenido de la Base de Datos ---");
console.log(books_database);*/

console.log("Reading current books in Library...")
for (let book of books_database) {
    if (book instanceof BooksModule.Audiobook) {
        book.ReproduceAudio();
    }

    if (book instanceof BooksModule.PrintedBook) {
        book.OpenTextContent();
    }

    if (book instanceof BooksModule.EBook) {
        book.Open_inKindle();
    }
}

let printedBook = new BooksModule.PrintedBook("01 EXTRA Simulacra and Simulation", "Baudrillard, Jean", 1981, 164);
main_library.AddBookToLibrary(printedBook);
main_library.SaveBookAsJSON(printedBook);

let audiobook = new BooksModule.Audiobook("02 EXTRA Lolita", "Nabokov, Vladimir", 1955, "11:56");
main_library.AddBookToLibrary(audiobook);
main_library.SaveBookAsJSON(audiobook);


let ebook = new BooksModule.EBook("03 EXTRA Strategic Chess", "Mednis, Edmar", 1993, "PDF");
main_library.AddBookToLibrary(ebook);
main_library.SaveBookAsJSON(ebook);

console.log("\n Three Books added...")
for (let book of books_database) {
    if (book instanceof BooksModule.Audiobook) {
        book.ReproduceAudio();
    }

    if (book instanceof BooksModule.PrintedBook) {
        book.OpenTextContent();
    }

    if (book instanceof BooksModule.EBook) {
        book.Open_inKindle();
    }
}
