# Attributes

--

### List Each Attribute on a Separate Line

```
<div class="foo"
  ng-repeat="thing in listOfThings"
  ng-click="awesome()"
  data-id="0.0.2">
  <span>Child</span>
</div>
```

--

## Attribute Order

Attributes should be written in the following order:

- `class`
- `id`
- Element specific attributes such as: `href`, `src`, `type`, etc.
- `ng-*` and `data-*`
- Everything else
