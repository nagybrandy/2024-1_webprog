# Tic-tac-toe

Készíts egy kétszemélyes tic-tac-toe játékot, ahol a két személy két különböző böngészőablakban játszik. A kliensek összekapcsolása Websockettal történjen.

## Előkészületek

A feladatban a Websocket szerver adott, egész pontosan Socket.io-t használunk a szerveren, így a kliensnek is a socket-io-client-et kell használnia. Telepítsük a szerver és a kliens függőségeit:

```sh
cd tictactoe-server
npm install
npm start
```

```sh
cd tictactoe-client
npm install
npm start
```

## Kliens által küldhető üzenetek

- `create`: szoba létrehozása.
  - Paraméterek:
    - szoba azonosítója
- `join`: szobához való csatlakozás.
  - Paraméterek:
    - szoba azonosítója
  - Események: `opponent_joined`
- `reqTurn`: aktuális lépés felküldése.
  - Paraméterek
    - pozíció, érték (X/O), szoba azonosítója hármast tartalmazó JSON sorosított objektum
      ```json
      { "index": 2, "value": "X", "room": "room1" }
      ```
  - Események: `playerTurn`
- `reqRestart`: játék újraindítása.
  - Paraméterek
    - szoba azonosítója
  - Események: `restart`

## Szervertől kapott üzenetek

- `opponent_joined`: a másik játékos csatlakozásakor hívódik meg.
  - Adatok: -
- `playerTurn`: a másik játékos lépése után hívódik meg.
  - Adatok: a `reqTurn` kérésben elküldött JSON szöveg
- `restart`: a másik játékos által kezdeményezett új játék indításánál hívódik meg.
  - Adatok: -

## Lépések

1. **Szoba létrehozása**: az alkalmazás indulásakor, ha a `paramsRoom` üres, akkor
   - generálj egy új szobanevet a `random()` függvény segítségével,
   - küldd el a szervernek a `create` üzenetben,
   - állítsd be a `room` állapotváltozót, és
   - a `myTurn` értékét igazra!
2. **Csatlakozás szobához**: a "Share" gombot megnyomva megjeleníthető a csatlakozási link. Ezt egy másik böngészőablakba másolva elindíthatjuk a másik "játékost". Ugyancsak az alkalmazás indulásakor, ha a `paramsRoom` nem üres (linkből kiolvasva), akkor
   - csatlakozz a játékhoz a szerveren a `join` üzenettel,
   - állítsd be a jeledet `O`-ra az `xo` állapotváltozóban,
   - állítsd be a `room` állapotváltozót, és
   - a `myTurn` értékét hamisra!
3. **Játék kezdése**: ha a másik játékos is csatalkozott, akkor a szervertől mindkét kliens kap egy `opponent_joined` üzenetet.
   - Iratkozzunk fel erre, és
   - állítsuk be a `hasOpponent` állapotváltozót igazra!
4. **Lépés**: minden táblázatra kattintásnál a `sendTurn` eseménykezelő hívódik meg. Ha érvényes a lépés, akkor
   - küldjünk egy `reqTurn` üzenetet a szervernek megadva, melyik szobában, hova, mit raktunk;
   - a szerver válaszként küld egy `playerTurn` üzenetet, amire iratkozzunk fel, és a paraméterként érkező JSON szöveget állítsuk be a `turnData` állapotváltozó értékeként!
5. **Újrakezdés**: a játék többi eleme elő van készítve a keretprogramban. A játék végeztével a "Restart" gombra kattintva
   - küldjünk egy `reqRestart` üzenetet a szoba azonosítójával;
   - a szerver válaszként küld egy `restart` üzenetet, amire iratkozzunk fel, és hívjuk meg az előkészített `restart()` függvényt!
