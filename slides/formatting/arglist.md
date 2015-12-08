### Lists

```scss
$margin: 10px 15px 0 0;
$colors-list: #111, #222, #333, #444, #555;
```

--

### List Functions

- length
- nth
- set-nth
- join
- append
- zip
- index
- list-separator

--

### Maps

```scss
$my-map: (
  key1: value1,
  key2: value2,
  key3: value3
);
```

--

### Map Functions

- map-get
- map-merge
- map-remove
- map-keys
- map-values
- map-has-key
- keywords

--

### Mixins With Arglist

- Adding `...` at the end of a map or list variable converts it to an `arglist`

- For mixins that accept multiple arguments you can pass in a list or a map as an `arglist` instead.

- It is recommended that you do this for mixins that accept more than 3 arguments.

--

```scss
// The mixin
@mixin myMixin($fontSize, $bg, $color) {
  background: $bg;
  color: $color;
  font-size: $fontSize;
}

// The arguments as a map
$params: (
  bg       : #ffcc00,
  color    : 12px,
  fontSize : url('path/to/my/image.png')
);

// Usage
.my-class {
  @include myMixin($params...);
}
```

--

<iframe height='600'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/PqzMWa/?height=600&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>
