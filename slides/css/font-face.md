# @font-face

--

## 1. First Load a Custom Font

```css
@font-face {
   font-family: 'My Special Font';
    src: url('MySpecialFont.eot?') format('eot'),
         url('MySpecialFont.woff') format('woff'),
         url('MySpecialFont.ttf') format('truetype'),
         url('MySpecialFont.svg') format('svg');
}
```

--

## 2. Then Use the Custom Font

```css
body {
  font-family: 'My Special Font', sans-serif;
}
```

--

### Multiple Formats Required

eot/woff/woff2/truetype/svg
