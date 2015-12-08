## Advanced Mixins

--

### The Basic Media Query

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

### Passing Content Blocks to a Mixin

```scss
@mixin media($width) {
  @media only screen and (max-width: $width) {
    @content;
  }
}

.sidebar {
  float: left;
  width: 33.33%;

  @include media(320px) {
    width: 25%;
  }
}
```

--

### Expand Further

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
