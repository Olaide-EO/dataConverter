### Are you familiar with styling SVG?

Yes, there are several ways to color shapes (including specifying attributes on the object) using inline CSS, an embedded CSS section, or an external CSS file. Most SVG you'll find around the web use inline CSS, but there are advantages and disadvantages associated with each type.

Basic coloring can be done by setting two attributes on the node: `fill` and `stroke`. `fill` sets the color inside the object and `stroke` sets the color of the line drawn around the object. You can use the same CSS color naming schemes that you use in HTML, whether that's color names (that is `red`), RGB values (that is `rgb(255,0,0)`), Hex values, RGBA values, etc.

```html
<rect
  x="10"
  y="10"
  width="100"
  height="100"
  stroke="blue"
  fill="purple"
  fill-opacity="0.5"
  stroke-opacity="0.8"
/>
```

The above `fill="purple"` is an example of a _presentational attribute_. Interestingly, and unlike inline styles like `style="fill: purple"` which also happens to be an attribute, presentational attributes can be [overriden by CSS](https://css-tricks.com/presentation-attributes-vs-inline-styles/) styles defined in a stylesheet. So, if you did something like `svg { fill: blue; }` it would override the purple fill we've defined.

###### References

- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Fills_and_Strokes
