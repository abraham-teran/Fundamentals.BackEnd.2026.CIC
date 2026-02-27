/********************************************************************************

    Curso: "FUNDAMENTOS DE PROGRAMACIÓN BACKEND"
    CENTRO DE INVESTIGACIÓN EN COMPUTACIÓN (CIC-IPN)

    ABRAHAM TERÁN SALCEDO
    https://www.linkedin.com/in/abraham-teran/

*********************************************************************************/

import fs from 'node:fs';
import path from 'node:path';

export class Book {

    constructor(title_init, author_init, year_init, type_init) {
        this.type = type_init;

        this.title = title_init;
        this.author = author_init;
        this.year = year_init;
    }

    static isValidYear(year) {
        const currentYear = new Date().getFullYear();
        return typeof year === 'number' && year > 0 && year <= currentYear;
    }
}

export class Audiobook extends Book {
    #audio_length

    constructor(title_init, author_init, year_init, audio_length_init) {
        super(title_init, author_init, year_init, "audiobook");
        this.#audio_length = audio_length_init;
    }

    get GetAudioLength() {
        return this.#audio_length;
    }

    set SetAudioLength (new_audio_length) {
        this.#audio_length = new_audio_length;
    }

    ReproduceAudio() {
        console.log("Reproducing Audiobook:", this.title, " ... ", this.author);
    }
}

export class PrintedBook extends Book {
    #pages_number;

    constructor(title_init, author_init, year_init, pages_init) {
        super(title_init, author_init, year_init, "printed");
        this.#pages_number = pages_init;
    }

    get GetPagesNumber() {
        return this.#pages_number;
    }

    set SetPagesNumber(new_pages_number) {
        this.#pages_number = new_pages_number;
    }

    OpenTextContent() {
        console.log("Opening printed book: ", this.title, " ... ", this.author);
    }
}

export class EBook extends Book {
    #format

    constructor(title_init, author_init, year_init, format_init) {
        super(title_init, author_init, year_init, "ebook");
        this.#format = format_init;
    }

    get GetFormat() {
        return this.#format;
    }

    set SetFormat(new_ebook_format) {
        this.#format = new_ebook_format;
    }

    Open_inKindle() {
        console.log("Opening ebook in Kobo: ", this.title, " ... ", this.author);
    }
}

export class Library {
    #db
    #directory

    constructor() {
        this.#db = [];
        this.#directory = "./json_data"
    }

    get GetDB() {
        return this.#db
    }

    AddBookToLibrary(bookInstance) {
        this.#db.push(bookInstance);
    }

    async Initialize() {
        await this.ReadJSONData();
    }

    async ReadJSONData () {
        const files = await fs.promises.readdir(this.#directory);
        
        for (const file of files) {
            if (path.extname(file) === '.json') {
                const filePath = path.join(this.#directory, file);
                const rawData = await fs.promises.readFile(filePath, 'utf-8');
                const bookData = JSON.parse(rawData);

                let bookInstance;
                if (bookData.type === 'ebook') {
                    bookInstance = new EBook(bookData.title, bookData.author, bookData.year, bookData.details);
                }
                
                if (bookData.type === 'printed') {
                    bookInstance = new PrintedBook(bookData.title, bookData.author, bookData.year, bookData.details);
                }
                
                if (bookData.type === 'audiobook') {
                    bookInstance = new Audiobook(bookData.title, bookData.author, bookData.year, bookData.details);
                }

                this.#db.push(bookInstance);
            }
        }
    }

    async SaveBookAsJSON(bookInstance) {
        const bookObj = {
            type: bookInstance.type,
            title: bookInstance.title,
            author: bookInstance.author,
            year: bookInstance.year,

            details: bookInstance.GetAudioLength || bookInstance.GetPagesNumber || bookInstance.GetFormat
        };

        const jsonContent = JSON.stringify(bookObj);

        const fileName = `${bookInstance.title.replace(/\s+/g, '_').toLowerCase()}.json`;
        const filePath = path.join(this.#directory, fileName);

        fs.writeFile(filePath, jsonContent, function(err) {
            if (err) {
                console.log(err);
            }
        });
    }
}
