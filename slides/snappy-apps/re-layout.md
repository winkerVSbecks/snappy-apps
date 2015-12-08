# Layout

The geometry of a page. Where every element is and how big it is.

--

### Re-Layout

When the changes affect document contents, structure or element position, a relayout happens.

![re-layout](img/re-layout.gif)

--

### Styles That Affect layout

|   | | | |
|:------------:|:-------------:|:-------------:|:-------------:|
| width        | font-weight   |  top          |     clear     |
| height       | overflow      |  position     | white-space   |
| padding      | left          |  font-size    | bottom        |
| margin       | font-family   |  float        | min-height    |
| display      | line-height   |  text-align   | overflow-y    |
| border-width | vertical-align|  border       | right         |

--

### Animating Layout Properties

- The time required to perform layout calculations is directly proportional to the size of the visible DOM nodes.

- Therefore, avoid animating properties that trigger re-layout.

--

### Animating Layout Properties

- Minimize DOM manipulation.

- Cache all element properties (width, position, etc.) which are to be re-used.

- Use offline element for DOM manipulations.

- Make this change as deep in the DOM tree as possible.

- Disable `:hover` animations for better scrolling performance.

--

## tldr;

Animate only absolute/fixed positioned elements if you can.
