## nth Child

```html
<ul>
  <li>…</li>
  <li>…</li>
  <li>…</li>
  <li>…</li>
  …
  <li>…</li>
</ul>
```

--

### Target a Specific Child

```css
li:nth-child(3) {
  /* will target the 3 li element inside the ul */
}
```

--

### Positive Ranges

```css
li:nth-child(n+6) {
  /* will target all li elements with index 6 and above */
}
```

--

### Negative Range

```css
li:nth-child(n-9) {
  /* will target all li elements with index 9 and below */
}
```

--

### Generic Range

```css
li:nth-child(n+6):nth-child(n-9) {
  /* will target li elements range of 6-9 */
}
```

--

### Complex Ranges

```css
li:nth-child(3n+3) {
  /* will target the 3rd, 6th, 9th and so on li elements */
}
```

--

## Confused?

<a href="http://nthmaster.com"
  target="_blank">
  nthmaster.com
</a>
