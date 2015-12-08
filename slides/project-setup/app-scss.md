### app.scss

```scss
/* My App
–––––––––––––––––––––––––––––––––––––––––––––––––– */

// Bourbon for mixins
@import '../bower_components/app/assets/stylesheets/_bourbon.scss';
// normalize.css v3.0.2
@import '../bower_components/skeletor/scss/normalize';

// Variables
@import 'core/variables';

// Font-Awesome
@import '../bower_components/fontawesome/scss/font-awesome';

// Core
@import '../bower_components/skeletor/scss/mixins';
@import '../bower_components/skeletor/scss/base-styles';
@import '../bower_components/skeletor/scss/typography';
@import '../bower_components/skeletor/scss/form';
@import '../bower_components/skeletor/scss/util';
@import 'core/util';
@import 'core/base';
@import 'core/transitions';

// Components
@import '../bower_components/skeletor/scss/buttons';
@import 'components/buttons';
@import 'components/navbar';
@import 'components/list-group/list-group';

// Sections
@import 'sections/landing';
```

--

### @imports

- File names for partials should be start with an _. This indicates that this file can't be compiled by itself.

- Global and section-specific Sass files should just contain `@imports` no actual styles.

- Break into as many small files as makes sense (when in doubt, split).

--

### Component/Section Specific Files

```scss
/* List Group
Media lists which support images and icons
–––––––––––––––––––––––––––––––––––––––––––––––––– */
@import 'list-group-variables';
@import 'section-title';
@import 'list-divider';
@import 'list-item';
@import 'item-content';
```


