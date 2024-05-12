# Ábra

Készíts React komponenst az alábbi HTML kód köré!

```html
<figure>
  <img
    src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
    alt="Elephant at sunset"
  />
  <figcaption>Elephant at sunset</figcaption>
</figure>
```

1. Használjuk így:

   ```jsx
   <Figure
     src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/elephant-660-480.jpg"
     caption="Elephant at sunset"
   />
   ```

2. Alkalmazd globálisan a következő stílusokat!

   ```css
   figure {
     border: thin #c0c0c0 solid;
     display: flex;
     flex-flow: column;
     padding: 5px;
     max-width: 220px;
     margin: auto;
   }

   img {
     max-width: 220px;
     max-height: 150px;
   }

   figcaption {
     background-color: #222;
     color: #fff;
     font: italic smaller sans-serif;
     padding: 3px;
     text-align: center;
   }
   ```
