// 4. TYPY GENERYCZNE
// Generyki pozwalają na tworzenie wielokrotnego użytku komponentów

// Prosta funkcja generyczna
function pierwszyElement<T>(tablica: T[]): T | undefined {
    return tablica[0];
}

// Użycie funkcji generycznej
const liczby = [1, 2, 3];
const pierwszy = pierwszyElement<number>(liczby); // typ: number

// Interfejs generyczny
interface Kontener<T> {
    wartosc: T;
    data: Date;
}

// Użycie interfejsu generycznego
const kontenerLiczbowy: Kontener<number> = {
    wartosc: 42,
    data: new Date()
};

// Klasa generyczna
class KolejkaFIFO<T> {
    private dane: T[] = [];

    dodaj(element: T): void {
        this.dane.push(element);
    }

    pobierz(): T | undefined {
        return this.dane.shift();
    }

    rozmiar(): number {
        return this.dane.length;
    }
}

// Użycie klasy generycznej
const kolejkaStringow = new KolejkaFIFO<string>();
kolejkaStringow.dodaj("pierwszy");
kolejkaStringow.dodaj("drugi");
