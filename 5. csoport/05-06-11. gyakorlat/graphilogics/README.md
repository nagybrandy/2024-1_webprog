# Grafilogika

Népszerű logikai rejtvény a grafilogika.

> A rejtvény egy téglalap alakú négyzetrácsos hálóból áll, amelynek az egyik vízszintes és az egyik függőleges oldala mellett számok állnak, amelyek azt jelzik, hogy az adott sorban vagy oszlopban mekkora méretű sötét blokkok követik egymást. Minden beszínezett blokkot tetszőleges számú (legalább egy) üres hely választ el egymástól. A játék célja, hogy minden négyzetrácsról eldöntsük, be van-e színezve vagy nem. ([Wikipedia](https://hu.wikipedia.org/wiki/Grafilogika))

A rácsban egy cella háromféle értékű (színű) lehet:

- fehér: még nem tudjuk, hogy blokk vagy üres kerül oda
- fekete: blokk
- szürke: üres

A cellákra kattintva ez a három állapot követi egymást ciklikusan. A játék akkor ér véget, ha a megoldásban és a rácsban pontosan ugyanott vannak fekete cellák.

Készíts webes alkalmazást egy ilyen grafilogikai rejtvény megoldására!

- React + `useState`
- React + Redux
- React + `useReducer`

## React + Redux

1. Telepítsd a szükséges függőségeket (`npm install`) és elemezd a kapott keretprogramot! Ebben a stílusok és egy alap táblázatos elrendezés van megadva!
2. Tervezd meg az alkalmazás állapotterét! Egyelőre csak a játék funkciót készítsük el! Ehhez elegendő tárolni a megoldást és a játéktáblát:
   ```js
   {
     solution: [],
     table: [],
   }
   ```
3. Gondold át a lehetséges akciókat! Például:
   - `START_GAME`: megad egy megoldást valamilyen formátumban, például:
     ```js
     ["# #", " # ", "# #"];
     ```
   - `CLICK_CELL`: egy cellára kattintunk, megadjuk a cella x-y koordinátáját
4. Ezek alapján készítsd el a Redux store-odat (pl. `state/store.js`)! Itt is több lehetőség van:
   1. Natív [Redux](https://redux.js.org/) elemekkel (alacsony szint):
      - akció konstansok
      - akció generátorok
      - reducerek
      - store létrehozása és konfigurálása
   2. [Redux Toolkit](https://redux-toolkit.js.org/) használatával (közepes szint):
      - `configureStore`
      - `createAction`
      - `createReducer`
   3. [Redux Toolkit](https://redux-toolkit.js.org/) használatával (magas szint):
      - `configureStore`
      - `createSlice`
5. Próbáld ki a store-odat még React nélkül:
   - kódból beküldve akciókat és figyelve a változásokat;
   - [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) használatával.
6. Írjál szelektorokat az állapottérhez és próbáld is ki őket kódban! Például:
   - táblainformáció: bal, felső számok, a tábla celláiról tudnivaló
7. react-redux használatával kösd jelenítsd meg az adatokat a komponensekben! (`Provider`, `useSelector`)
8. react-redux használatával a felületi eseményekre reagálva küldd be a megfelelő akciókat a store-ba! (`useDispatch`)

## Kiegészítések

10. A játékfelületen legyen lehetőség ellenőrizni az eddigi rajzunkat! Egy gombra kattintva a hibás fekete és szürke cellák pirossal jelennek meg pár másodpercig.
11. Legyen egy rejtvénylista egy külön oldalon. Itt egy rejtvényt választva kerüljünk a rejtvénymegoldó oldalra. Sikeres megoldás esetén kerüljünk vissza a listaoldalra, és jelöljük mely rejtvényeket oldottuk már meg!
