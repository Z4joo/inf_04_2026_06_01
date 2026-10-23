
using System;

namespace ConsoleApp1
{
    internal class Program
    {
        static Random r = new Random();


        /*
        nazwa funkcji: GenerujHaslo
        opis funkcji: Losuje 12 znakow, skladajacych sie z malych i wielkich liter, polskich znakow, cyfr oraz znakow specjalnych. Nastepnie miesza ich kolejnosc i zwraca gotowe haslo.
        parametry: brak
        zwracany typ i opis: string - wygenerowane 12-znakowe haslo
        autor: 00000000000
        */

        static string GenerujHaslo()
        {
            string haslo = "";
            string male = "abcdefghijklmnopqrstuvwxyz";
            string duze = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            string polskie = "ąęłńóśżźĄĘŁŃÓŚŻŹ";
            string cyfry = "0123456789";
            string znaki = "!@#$%^&*()_+";

            for (int i = 0; i < 3; i++)
                haslo += male[r.Next(male.Length)];

            for (int i = 0; i < 3; i++)
                haslo += duze[r.Next(duze.Length)];

            for (int i = 0; i < 2; i++)
                haslo += polskie[r.Next(polskie.Length)];

            for (int i = 0; i < 2; i++)
                haslo += cyfry[r.Next(cyfry.Length)];

            for (int i = 0; i < 2; i++)
                haslo += znaki[r.Next(znaki.Length)];

            char[] tablica = haslo.ToCharArray();

            for (int i = 0; i < tablica.Length; i++)
            {
                int j = r.Next(tablica.Length);

                char temp = tablica[i];
                tablica[i] = tablica[j];
                tablica[j] = temp;
            }

            return new string(tablica);
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Wygenerowane hasla:");

            for (int i = 0; i < 5; i++)
                Console.WriteLine(GenerujHaslo());

            Console.ReadKey();
        }
    }
}
