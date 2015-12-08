### Directory Structure

```
scss
|
|-- components/             # Common modules
|   |-- _modal.scss
|   |-- _navbar.scss
|   |-- _buttons.scss
|   …
|
|-- variables/              # Global project variables
|   |-- _layout-variables.scss
|   |-- _typography-variables.scss
|   |-- _component-variables.scss
|   …
|
|-- core/                   # Core
|   |-- _reset.scss         # Reset
|   |-- _base.sass          # Base styles applied directly to tags
|   |-- _typography.scss    # Typography
|   |-- _forms.scss         # Styles for input and form elements
|   |-- _grids.scss         # Grids
|   |-- _transitions.scss   # Transitions
|   |-- _mixins             # Imports for all functions and mixins
|   |     |-_functions.scss
|   |     |-_mixins.scss
|   |
|   |-- _util.scss          # Utilities
|   …
|
|-- sections/               # Styling specific to a section of the app
|   |-- _landing.scss
|   |-- _dashboard.scss
|   …
|
|-- vendor/                 # CSS or Sass from other projects
|   |-- _colorpicker.scss
|   |-- _font-awesome.scss
|   …
|
|-- app.scss                # primary Sass file
```
