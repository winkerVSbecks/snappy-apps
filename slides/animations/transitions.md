# Transitions

--

### CSS Animatable Properties

[oli.jp/2010/css-animatable-properties](http://oli.jp/2010/css-animatable-properties)

--

<iframe src="http://tympanus.net/codrops-playground/SaraSoueidan/h2AUfhxe/embed/result,html,css/"
  class="codrops-playground-embed"
  width="100%"
  height="640px"
  frameborder="0"
  scrolling="no"
  allowfullscreen="true"
  style="position: relative;">
</iframe>

<small>[from Codrops CSS Reference](http://tympanus.net/codrops/css_reference/transition)</small>

--

### Transform Property

```scss
@include transition-property(transform);
```

<iframe height='340'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/MwjeEq/?height=340&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>

--

### Transition Duration

```scss
@include transition-duration(1.0s);
```

<iframe height='340'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/Mwjerq/?height=340&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>

--

### Timing Function

[easings.net](http://easings.net)

```scss
@include transition-timing-function(cubic-bezier(0.68, -0.55, 0.265, 1.55));
```


<iframe height='340'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/OVRXQm/?height=340&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>

--

### Transition Delay

```scss
@include transition-delay(2s);
```


<iframe height='340'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/zGKBWX/?height=340&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>

--

## Multiple Transitions

```scss
@include transition-property(transform opacity);
@include transition-property(all);
```

<iframe height='340'
  scrolling='no'
  src='//codepen.io/winkerVSbecks/embed/jPMrxx/?height=340&theme-id=15009&default-tab=result'
  frameborder='no'
  allowtransparency='true'
  allowfullscreen='true'
  style='width: 100%;'>
</iframe>
