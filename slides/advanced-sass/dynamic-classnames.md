### Dynamic Class Names

```scss
#{ $var-name }
```

--

### Example

```scss
$name: foo;
$attr: border;

p.#{$name} {
  #{$attr}-color: blue;
}
```
