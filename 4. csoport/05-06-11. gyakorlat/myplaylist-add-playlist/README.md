# Myplaylist app: playlist hozzáadása

Ebben a feladatban egy új playlist-et kell létrehozni. A keretprogramban adott egy felépítés: az egyetlen oldalért az `App` komponens felel, ebben jelenik meg az űrlapot tartalmazó `PlaylistForm` és a playlist-eket listázó `PlaylistList`.

1. Elemezd az alkalmazás felépítését!
2. Oldd meg, hogy az űrlap beviteli mezője szerkeszthető legyen! Oldd meg "controlled" módon!
3. Az űrlap elküldését akadályozd meg és írd ki a konzolra az új playlist nevét!
4. Végezz egyszerű validációt: ha az érték üres, akkor jeleníts meg hibaüzenetet! Ehhez vezess be egy `error` állapotváltozót és ennek értékét állítsd át. Az értéktől függően jelenjen meg hibaüzenet, vagy legyen piros a beviteli mező kerete! Ezért az `error` és a `negative` stílusosztály felel.
5. Ha nincs hiba, akkor add át a nevet az `App` komponensnek, aki adja hozzá azt a playlist-ekhez!
