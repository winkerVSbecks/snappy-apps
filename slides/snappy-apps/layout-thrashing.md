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
