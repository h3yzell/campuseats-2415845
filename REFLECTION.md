# Week 1 reflection
1. What is the difference between building a UI imperatively (plain DOM code) and
declaratively (React)?

Imperative means we manually tell the browser what to do step by step. On the other hand, declarative means we just describe how the UI should look based on the data, and React handles the updates for us.

2. Why must a component name start with a capital letter?

Because React uses capital letters to differentiate between custom components and normal HTML elements.

3. What does a fragment <>...</> do, and why not just use a <div>?

A fragment allows us to group multiple elements without adding an extra element to the DOM. It doesn't create an unnecessary wrapper that might affect the layout or styling.

4. Name one benefit of splitting the UI into small components.

It makes our code easier to manage and reuse. Instead of writing the same code multiple times, we can create a component once and use it wherever needed.

# Week 2 reflection