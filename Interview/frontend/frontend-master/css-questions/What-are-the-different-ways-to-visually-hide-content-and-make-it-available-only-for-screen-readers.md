### What are the different ways to visually hide content (and make it available only for screen readers)?

These techniques are related to accessibility (a11y).

- `width: 0; height: 0`. Make the element not take up any space on the screen at all, resulting in not showing it.
- `position: absolute; left: -99999px`. Position it outside of the screen.
- `text-indent: -9999px`. This only works on text within the `block` elements.
- Meta tags. For example by using Schema.org, RDF, and JSON-LD.
- WAI-ARIA. A W3C technical specification that specifies how to increase the accessibility of web pages.

Even if WAI-ARIA is the ideal solution, I would go with the `absolute` positioning approach, as it has the least caveats, works for most elements and it's an easy technique.

###### References

- https://www.w3.org/TR/wai-aria-1.1/
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
- http://a11yproject.com/
