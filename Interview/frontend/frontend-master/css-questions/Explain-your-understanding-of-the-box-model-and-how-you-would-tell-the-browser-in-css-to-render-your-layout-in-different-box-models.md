### Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.

The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model. Each box has a content area (e.g. text, an image, etc.) and optional surrounding `padding`, `border`, and `margin` areas.

The CSS box model is responsible for calculating:

- How much space a block element takes up.
- Whether or not borders and/or margins overlap, or collapse.
- A box's dimensions.

The box model has the following rules:

- The dimensions of a block element are calculated by `width`, `height`, `padding`, `border`s, and `margin`s.
- If no `height` is specified, a block element will be as high as the content it contains, plus `padding` (unless there are floats, for which see below).
- If no `width` is specified, a non-floated block element will expand to fit the width of its parent minus `padding`.
- The `height` of an element is calculated by the content's `height`.
- The `width` of an element is calculated by the content's `width`.
- By default, `padding`s and `border`s are not part of the `width` and `height` of an element.

###### References

- https://www.smashingmagazine.com/2010/06/the-principles-of-cross-browser-css-coding/#understand-the-css-box-model

