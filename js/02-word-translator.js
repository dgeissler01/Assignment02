let langCode = window.prompt('Please select a language using a language code. ex: \"en\", \"es\", \"fr\", or \"de\"')

if (langCode === "en") {
    window.document.write("Hello World");
} else if (langCode === "es") {
    window.document.write("Hello World translated in Espanol is: Hola Mundo");
} else if (langCode === "fr") {
    window.document.write("Hello World translated in French is: Bonjour le monde");
} else if (langCode === "de") {
    window.document.write("Hello World translated in Deutche is: Hallo Welt");
} else {window.document.write(`Sorry, language code ${langCode} is unavailable. We will default to English. Hello World`);
}