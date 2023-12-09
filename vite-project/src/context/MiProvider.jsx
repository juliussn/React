import { createContext, useState } from "react";

export const Contexto = createContext()
export default function MiProvider({ children }) {
    const [jugadores, setJugadores] = useState([
        {
            id: 1,
            nombre: "Manuel Roffo",
            posicion: "Arquero",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/08/54-Mediaday-Futbol-Macro-07032023-1-533x800.jpg",
            edad: 23,
            nacionalidad: "Argentino",
            dorsal: 28 ,
        },
        {
            id: 2,
            nombre: "Juan Franco",
            posicion: "Lateral derecho",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/08/14-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: 31,
            nacionalidad: "Paraguay",
            dorsal:  2,
        },
        {
            id: 3,
            nombre: "Ezequiel Parnisari",
            posicion: "central",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/08/44-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: 33,
            nacionalidad: "Argentina",
            dorsal: 24 ,
        },
        {
            id: 4,
            nombre: "Fernando Alarcon",
            posicion: "central",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/08/12-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: "29",
            nacionalidad: "Argentina",
            dorsal: 6,
        },
        {
            id: 5,
            nombre: "Lucas Rodriguez",
            posicion: "Lateral izquierdo",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/08/WhatsApp_Image_2023-08-04_at_09.45.40NB-removebg-preview-1.png",
            edad: 29,
            nacionalidad: "Argentina",
            dorsal: 15,
        },
        {
            id: 6,
            nombre: "Gaston Lodico",
            posicion: "Mediocampista",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/09/6-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: 24,
            nacionalidad: "Argentina",
            dorsal: 19 ,
        },
        {
            id: 7,
            nombre: "Nicolas Linares",
            posicion: "mediocampista",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/09/24-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: 27,
            nacionalidad: "Argentina",
            dorsal: 14 ,
        },
        {
            id: 8,
            nombre: "Brahian Cuello",
            posicion: "mediocampista izquierdo",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2023/02/32-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: 25,
            nacionalidad: "Argentino",
            dorsal:  20,
        },
        {
            id: 9,
            nombre: "Gabriel Graciani",
            posicion: "mediocampista derecho",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/09/48-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: 29,
            nacionalidad: "Argentina",
            dorsal: 8,
        },
        {
            id: 10,
            nombre: "Gregorio Rodriguez",
            posicion: "delantero",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/09/52-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: 23,
            nacionalidad: "Argentina",
            dorsal: 7,
        },
        {
            id: 11,
            nombre: "Adrian Martinez",
            posicion: "delantero centro",
            imagen: "https://institutoacc.com.ar/wp-content/uploads/2022/09/58-Mediaday-Futbol-Macro-07032023-533x800.jpg",
            edad: 31,
            nacionalidad: "Argentina",
            dorsal: 9,
        },
    ])
    const [busqueda, setBusqueda] = useState("");

    return (<>
        <Contexto.Provider value={{ jugadores, setJugadores, busqueda, setBusqueda }}>
            {children}
        </Contexto.Provider>
        </>)
}