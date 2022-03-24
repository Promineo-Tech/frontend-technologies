# Week 3

## Bootstrap Overview 

Bootstrap is a framework of readily available code that integrates with HTML to create stylized websites that adapt the layout to users’ screen sizes. This framework allows developers to cut down on the time needed to style a website, simplifies the complexity of how to layout elements, works across multiple browsers, and reduces the frustration of using plain CSS. All it takes to use Bootstrap is a few additional lines in our HTML document.

There are also some optional JavaScript libraries if we want to add some interactivity to our website and these are inserted at the end of our <body> element. 

![bootstrap](images/v5-home.png)

### Installation

There are multiple ways to use the Bootstrap framework:
  - Use the CDN links
  - Download the compiled CSS and JS
  - Install Bootstrap via npm (I prefer this one)

Check out the <a href="https://getbootstrap.com/docs/5.0/getting-started/download/">downloads page</a> for more information.

### Layout - Grid

Bootstrap constructs a horizontal grid on the page, and the elements are placed within. This is the fundamental part of the framework, and how to deal with the grid and its options is the first decision you make in your project.

Bootstrap utilizes a container class to initiate the page and find a basis for the grid. Containers can be used multiple times on the page, but should not be nested.

Containers of this type provide a solid, centered, and responsive grid. That is, the width adapts in the device’s viewport and then remains stable within a range.

The grid is formed by twelve (12) equal width columns. Predefined classes can be used to place elements on a given column and span a number of columns at a time.

The elements are placed in the columns. Eventually the last column is reached, either by a number of elements or elements that span more than one column. The entirety is called a row. After that, a new row begins. Quite often you will control such rows without the need to fill up all columns. That’s why we use .row classes.

### Compoments

Components are the building blocks taken from the Bootstrap library, and they provide certain functionalities that go beyond the mere use of CSS. Components are made from CSS with a combination of HTML, JavaScript, and font libraries.

  - Drop-down menus
  - Toolbars
  - Menu buttons
  - Navigation
  - Breadcrumbs
  - Page scrolling
  - Jumbotron
  - Messages

Detailed information and example code can be found on the <a href=https://getbootstrap.com/docs/5.1/components/">compoments</a> section of the documentation.

## Using NPM 

To be able to install and use any package (aka library or framework) you should first execute the command ```npm init```. This command initializes your project with a package.json file which is a .json file with a object literal with keys and values that describe your project.

If you do not do ```npm init``` first, the first time you install your first package, a package.json file will be created anyways. 

Every package that you install will be installed to a node_modules folder. This folder (will be created if not already there) contains the executable source code for each package that you install.

<strong>Note:</strong> Never push your node_modules foler to your Github repo. Always create a .gitignore file and put the folder name there so git will ignore those folder(s) and file(s). 

### Package.json
Your project's package.json is the central place to configure and describe how to interact with and run your application. It enables npm to start your project, run scripts, install dependencies, publish to the NPM registry, and many other useful tasks. 

Your package.json fills several roles in the lifecycle of your project, some of which only apply for packages published to NPM. If you're not publishing your project to the NPM registry or otherwise making it publicly available to others, your package.json is still essential to the development flow.

### Package-lock.json
When you install the first package using npm a new file called ```package-lock.json``` appears in your project directory. This file helps lock package dependencies down, as well as their sub-dependencies. 

When you install a package, most likely that package will have many dependencies and sub-depenedencies in order for it to run. 

So why doesn't the ```package.json``` handle all this? Good question.

The package.json file only handles top-level dependencies, nothing more. But those dependencies may have their own dependencies, etc. Like if we use the very loose analogy of you know about your 1st cousins, but you may have forgotten about you 2nd and 3rd cousins. 😧

The package-lock file is a snapshot of our entire dependency tree and all the information npm needs to recreate the state of our node_modules/ folder. 

### NPM Script

An npm script is a convenient way to bundle common shell commands for your project. They are typically commands, or a string of commands, which would normally be entered at the command line in order to do something with your application.

Scripts are stored in a project's package.json file, which means they're shared amongst everyone using the codebase. They help automate repetitive tasks, and mean having to learn fewer tools. Node npm scripts also ensure that everyone is using the same command with the same flags.

```JS
"scripts": {
    "start": "http-server --cors -c-1 -p 8080"
  },
```

### Bootstrap dependencies

As of Bootstrap version 5.x, it no longer uses jQuery, which was replaced with just vanilla JavaScript. 

So to use Bootstrap in your HTML file, you just need to reference the distributed .css and bundled .js file.

```HTML
 <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
```

```HTML
 </body>
 <script src="node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
```

## Additional Resources 

Npm:
- [All about package.json](https://heynode.com/tutorial/what-packagejson/)
- [What is a NPM Script?](https://heynode.com/tutorial/what-are-npm-scripts/)
- [What is package-lock.json file?](https://heynode.com/tutorial/what-package-lockjson/)
- [Creating a .gitignore file](https://www.freecodecamp.org/news/gitignore-what-is-it-and-how-to-add-to-repo/)
Bootstrap:
- [Travery Media Bootstrap 5 Crash Course](https://www.youtube.com/watch?v=4sosXZsdy-s)
- [W3Schools Bootstrap Reference](https://www.w3schools.com/bootstrap5/)
- [Bootstrap Cheatsheet](https://devhints.io/bootstrap)
- Alternatives CSS frameworks 
  - [Foundation](https://get.foundation/)
  - [W3.css](https://www.w3schools.com/w3css/defaulT.asp)
  - [Bulma](https://bulma.io/)
  - [Pure.css](https://purecss.io/)
 - Other CSS libraries
   - [Tailwindcss](https://tailwindcss.com/)