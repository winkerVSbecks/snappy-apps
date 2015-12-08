<!-- .slide: data-background="#ffcc33" class="th-yellow" -->

# Layout

--

### The geometry of a page. Where every element is and how big it is.

![layout](img/re-layout.gif)

--

### Styles That Affect layout

When the changes affect document contents, structure or element position, a relayout happens.

[http://csstriggers.com](http://csstriggers.com)

--

## Layout Thrashing

When JavaScript reads/writes to the DOM multiple times causing re-layouts.

--

### Layout Thrashing

```js
// Read
var h1 = element1.clientHeight;

// Write (invalidates layout)
element1.style.height = (h1 * 2) + 'px';

// Read (triggers layout)
var h2 = element2.clientHeight;

// Write (invalidates layout)
element2.style.height = (h2 * 2) + 'px';

// Read (triggers layout)
var h3 = element3.clientHeight;

// Write (invalidates layout)
element3.style.height = (h3 * 2) + 'px';
```

<small>[from wilsonpage.co.uk/preventing-layout-thrashing](http://wilsonpage.co.uk/preventing-layout-thrashing)</small>

--

### Prevent Layout Thrashing

```js
// Read
var h1 = element1.clientHeight;
var h2 = element2.clientHeight;
var h3 = element3.clientHeight;

// Write (invalidates layout)
element1.style.height = (h1 * 2) + 'px';
element2.style.height = (h2 * 2) + 'px';
element3.style.height = (h3 * 2) + 'px';

// Document reflows at end of frame
```

<small>[from wilsonpage.co.uk/preventing-layout-thrashing](http://wilsonpage.co.uk/preventing-layout-thrashing)</small>

--

### Prevent Layout Thrashing&hellip;
### In the Real World


```js
// Read
var h1 = element1.clientHeight;

// Write
requestAnimationFrame(function() {
  element1.style.height = (h1 * 2) + 'px';
});

// Read
var h2 = element2.clientHeight;

// Write
requestAnimationFrame(function() {
  element2.style.height = (h2 * 2) + 'px';
});
```

<small>[from wilsonpage.co.uk/preventing-layout-thrashing](http://wilsonpage.co.uk/preventing-layout-thrashing)</small>

--

### Animating Layout Properties

- The time required to perform layout calculations is directly proportional to the size of the visible DOM nodes.

- Therefore, avoid animating properties that trigger re-layout.

--

### Animating Layout Properties

- Cache all element properties (width, position, etc.) which are to be re-used.

- Use offline element for DOM manipulations.

- Batch your DOM manipulations.

- Make this change as deep in the DOM tree as possible.

- Minimize DOM manipulation.

--

## tldr;

Animate only absolute/fixed positioned elements if you can. Avoid layout thrashing.
