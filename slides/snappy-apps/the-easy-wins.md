
### Can I Actually Animate Anything?

--

### The Easy Wins

![The Easy Wins](img/easy-wins.jpg)

--

### The Easy Wins

You will need to put elements onto their own compositor layer &mdash; using one of these:

- `backface-visibility: hidden;`
- `transform: translateZ(0);`
- `will-change` property

--

### `Will-Change` Property

For certain keywords, like opacity or transform it will trigger Chrome and Firefox to make the appropriate optimizations under the hood.

```css
a:hover {
  will-change: transform;
}
```

<small>[Everything You Need to Know About the CSS will-change Property](https://dev.opera.com/articles/css-will-change-property)</small>

--

### GPU Compositing


The process where each of the individual textures uploaded to the GPU is drawn out one by one or even in parallel.

--

### Minimizing Re-paint

![](img/cpu-repaint.gif)

--

### Minimizing Re-paint

![](img/gpu-repaint.gif)

--

### Warning

Be-careful not to abuse these hacks.

