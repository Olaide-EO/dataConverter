### Explain how a browser determines what elements match a CSS selector.

This part is related to the above about [writing efficient CSS](#what-are-some-of-the-gotchas-for-writing-efficient-css). Browsers match selectors from rightmost (key selector) to left. Browsers filter out elements in the DOM according to the key selector and traverse up its parent elements to determine matches. The shorter the length of the selector chain, the faster the browser can determine if that element matches the selector.

For example with this selector `p span`, browsers firstly find all the `<span>` elements and traverse up its parent all the way up to the root to find the `<p>` element. For a particular `<span>`, as soon as it finds a `<p>`, it knows that the `<span>` matches and can stop its matching.

###### References

- https://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left
