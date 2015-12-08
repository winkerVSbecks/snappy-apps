## General Principles

- Use clear, thoughtful and appropriate names for classes.

- Only use lower-case names delimited with a hyphen, e.g.: `.page-head {}`

- Avoid abbreviated class names, e.g.: `cb`, `s-scr`, `col-120px`

[from rangle.io guidelines](https://github.com/winkerVSbecks/guidelines/blob/chore/css-html-guidelines/content/11-css-and-sass/3-naming.md)

--

The names should explain what a thing does, where it can be used and which classes does is it relate to.

--

# Namespaces

--

### `u-`

Signifies that this class is a utility class. It's not tied to any specific part of the UI and solves a very generic problem.

```css
.u-text-center { text-align: center; }
```

--

### `is-`/`has-`

Signifies that the current styling is representative of active state in a UI component.

```html
<div class="modal is-open"></div>
```

--

### `t-`

Signifies that the UI component has been themed to match the visual style of a particular section.

```css
.t-light {…}
```

--

### `js-`

Signifies that this element is accessed via JS. This selector should not have any styling associated with it.

--

### `qa-`

Signifies that the QA team is using this class to access a DOM node for E2E testing. This selector should not have any styling associated with it.

--

### `_`

Signifies that this class is a &mdash; hopefully temporary &mdash; hack. It's a warning for other members of the team to not to depend on the styling from this class as it will be removed in the future.

```css
_column-full-height {…}
```
