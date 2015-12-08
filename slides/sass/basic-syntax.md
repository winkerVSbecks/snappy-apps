### Basic Sass Syntax

<iframe height='400'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/doMyVN/?height=400&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>

--

### Nesting

<pre class="side-by-side"><code>/* SCSS */
header {
  color: #1d1d1f;
  text-align: center;
  width: 100%;

  h1 {
    color: #fff;
  }
}
</code></pre>


<pre class="side-by-side"><code>/* CSS */
header {
  color: #1d1d1f;
  text-align: center;
  width: 100%;
}

header  h1 {
  color: #fff;
}
</code></pre>

--

### Variables

<pre class="side-by-side"><code>/* SCSS */
$black: #1d1d1f;
$white: #fff;
$yellow: #ffcc33;

body {
  background-color: $yellow;
}

header {
  color: $black;
  text-align: center;
  width: 100%;

  h1 {
    color: $white;
  }
}
</code></pre>


<pre class="side-by-side"><code>/* CSS */
body {
  background-color: #ffcc33;
}

header {
  color: #1d1d1f;
  text-align: center;
  width: 100%;
}

header  h1 {
  color: #fff;
}
</code></pre>

--

### Variable Scope

- Any variable defined outside of a selector is global
- Use the `default` flag to set the value of a variable if it hasn&rsquo;t already been set:

```scss
  $bg-color: red;

  …

  $bg-color: green !default;

  body {
    background-color: $bg-color;
  }
```

--

### Reference Parent Selectors With `&`

<pre class="side-by-side"><code>/* SCSS */
.my-class {

  &:hover {…}

  &.secondary-class {…}

  &--some-kind-of-name {…}

}
</code></pre>

<pre class="side-by-side"><code>/* CSS */
.my-class {…}

.my-class:hover {…}

.my-class.secondary-class {…}

.my-class--some-kind-of-name {…}
</code></pre>

--

## Colour Functions

```scss
a {
  color: red;

  &:hover {
    color: darken(red, 25%);
  }
}
```

--

## Math

```scss
article {
  width: 400px / 960px * 100%;
  padding: $base-spacing + 0.25rem;
}
```

--

## Comments

```scss
/* This comment will be visible in the compiled CSS */

// This comment will be removed from the compiled CSS
```


--

## Mixins

```scss
/* Define */
@mixin btn-generator($radius: 3px, $bg-color: green, $color: white) {
  background-color: $bg-color;
  border-radius: $radius;
  color: $color;
}
```


```scss
/* Usage */
.btn-danger {
  @include btn-generator(4px, red);
}
```

--

## @extend

<pre class="side-by-side"><code>/* SCSS */
.alert {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.alert-success {
  @extend .alert;
  border-color: green;
}

.alert-error {
  @extend .alert;
  border-color: red;
}

.alert-warning {
  @extend .alert;
  border-color: yellow;
}
</code></pre>


<pre class="side-by-side"><code>/* CSS */
.alert,
.alert-success,
.alert-error,
.alert-warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}

.alert-success {
  border-color: green;
}

.alert-error {
  border-color: red;
}

.alert-warning {
  border-color: yellow;
}
</code></pre>
