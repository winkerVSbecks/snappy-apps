<!-- .slide: data-background="#ffcc33" class="th-yellow" -->

# Parsing

--

<!-- .slide: data-background="#fff" class="th-yellow" -->
![](img/parsing.png)

<small>
  <a href="http://www.w3.org/TR/2008/WD-html5-20080610/single-page">
    🔗 image source
  </a>
</small>

--

### Parsing Can Be Halted

- Parsing halts until the script is fetched and executed.
- `link` & `style` can pause JS execution

--

### Parsing Is Speculative and Reentrant

--

## Speculative Parsing

1. While scripts are being executed
2. A separate browser thread is spun up
3. It looks for resources that need to be fetched
4. Loads them

--

## Parsing Process in Reentrant

1. Script tags within HTML can contain `document.write`
2. This inserts new tokens
3. Parser restarts the cycle

--

### `<script>` at the Bottom

- Browser parses without interruptions
- Speeds up the rendering overall

--

<!-- .slide: data-background="#fff" class="th-yellow" -->

## css-parsing

![](img/css-parsing.png)

<small>
  <a href="http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#WebKit_CSS_parser">
    🔗 image source
  </a>
</small>
