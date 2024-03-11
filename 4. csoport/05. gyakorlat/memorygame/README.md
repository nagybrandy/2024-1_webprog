# Memorygame

Hozz létre egy memóriajátékot!

Az állapotkezeléshez használd a React Context eszközt! Az _api_ mappában adott egy `getImages(n)` függvény, mellyel n darab macskás képet lehet lekérni a _thecatapi.com_ API-ról, használd ezt a függvényt, vizsgáld meg a kapott adatszerkezetet! A _view_ mappában előre el vannak készítve a React komponensek, csak az állapotkezelés hiányzik belőlük. Hozz létre `GameProgressContext` és `PairNumberContext` context objektumokat, és 1-1 React komponenst mely kezeli őket! Az egyes konstansokat cseréld le, hogy az alábbi logikát valósítsák meg:

- `PairNumberContext`:
  - pairNumber - hány kártyapár van a játékban
  - setPairNumber - előbbi állapotmező módosítására függvény
  - reset - előbbi állapotmező értékének törlése
- `GameProgressContext`:
  - catImages - tömb, az egyes kártyák képei összekeverve, ha n db párral játszunk, akkor 2\*n elemű a tömb. Keveréshez használható a `shuffle` függvény a _lodash_ könyvtárból
  - foundIds - a megtalált párok azonosítóit tartalmazó tömb
  - flip - függvény mellyel kártya felfordítható
  - isFlipped - függvény mely visszaadja, hogy adott kártya fel van-e fordítva

Tároljuk a játékállást _localStorage_-ban, így a böngészőablak bezárása, újranyitása után megmarad az állapot! Ehhez hozzunk létre egy `useStoredState` custom React hook-ot! Paraméterül vár egy nevet, amilyen kulccsal tároljuk az értéket _localStorage_-ban, és az alapértelmezett értéket! A hook töltse be a tárolt értéket _localStorage_-ból, ha van, és minden állapotváltozáskor mentse az új értéket! `pairNumber`, `catImages`, `foundIds` állapotváltozók esetén használjuk ezt a hook-ot a useState helyett!
