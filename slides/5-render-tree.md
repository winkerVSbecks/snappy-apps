<!-- .slide: data-background="#ffcc33" class="th-yellow" -->

# Render Tree

--

### DOM + CSSOM = Render Tree

- Visual representation of the document
- Doesn’t contain non-visual elements
- Doesn’t contain elements with `display: none`
  + `ngIf` vs `ngHide`

--

### Style Computation

> Building the render tree requires calculating the visual properties of each render object. This is done by calculating the style properties of each element.

<small>
  <a href="http://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#Render_tree_construction">
    🔗 source
  </a>
</small>
