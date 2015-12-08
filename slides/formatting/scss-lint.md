### SCSS-Lint

github.com/brigade/scss-lint

```bash
test.scss:2 [W] Prefer single quoted strings
test.scss:2 [W] Line should be indented 0 spaces, but was indented 1 space
test.scss:5 [W] Prefer single quoted strings
test.scss:6 [W] URLs should be enclosed in quotes
```

--

### Rangle.io Ruleset

[github.com/rangle/skeletor/blob/master/scss-lint.yml](https://github.com/rangle/skeletor/blob/master/scss-lint.yml)

[Linters Documentation](https://github.com/brigade/scss-lint/blob/master/lib/scss_lint/linter/README.md)

--

### Practical Example

```scss
// Grid layout
//
// This creates a single row of full-height,
// non-wrapping columns that can be browsed
// horizontally within their parent.
//
// Example HTML:
//
// <div class="grid">
//   <div class="grid__cell cell--3"></div>
//   <div class="grid__cell cell--3"></div>
//   <div class="grid__cell cell--3"></div>
// </div>
// –––––––––––––––––––––––––––––––––––––––––––––––––– */

// Grid container
.grid {
  font-size: 0;
  height: 100%;
  white-space: nowrap;
}

// Grid Cells
.grid__cell {
  border: 2px solid #333;
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  height: 100%;
  overflow: hidden;
  padding: 0 10px;
  position: relative;
  vertical-align: top;
  white-space: normal;
}

// Cell States
.cell.is-animating {
  background-color: #fffdec;
}

// Cell Dimensions
.cell--1 { width: 10%; }
.cell--2 { width: 20%; }
.cell--3 { width: 30%; }
.cell--4 { width: 40%; }
.cell--5 { width: 50%; }

// Cell Modifiers
.cell--detail,
.cell--important {
  border-width: 4px;
}
```
