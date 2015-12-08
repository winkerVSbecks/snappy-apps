# Media Queries

--

### Nested Media Queries

```scss
.sidebar {
  float: left;
  width: 33.33%;

  @media (min-width:400px) {
    width: 25%;
  }
}
```

--

### Variable Break Points

```scss
$sm: 400px;

.sidebar {
  float: left;
  width: 33.33%;

  @media (min-width: $sm) {
    width: 25%;
  }
}
```

--

### `@content` Block Mixin

```scss
$width-small:  400px;
$width-medium: 760px;
$width-large:  1200px;

@mixin responsive($width) {
  @if $width == wide-screens {
    @media only screen and (max-width: $width-large) { @content; }
  }

  @else if $width == medium-screens {
    @media only screen and (max-width: $width-medium) { @content; }
  }

  @else if $width == small-screens {
    @media only screen and (max-width: $width-small) { @content; }
  }
}
```

<small>from: Sass for Web Designers by Dan Cederholm</small>

--

### `@content` Block Mixin Usage

```scss
#content {
  float: left;
  width: 70%;

  @include responsive(wide-screens) {
    width: 80%;
  }

  @include responsive(medium-screens) {
    width: 50%;
    font-size: 14px;
  }

  @include responsive(small-screens) {
    float: none;
    width: 100%;
    font-size: 12px;
  }
}
```
