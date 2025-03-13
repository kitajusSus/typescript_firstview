// 3. KLASY I DZIEDZICZENIE
// TypeScript wspiera pełne programowanie obiektowe

class Zwierze {
    // Modyfikatory dostępu: public, private, protected
    private imie: string;
    protected gatunek: string;

    constructor(imie: string, gatunek: string) {
        this.imie = imie;
        this.gatunek = gatunek;
    }

    // Metoda publiczna
    public przedstawSie(): void {
        console.log(`Jestem ${this.imie}, należę do gatunku ${this.gatunek}`);
    }
}

// Dziedziczenie
class Kot extends Zwierze {
    private kolor: string;

    constructor(imie: string, kolor: string) {
        super(imie, "kot"); // Wywołanie konstruktora klasy bazowej
        this.kolor = kolor;
    }

    // Nadpisywanie metody
    public przedstawSie(): void {
        console.log(`Miau! Jestem ${this.kolor} kotem`);
    }
}

// Tworzenie instancji
const mruczek = new Kot("Mruczek", "czarny");
mruczek.przedstawSie();
