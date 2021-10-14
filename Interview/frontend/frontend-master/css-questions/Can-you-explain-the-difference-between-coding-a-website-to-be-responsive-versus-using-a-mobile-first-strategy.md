### Can you explain the difference between coding a website to be responsive versus using a mobile-first strategy?

Note that these two 2 approaches are not exclusive.

Making a website responsive means the some elements will respond by adapting its size or other functionality according to the device's screen size, typically the viewport width, through CSS media queries, for example, making the font size smaller on smaller devices.

```css
@media (min-width: 601px) {
  .my-class {
    font-size: 24px;
  }
}

@media (max-width: 600px) {
  .my-class {
    font-size: 12px;
  }
}
```

A mobile-first strategy is also responsive, however it agrees we should default and define all the styles for mobile devices, and only add specific responsive rules to other devices later. Following the previous example:

```css
.my-class {
  font-size: 12px;
}

@media (min-width: 600px) {
  .my-class {
    font-size: 24px;
  }
}
```

A mobile-first strategy has 2 main advantages:

- It's more performant on mobile devices, since all the rules applied for them don't have to be validated against any media queries.
- It forces to write cleaner code in respect to responsive CSS rules.
