### Describe pseudo-elements and discuss what they are used for.

A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). They can be used for decoration (`:first-line`, `:first-letter`) or adding elements to the markup (combined with `content: ...`) without having to modify the markup (`:before`, `:after`).

- `:first-line` and `:first-letter` can be used to decorate text.
- Used in the `.clearfix` hack as shown above to add a zero-space element with `clear: both`.
- Triangular arrows in tooltips use `:before` and `:after`. Encourages separation of concerns because the triangle is considered part of styling and not really the DOM.

###### References

- https://css-tricks.com/almanac/selectors/a/after-and-before/
