// Reto 1
// a) Descripción del reto
//Teniendo una lista de objetos en distintos idiomas, idiomas usados.
//Elabora un traductor e identificador de idioma con los datos dados, de manera sencilla.
//[ { idioma: "Español", texto: "Bienvenido al curso de React Native en PachaQtec", id_idioma: 1, }, {
//idioma: "Ingles", texto: "Welcome to the React Native course at PachaQtec", id_idioma: 2, }, { idioma:
//"Francés", texto: "Bienvenue dans le cours React Native chez PachaQtec", id_idioma: 3, }, { idioma:
//"Italiano", texto: "Benvenuti al corso React Native presso PachaQtec", id_idioma: 4, }, { idioma:
//"Portugués", texto: "Bem-vindo ao curso React Native na PachaQtec", id_idioma: 5, } ]


const dataList = [ 
    {   language: "Español",
        text: "Bienvenido al curso de React Native en PachaQtec", 
        id: 1 
    },
    {
        language: "Ingles",
        text: "Welcome to the React Native course at PachaQtec",
        id: 2
    },
    {   language: "Francés",
        text: "Bienvenue dans le cours React Native chez PachaQtec",
        id: 3
    },
    {   language: "Italiano", 
        text: "Benvenuti al corso React Native presso PachaQtec", 
        id: 4
    },
    {   language: "Portugués", 
        text: "Bem-vindo ao curso React Native na PachaQtec",
        id: 5
    }
];

const traslate = (data, text, language) => {

}

const identifyLanguage = (data, text) => {
    //return text.includes(data.text);
    
}

identifyLanguage(dataList, 'Welcome to the React Native course at PachaQtec')

dataList.find(identifyLanguage);