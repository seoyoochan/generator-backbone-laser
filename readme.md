## Usage

Install: `npm install -g generator-backbone-laser`

Make a new directory and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo backbone-laser`, optionally passing an app name:
```
yo backbone-laser [app-name]
```

## Typical workflow

```
yo backbone-laser # generates your application base and build workflow
grunt serve # dev mode
grunt build # build for production code
```

# Why do I go with Backbone + Marionette + Knockout?
  I used to be an AngularJS user, but I had to scratch my head whenever its magic too much happens behind for me. Also it was heavy and the learning curve was too much for me.<br/>
  I wanted to have non-opinionated thing with orchestrating awesome tools.
  After a lot of research and consideration, BMK suits my taste best as a result.

## Is it a good Boilerplate?
  I am not an expert. I am still learning many things.<br/>
  However, I try all of my best to follow best practices.<br/>
  **I strongly believe modularization and grouping by feature layer, not MV* layer is a right way to go.**

## Styles Best Practices
  - Load via `main.scss` to correctly order styles
  - Contain your font with its own named folder in `fonts`
  - Always DRY and make use of SASS greatness
  - Seperate each line by css attribute for readability, No inline code
  - Inline code is only allowed in minification

## Scripts Best Practices
  - Always create a module folder(+ submodules optionally)
  - Grouping and Separating by Feature (Feature Layer, No MV* Layer)
  - Router must not know about view.<br/>
    It only invokes one centralized controller(Application controller) and one method.
  - Application controller loads all the rest of controllers
  - Each module has only one controller
  - Application view is responsible for rendering many diverse layout forms(1 column, 2 columns, 3 columns, and etc.)
  - Eaach module or each submodule has its own view, model, collections
  - If a module has any submodule, don't put anything in parallel with the module and put everything in submodules


## What this generator does for you?
- It demonstrates how to validate registartion form succintly with knockout & backbone & marionette!
- It uses **libsass** which is faster than ruby sass
- Liveload in Development Mode
- The Fastest Optimzation in **r.js**
- Caching is supported
- Separation of dev and production code is well supported.
  take a look at `build/index.html` to learn to write code dependent on mode.
  `build/index.html` is automatically distributed to `app/index.html` and `dist/index.html`
- Timezone Detection
- Browser Language Detection and Translation of App with **i18next plugin**
- Reset Style with **Eric Meyer's Reset CSS**
- Font Awesome is ready
- Shell scripting `npm build` command is ready out of `command/build.sh`
- Test with **Karma**, **Jasmine**, and **Sinon**
