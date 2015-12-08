<!-- .slide: data-background="#ffcc33" class="th-yellow" -->

# Paint

--

### The process by which the browser converts the DOM elements with all their properties into actual pixels to draw.

![re-paint](img/re-paint.gif)

--

### Styles That Affect Layout

Painting is typically a very expensive operation.

[http://csstriggers.com](http://csstriggers.com)

--

### Animating Paint Properties

If you animate any properties that cause repaint the elements affected are repainted, and the layers they belong to are uploaded to the GPU.

--

### Animating Paint Properties

> On mobile devices this is particularly expensive because CPUs are significantly less powerful than their desktop counterparts, meaning that the painting work takes longer; and the bandwidth between the CPU and GPU is limited, so texture uploads take a long time.

<small>🔗 <a href="http://www.html5rocks.com/en/tutorials/speed/high-performance-animations">from HTML5 Rocks: High Performance Animations</a></small>

--

## tldr;

Avoid animating these on mobile
