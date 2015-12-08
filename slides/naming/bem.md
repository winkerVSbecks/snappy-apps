# BEM

--

### `.block`

An independent component of an application. It may contain other blocks.

--

### `.block__element`

A sub-component of the block that performs a particular function. It is context-dependent i.e., it only makes sense within the context of the block.

--

### `.block--modifier`

Represents a different version of the block.

--

### BEM

![BEM example for a searchbox](img/search-block-marked.en_.png)

<small>[from smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem](http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem)</small>

--

### Starting Context

Pick a block context such that it is small and self-contained. Think UI components and not views or sections.

--

![](img/bem-context.png)

--

```scss
// The main block
.list-group {…}


// The divider block
.list-divider {…}


// The item block
.list-item {…}

  .list-item__figure {…}
  .list-item__title {…}
  .list-item__body {…}


.list-item--success {…}
.list-item--danger {…}
```

--

### BEM-ing with Sass

```scss
.block {

  &__element {…}

  &--modifier {…}

}
```

--

### Practical Example

```scss
.nav {

  &__list {
    &__item {
      …
    }
  }

  &__link {
    &--active {
      …
    }
  }

}
```
