### Loops

```scss
@for, @each and @while
```

--

### Iterating Over Maps

```scss
$profiles: (
  facebook: #3b5998,
  github: #4183c4,
  googleplus: #dd4b39,
  instagram: #517fa4,
  twitter: #00aced,
  youtube: #b00
);

@each $profile, $bgcolor in $profiles {

  .profile-link--#{$profile}:focus,
  .profile-link--#{$profile}:hover {
    background: $bgcolor;
  }
}
```

<small>[from viget.com/extend/sass-maps-are-awesome](http://viget.com/extend/sass-maps-are-awesome)</small>

--

### Result

```css
.profile-link--facebook:focus,
.profile-link--facebook:hover {
  background: #3b5998;
}
```
