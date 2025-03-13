// 1. PODSTAWY TYPESCRIPT


// Podstawowe typy danych
let imie: string = "Kacper";              // typ string
let wiek: number = 25;                     // typ number (liczby całkowite i zmiennoprzecinkowe)
let czyAktywny: boolean = true;           // typ boolean (true/false)
let nieznane: any = "cokolwiek";          // typ any - unikaj używania!

// Tablice
let liczby: number[] = [1, 2, 3, 4, 5];   // tablica liczb
let imiona: string[] = ["Jan", "Anna"];    // tablica stringów

// Proste funkcje
function dodaj(a: number, b: number): number {
    return a + b;
}

// Wywołanie funkcji
console.log(dodaj(5, 3)); // wyświetli: 8

// Opcjonalne parametry (znak ?)
function powitanie(imie: string, wiek?: number): string {
    if (wiek) {
        return `Cześć ${imie}, masz ${wiek} lat!`;
    }
    return `Cześć ${imie}!`;
}
