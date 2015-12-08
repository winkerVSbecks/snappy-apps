### Transform Property

Allows you to visually transform an element in 2D/3D space

<iframe height='500'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/RPGaMm/?height=500&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>

--

### Transforms

Move stuff around

```scss
// 2D
translate()
rotate()

// 3D
translate3d()
rotate3d()
matrix3d()
```

--

### Transforms

Distort stuff

```scss
// 2D
scale()
skew()
matrix()

// 3D
scale3d()
matrix3d()
```

--

### With Bourbon

```scss
@include transform(translateY(50px));
@include transform(scale(0.9) rotate(-3deg));
```

--

### Multiple Transforms

Order matters!

```scss
@include transform(
  translateY(250px)
  translateX(200px)
  scale(0.5)
  rotate(-30deg)
);

@include transform(
  rotate(-30deg)
  translateY(250px)
  translateX(200px)
  scale(0.5)
);
```

--

### Multiple Transforms

<iframe height='450'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/BNLKqo/?height=450&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>

--

### Transform Origin

![transform origin](http://media.mediatemple.netdna-cdn.com/wp-content/uploads/2014/10/05-transform-svg-html-large-preview-opt.png)

<small>[from smashingmagazine.com/2014/11/03/styling-and-animating-svgs-with-css](http://www.smashingmagazine.com/2014/11/03/styling-and-animating-svgs-with-css)</small>

--

### Transform Origin

```scss
@include transform-origin(center top);
@include transform-origin(20% 50px);
```

--

### Perspective

<iframe height='550'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/QbKEwg/?height=550&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>

--

### Perspective

```scss
@include transform(
  perspective(800px)
  rotateY(45deg)
  translate3d(0, 0, 300px)
);
```
