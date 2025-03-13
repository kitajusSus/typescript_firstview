// 5. ZAAWANSOWANE KONCEPCJE

// Typy narzędziowe (Utility Types)
interface Produkt {
    id: number;
    nazwa: string;
    cena: number;
    dostepny: boolean;
}

// Partial - wszystkie pola stają się opcjonalne
type CzesciowyProdukt = Partial<Produkt>;

// Pick - wybiera tylko określone pola
type PodstawoweDaneProduktu = Pick<Produkt, 'nazwa' | 'cena'>;

// Omit - pomija określone pola
type ProduktBezId = Omit<Produkt, 'id'>;

// Dekoratory (eksperymentalne - wymaga odpowiedniej konfiguracji)
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`Wywołanie metody ${propertyKey}`);
        return originalMethod.apply(this, args);
    };
}

class Przykład {
    @logMethod
    metodaTestowa() {
        return "Test";
    }
}

// Zaawansowane typy warunkowe
type JestStringiem<T> = T extends string ? true : false;
type Wynik = JestStringiem<"test">; // true
type Wynik2 = JestStringiem<42>;    // false

// Mapowane typy
type Tylko<T, U> = {
    [P in keyof T]: T[P] extends U ? T[P] : never;
};

// Użycie typu mapowanego
interface Osoba {
    imie: string;
    wiek: number;
    email: string;
}

type TylkoStringi = Tylko<Osoba, string>;
// Rezultat: { imie: string; email: string; wiek: never; }
