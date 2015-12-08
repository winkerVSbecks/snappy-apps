## Writing Efficient CSS

--

## This Is a Selector

```css
.main-navigation .nav-item a {…}
```

Your choice of selector matters!

--

### Selector Performance

- ID: `#id`
- Class: `.class`
- Tag: `div`
- Adjacent sibling selector: `div + p`
- Parent selector: `ul > li`
- Universal selector: `*`
- Attribute selector: `input[type="number"]`
- Pseudo-classes and pseudo-elements: `a:hover`

--

## Never Use #id
It's the most efficient, but it can be extremely non-semantic and difficult to maintain.

--

## Avoid Universal Rules

```css
* {…}
[hidden="true"] {…}
tree > [collapsed="true"] {…}
```

<small>from [MDN Writing efficient CSS](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Writing_efficient_CSS)</small>

--

## Rightmost Selector Should Generally Be a Class
The browser processes selectors from right to left. Your choice for the rightmost selector should be the fastest one.

--

## Do Not Over-Qualify Selectors
It makes the selector less efficient.

```css
/* Bad */
ul.main-navigation {…}

/* Good */
.main-navigation {…}
```

--

## Avoid Descendant Selectors

```css
/* Worst */
.main-navigation .nav-item a {…}

/* Bad */
.main-navigation > .nav-item > a {…}

/* Good */
.main-nav-item--link {…}
```

--

### Keep Selectors as Short as Possible

```css
/* Bad */
main.home div.header ul {…}

/* Good */
.primary-nav {…}
```

--

Make explicit selections rather than relying on hierarchy. This allows for the selector to be re-used, keeps your CSS DRY and prevents leaking of styles.

--

## Practical Example

```css
/* Bad */
ul.main-nav {…}
ul li nav-item {…}
ul li nav-item a {…}
```

```css
/* Good */
.main-nav {…}
.main-nav__item {…}
.main-nav__link {…}
```
