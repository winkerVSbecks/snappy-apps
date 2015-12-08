### Deceleration Order

1. `@extend` declarations
2. `@include` declarations without inner `@content`
3. Properties (regular styles)
4. `@include` declarations with inner `@content`
5. Nested rule sets

--

### Practical Example

```scss
.alert--error {
  @extend %error;
  @include alert-box();
  color: #f00;

  @include hidpi(1.5) {
    width: 20em;
  }

  p {…}
}
```
