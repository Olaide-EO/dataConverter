### Can you give an example of an @media property other than screen?

Yes, there are four types of @media properties (including _screen_):

- `all` - for all media type devices
- `print` - for printers
- `speech` - for screenreaders that "reads" the page out loud
- `screen` - for computer screens, tablets, smart-phones etc.

Here is an example of `print` media type's usage:

```css
@media print {
  body {
    color: black;
  }
}
```

###### References

- https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Syntax
