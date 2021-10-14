### Have you ever used a grid system, and if so, what do you prefer?

Before Flex became popular (around 2014), the `float`-based grid system was the most reliable because it still has the most browser support among the alternative existing systems (flex, grid). Bootstrap was using the `float` approach until Bootstrap 4 which switched to the `flex`-based approach. As of writing (2020), `flex` is the recommended approach for building grid systems and has [decent browser support](https://caniuse.com/#search=flex).

For the adventurous, they can look into [CSS Grid Layout](https://css-tricks.com/snippets/css/complete-guide-grid/), which uses the shiny new `grid` property; it is even better than `flex` for building grid layouts and will be the de facto way to do so in the future.
