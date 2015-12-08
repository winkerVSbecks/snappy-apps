# Rough Outline

## Part 1

### HTML

- [x] Readability
- [x] Attribute order
- [x] Semantics
- [x] Character codes


### CSS Basics

- [x] Comments
- [x] Efficiency
  + [x] Selector Performance
  + [x] Right to Left
  + [x] Do Not Over-Qualify Selectors
  + [x] Avoid Descendant Selectors
  + [x] Keep Selectors as Short as Possible

### Some CSS Properties
- [x] Pseudo Properties
  + [x] before, after
  + [x] last-of-kind vs last-of-type
  + [x] nth child, nth child range
- [x] Pointer-events
- [x] Object-Fit
- [x] Font-face

### CSS Resources
- [x] Caniuse.com
- [x] http://tympanus.net/codrops/css_reference/
- [x] MDN
- [x] http://howtocenterincss.com


### Sass

- [x] Basics
  + [x] libsass vs ruby sass
  + [x] sourcemaps
- [x] Basic syntax
  + [x] Nesting
  + [x] Variables and scope
  + [x] &
  + [x] Lighten/darken
  + [x] Math (…)
  + [x] Commenting
  + [x] Mixins
  + [x] @extend
- [x] Media Queries
  + [x] Nested
  + [x] Variable break points
  + [x] Combining @content blocks and mixins
- [x] Bourbon
- [x] Best practices
  + [x] Basics
  + [x] %Placeholder
  + [x] Nesting
  + [x] Nested Media Queries
  + [x] Mixins


### Flexbox

- [x] Concepts and Terminology
- [x] Flex-direction
- [x] Alignment-items
- [x] Justify-content
- [x] Flex Lines
  + [x] Wrap
  + [x] Align Content
- [x] Flex-items
  + [x] Order
  + [x] Basis/grow/shrink
- [x] Real world examples (solved by flexbox)
- [x] Flexbox and angular

---

## Part 2


### Setting up a project

- [x] Gulp tasks required
- [x] Scss-lint
- [x] Livereload
- [x] Directory Structure
- [x] App.scss
  + [x] @import
  + [x] Different sections
- [x] custom icons with hover/active states sprites or fonts or other?
- [x] Best practices for managing CSS on a project that has design changes frequently (checklist)


### Naming

- [x] General Principles
- [x] Namespaces
- [x] BEM
  + [x] Principles
  + [x] Starting Context
  + [x] BEM-ing with Sass


### Formatting
- [x] Deceleration Order
- [x] Ruleset
- [x] Practical Example
- [x] List
- [x] Maps
- [x] Attributes as map
- [x] What rules make sense for scss-lint and what we can leave out?


### Snappy apps

- [x] Basic Flow of the Rendering Engine
- [x] 60 fps
- [x] Re-Layout
- [x] Re-Paint
- [x] The Easy Wins
- [x] Will-Change Property
- [x] Layout thrashing
- [x] Tools, not rules
- [x] Solving typical problems using CSS (vs. using JavaScript)
- [x] http://jankfree.org


### Animations

- [x] Transforms
  + [x] http://tympanus.net/codrops/css_reference/transform
  + [x] 2D/3D transforms
  + [x] Multiple transforms
  + [x] Transform origin
  + [x] perspective
- [x] Transitions
  + [x] http://oli.jp/2010/css-animatable-properties
  + [x] transform-property
  + [x] duration
  + [x] timing function
  + [x] delay
- [x] Keyframe Animations


### Layout Examples

- [x] Percent inheritance
- [x] Single line vertically centred
- [x] Ellipsis
- [x] 3 line vertical centring
- [x] Full height sidebar
- [x] Sticky footer
- [x] Navbar with links


### Advanced Sass

- [x] Advanced mixins (@content)
- [x] Dynamic classnames http://viget.com/extend/sass-maps-are-awesome
- [x] loops
- [x] Functions
