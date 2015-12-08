## Sass Best Practices

--

### Numbers

- Use variables for all:
  + common numbers
  + numbers used more than once

- Define a `$base-spacing`
  + All padding and margins should be set as a multiple of `$base-spacing`
- Same for `$base-radius`

--

### Base Spacing

![Metrics and Keylines](img/metrics-keylines.png)

--

### Use Variables

- Only use variables for `z-indexes`.
- Only use variables or modified variables for colours e.g. lighten($black, 5%).

--

### %Placeholder

- Silent classes that don't appear in our CSS output unless we `@extend` them.
- Only use `@extend` with `%placeholder` selectors.

<pre class="side-by-side"><code>/* SCSS */
%alert {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.alert-success {
  @extend %alert;
  border-color: green;
}

.alert-error {
  @extend %alert;
  border-color: red;
}
</code></pre>


<pre class="side-by-side"><code>/* CSS */
.alert-success, .alert-error {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.alert-success {
  border-color: green;
}

.alert-error {
  border-color: red;
}
</code></pre>

--

### Limit Nesting to a Maximum of 3 Levels

<pre><code>/* Bad */
.one {
  .two {
    .three {
      .four {
        /* Stop, this is not Inception */
      }
    }
  }
}
</code></pre>

--

### Media Queries

- Nest your media queries.
- This keeps all the rules related to a component in one place.
- Easier to read and reduces errors.
