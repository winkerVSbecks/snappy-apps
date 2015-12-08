### Functions

```scss
@function my-func($some-number, $another-number){
  @return $some-number + $another-number
}
```

--

### Dynamic Grid Classes

```scss
@function column-name($i) {
  $col-names: (one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve);
  @return nth($col-names, $i);
}

@for $i from 1 through 12 {

  &.#{column-name($i)} {
    …
  }
}
```

--

### Result

```css
.one {…}
.two {…}
.three {…}
…
```
