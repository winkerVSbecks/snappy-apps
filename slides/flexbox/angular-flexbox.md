### AngularJS and Flexbox

```html
<div class="flex-container">

  <my-directive>
    <div class="flex-item"></div>
    <div class="flex-item"></div>
    <div class="flex-item"></div>
  </my-directive>

</div>
```

```js
angular.module('myApp', [])
  .directive('myDirective', function() {
    return {
      replace: true
      …
    };
  });
```
