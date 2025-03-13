// 2. INTERFEJSY I TYPY
// Interfejsy pozwalają definiować strukturę obiektów

// Definicja interfejsu
interface Osoba {
    imie: string;
    wiek: number;
    email?: string;  // ? oznacza pole opcjonalne
}

// Użycie interfejsu
const uzytkownik: Osoba = {
    imie: "Kacper",
    wiek: 25
};

// Type alias - alternatywny sposób definiowania typów
type StatusZamowienia = "nowe" | "w_realizacji" | "wyslane" | "dostarczone";

// Użycie type alias
let status: StatusZamowienia = "nowe";
// status = "anulowane"; // To wywoła błąd, bo "anulowane" nie jest dozwolonym statusem

// Rozszerzanie interfejsów
interface Pracownik extends Osoba {
    stanowisko: string;
    wyplata: number;
}

const pracownik: Pracownik = {
    imie: "Anna",
    wiek: 30,
    stanowisko: "Programista",
    wyplata: 5000
};
