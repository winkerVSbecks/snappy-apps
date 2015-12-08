# Paint

The process by which the browser converts the DOM elements with all their properties into actual pixels to draw.

--

### Re-Paint

![re-paint](img/re-paint.gif)

--

### Styles That Affect Layout

|   | | | |
|:------------:|:-------------:|:-------------:|:-------------:|
| width        | font-weight   |  font-size    | bottom        |
| height       | overflow      |  float        | min-height    |
| padding      | left          |  text-align   | overflow-y    |
| margin       | font-family   |  top          | clear         |
| display      | line-height   |  position     | white-space   |
| border-width | vertical-align|  border       | right         |

--

### Animating Paint Properties

If you animate any of the above properties the elements affected are repainted, and the layers they belong to are uploaded to the GPU.

--

### Animating Paint Properties

> On mobile devices this is particularly expensive because CPUs are significantly less powerful than their desktop counterparts, meaning that the painting work takes longer; and the bandwidth between the CPU and GPU is limited, so texture uploads take a long time.

<small><a href="http://www.html5rocks.com/en/tutorials/speed/high-performance-animations">from HTML5 Rocks: High Performance Animations</a></small>

--

## tldr;

Avoid animating these on mobile
