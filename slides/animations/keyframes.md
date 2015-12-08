### Keyframe Animation

```css
@keyframes boom {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
    opacity: 1;
  }

  30%, 60% {
    transform: rotate(360deg) translate3d(200px, 100px, 0);
    opacity: 1;
  }

  100% {
    transform: rotate(720deg) translate3d(100px, 200px, 0);
    opacity: 0;
  }
}
```

--

### With Bourbon

```scss
@include keyframes(boom) {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
    opacity: 1;
  }

  30%, 60% {
    transform: rotate(360deg) translate3d(200px, 100px, 0);
    opacity: 1;
  }

  100% {
    transform: rotate(720deg) translate3d(100px, 200px, 0);
    opacity: 0;
  }
}
```

--

### Usage

```scss
@include animation-name(boom);
@include animation-duration(2s);
@include animation-timing-function(ease);
@include animation-iteration-count(infinite);
```

--

### Demo

<iframe height='600'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/gpwMqR/?height=600&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>
