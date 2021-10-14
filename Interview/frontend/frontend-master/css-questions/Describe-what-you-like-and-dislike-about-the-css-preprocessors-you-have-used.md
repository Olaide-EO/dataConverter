### Describe what you like and dislike about the CSS preprocessors you have used.

**Likes:**

- Mostly the advantages mentioned above.
- Less is written in JavaScript, which plays well with Node.

**Dislikes:**

- I use Sass via `node-sass`, which is a binding for LibSass written in C++. I have to frequently recompile it when switching between node versions.
- In Less, variable names are prefixed with `@`, which can be confused with native CSS keywords like `@media`, `@import` and `@font-face` rule.
