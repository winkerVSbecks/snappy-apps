## Selection by Type

--

### `:first-child` &amp; `:last-child`

You might expect this to be true&hellip;

```html
<article>
  <h1>Article Title</h1>

  <p>First paragraph</p> <!-- :first-child -->
  <p>Second paragraph</p>
  <p>Third paragraph</p>
  …
  <p>Last paragraph</p> <!-- :last-child -->

  <div>Some other stuff</div>
</article>
```

--

![wrong](http://i.giphy.com/BvLBKDhHSZdAY.gif)

--

## `:first-child`

1. Must be first child element in its parent
2. Must be first of its type

--

#### `:first-of-type` &amp; `:last-of-type`

```html
<article>
  <h1>Article Title</h1>

  <p>First paragraph</p> <!-- :first-of-type -->
  <p>Second paragraph</p>
  <p>Third paragraph</p>
  …
  <p>Last paragraph</p> <!-- :last-of-type -->

  <div>Some other stuff</div>
</article>
```

--

### Quirks Mode

<iframe height='530' scrolling='no' src='//codepen.io/winkerVSbecks/embed/pJgYyq/?height=530&theme-id=15009&default-tab=result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>
