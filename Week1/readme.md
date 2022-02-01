# Week 1

## HTML 

HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are two of the building block languages of web applications, and they are considered "front-end" technologies. HTML gives content *structure* and *meaning* by defining the "elements" that the web page is made up of. CSS is a presentational language that is used for only for the *layout* and *styling* of a webpage. JavaScript, together with HTML and CSS, is responsible for bringing our websites to life.

![HTML-CSS-JS](images/HTML-CSS-JS.gif)

## HTML

HTML stands for Hyper Text Markup Language. HTML is used to create the infrastructure of a webpage. HTML is **NOT** a programming language; HTML is considered a "markup" language. HTML does not contain logic, and HTML elements contain very little, if any, native styling. HTML is simply used to specify the structure and basic parts of a page.

 Over the years, there have been many versions of HTML. As of 2014, the most up-to-date version is HTML5

### Set Up and Basics

<details>
    <summary>Information</summary>
    
#### Making an HTML File
    
HTML files are created by ending the name of a file with an `.html` extension. This extension tells browsers and code editors to read the file as HTML.

> Note: `index.html` is the standard name for a root HTML file since the browser looks for files called `index` by default.

#### HTML Syntax Overview

HTML is based around filling "tags" with "content" in order to create HTML "elements".

```html
<thisisatag>This is the content</thisisatag>
```

Above is the basic syntax of an HTML element.

1. First is the tag itself. HTML tags are declared using angle brackets `<>`, with the name for the tag contained within the `<>` brackets.
2. Most HTML tags come in pairs of opening and closing tags. The closing tag begins with a `/` immediately after the first angle bracket to indicate that it is corresponding closing pair of the HTML tag.
3. Between the angle brackets is where developers specify the type of tag they are using. There are various types of tags native to HTML, which will be covered shortly.
4. Tags are wrapped around the **content** that is stored inside that HTML tag. The content together with the tag creates an HTML element.

> Note: Some elements are called "self-closing" elements because their tags should not be written in pairs. This is because they are not designed to contain content. See the example below:

```html
<input />
```

> Notice that there is only one tag, and it uses a forward slash at the ending of the tag.

#### Comments in HTML

Comments can be written in HTML code to help clarify what's going on in the development environment. Comments will not appear in the browser, so they're not necessarily intended to be viewed by the users of a site. 

Comments begin with `<!--` and close with `-->`.

```html
<body>
  <!-- This is a comment that will not be displayed on the web page -->
</body>
```

#### Basic HTML Page Structure

Here's an example of a basic HTML page structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta tags and other external links go here, and the link and title tags below can be used to change the icon/title of your webpage -->
    <link rel="shortcut icon" href="some-URL-or-path-goes-here" />
    <title>The Title</title>
  </head>
  <body>
    <!-- Content of page goes inside the body tag -->
  </body>
</html>
```

The structure is:

`<!DOCTYPE html>` - This tag is pretty unique, and it's actually not an HTML element; it's an instruction to a web browser that lets it know what version of HTML to expect.

> Note: Always make sure that this is the first declaration in an HTML document, otherwise the page may not work.

`<html>` - The html tag tells the browser that everything contained inside the tag should be read as html. The `lang` "attribute" can be used to specify the human language that the contents are written in. This element will act as the root tag for the file, which means that everything will be contained inside of this tag.

`<head>` - The head tag is a container used to contain "metadata" (data about data). Metadata is what is used to define the title of the document, character set, and other details that are relevant for accessibility and SEO. Metadata is not displayed on the web page for the user.

`<title>` - This is a metadata tag that will contain the title of the document.

> Fun Fact: The title determines which words are displayed on the web page tab.

`<body>` - The body tag is the container for all the elements that will make up a web page. Everything inside of the body tag will be displayed on the web page. 

#### Meta Tags

Meta tags are used to provide information about a site that can be used by search engines and other software. Web crawlers and search engines use the metadata contained within meta tags to evaluate, rank, and sort through websites. 

> Note: Meta tags need to be placed inside the `<head>` tag of the file.

Below are some example Meta Tags:

```html
<head>
  <meta charset="UTF-8" />
  <!-- charset stands for character set, and this information is used so the web browser knows which characters, or alphabets, are being used. UTF-8 (Unicode) covers almost all of the characters and symbols used in the world. -->
  <meta name="description" content="best website ever made" />
  <!-- the description tag has a content attribute that dictates the primary description of your site as it appears in search engines -->
  <meta
    name="keywords"
    content="best, ultimate, website, of all time"
  />
  <!-- keywords are used to help search engines recognize what search words can be used to point users toward a site-->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- a browser viewport is the area of web page in which the content is visible to the user. The width attribute can be used to set a specific width in pixels of the intended display. Here it is set to a special value (“width= device-width”) which is the width of the device in terms of CSS pixels at a scale of 100%. The initial-scale property governs the zoom level when the page is loaded for the first time. -->
</head>
```

</details>

### Semantic HTML

Semantic HTML is HTML that introduces context or meaning to the structure of a webpage, instead of using elements simply for display. Appropriate usage of semantic HTML is critical for accessibility issues and Search Engine Optimization (SEO).

Examples of nonsemantic HTML: `<div>, <span>`

Examples of semantic HTML: `<footer>, <header>, <nav>, <form>, <article>, <main>, <section>`

<details>
    <summary>Semantic HTML Information</summary>

Semantic tag names imply some significant meaning about their contents. Appropriate usage of semantic HTML can boost a site's SEO, and also enable screen reading softwares to work more effectively for people with disabilities.

When it comes to making your sites more accessible, here are three easy tips to follow:

1. Always use the semantic tag alternative if it's an option
1. Attach labels to each of your `<input />` elements
1. Use a `<button>` tag whenever you use an `onclick` event handler. For more reasons on why you should try to always use a button with an onclick, see here: https://blog.benmyers.dev/clickable-divs/

> Note: As of Oct. 2019, the Supreme Court has cleared the way for discrimination law suits against websites that are not accessible to people with disabilities.  This means that creating accessible websites will be legally mandatory in the future. The chrome browser has developer tools that can help audit accessibility issues, such as: https://chrome.google.com/webstore/detail/axe-web-accessibility-tes/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US

</details>

### Common Tags In HTML

There are many different tags that can be used to create HTML elements. Here, we will review the more commonly used HTML tags.

<details>
    <summary>Header Tags</summary>

The `<header>` tag is used as a container for introductory content or a set of navigational links.

Example:

```html
<header>
  <img src="logo" />
  <h1>Heading Title</h1>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
</header>
```

> Note: Header tags cannot be placed within a `<footer>`, `<address>`, or another `<header>` element.

</details>

<details>
    <summary>Heading Tags</summary>

Heading tags are used to create headers for content on a webpage. Heading tags can come with built-in font size and weight variations corresponding to their level, depending on the browser. These can be removed with a reset CSS file, or customized by developers using their own stylesheets.

There are 6 levels of heading tags that are available for use. The lower the number of the heading is, the more important it is.

```html
<h1>Heading One</h1>
<h2>Heading Two</h2>
<h3>Heading Three</h3>
<h4>Heading Four</h4>
<h5>Heading Five</h5>
<h6>Heading Six</h6>
```

</details>

<details>
    <summary>Nav Tags</summary>
    
The `<nav>` tag defines a set of navigation links. Screen readers for disabled users can use the nav element to determine whether to omit the initial rendering of the content, which increases performance of the site and software.
>Note: Not all links of a document should be inside a `<nav>` element. The `<nav>` element is intended only for major blocks of navigation links.
</details>

<details>
    <summary>Paragraph Tags</summary>

The `<p>` tag can be used to declare that an element will be a paragraph.

```html
<p>Hey, I'm a paragraph!</p>
```

</details>

<details>
    <summary>Div and Section Tags</summary>

The `<div>` tag represents a division or a section within a web page. The `<div>` tag is not semantic, as it doesn't imply anything about the contents of the tag. Div tags are often used as a container, or wrapper, for other elements in order to arrange the inner elements or apply some javascript functionality.

```html
<div>
  <p>
    I'm using a div tag to create a division within my web page that "houses,"
    "wraps," or "contains" a paragraph tag
  </p>
</div>
```

A semantic alternative to the `<div>` tag is the `<section>` tag. It can be used the same way that one would use a `<div>` tag, but it implies that the content is a meaningful section of the web page.

```html
<section>
  <p>
    I'm using a section tag to create a semantic division within my web page
    that contains a paragraph tag
  </p>
</section>
```

</details>

<details>
    <summary>Span Tags</summary>

The `<span>` tag is used to group inline elements in the document. The span tag does not provide any visual changes on its own.

Span tags can be used, in conjuction with ids or classes, as a "hook" inside of another element to apply more specific styling or functionality to that content.

```html
<span>
  <p>
    I'm a <span id="different-styled-font">span</span> tag inside of a p tag
    inside of a span tag!
  </p>
</span>
```

</details>

<details>
    <summary>Separation Tags</summary>

There are a couple of tags that can be used to create space or separation between elements. These tags are `<hr>` and `<br>`.

- `<hr>` - this tag is used to create white space between elements
- `<br>` - this tag is used to insert a single line break between elements
  </details>

<details>
    <summary>List Tags</summary>

There are two kinds of lists that can be created in HTML. They are known as ordered, or unordered lists. Each type of list is comprised of list items.

`<ul>` - this is the tag used to create an unordered list

- This will create a list-like structure using bullet poiints

`<ol>` - this is the tag used to create an ordered list

- This will create a list-like structure using numbers

`<li>` - this is the tag used to indicate that the content is a part of the list. It is short for "list item."

Syntax:

```html
<!-- Unordered List -->
<ul>
  <li>About</li>
  <li>Contact</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>About</li>
  <li>Contact</li>
</ol>
```

</details>

<details>
    <summary>Input Tags</summary>

`<input />` tags are used create input elements in HTML, and they are commonly used to collect user input.

Input tags can have a `type` attribute applied in order to control the type of input that will be inserted, and affect the default styling and behavior of the input field. There are many different `type` values of input fields including `button`, `checkbox`, `color`, `date`, `datetime-local`, `email`, `file`, `image`, `image`, `month`, `number`, `password`, `radio`, `submit`, and more.

If a `type` attribute value is not specified for an `<input>`, it will default to `type="text"`, which is just a normal input box a user can type any text into.

</details>

<details>
    <summary>Button Tags</summary>

Buttons are a great way to enable users to interact with a web page.

`<button>` - this is the tag used to create a button.

In order to make buttons or other elements interactive, an event handling attribute, like `onclick` would need to be added. Events will be covered in the near future, so don't worry too much about them for now. Here's an example of what a button might look like:

```html
<button onclick="someFunction()">Button Text</button>
```

</details>

<details>
    <summary>Image Tags</summary>

Images can be embedded into a web page using the `<img>` tag.

The `src` attribute is necessary to specify the source of the image shown. It can point to a relative path, or be a URL to some external source.

Image elements can also use an `alt` attribute to create text that will display if the image source can't be loaded. Including descriptive `alt` tags is another way to enable a better experience for users with disabilities, as screen readers can read out the alt tag for visually impaired users.

```html
<img
  alt="long coated white and brown puppy lying on a bed"
  height="500"
  width="500"
  src="https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
/>
```

</details>

<details>
    <summary>Anchor Tags</summary>
    
Anchor tags are used to define the beginning and end of a hypertext link. Anchor tags can be used to redirect users to external links by specifying the destination with the `href` attribute. They can also enable users to jump to specific points on the same page using the `name` attribue.

```html
<a href="http://www.example.com" name="Sample">My sample page </a>
<a href="#Sample">Go to Sample Page Link</a>
```

</details>

<details>
    <summary>Form Tags</summary>

A `<form>` tag can be used to create a form element in HTML. Forms are used to collect user input.

An HTML form can contain one or more of the following `form elements`:

- `<input />`
- `<textarea>`
- `<button>`
- `<select>`
- `<option>`
- `<section>`
- `<option>`
- `<optgroup`
- `<fieldset>`
- `<label>`
- `<output>`

See the example form below:

```html
<form>
  <label for="first-name">First Name:</label>
  <input type="text" name="first-name" />
  <label for="last-name">Last Name:</label>
  <input type="text" name="lastname" />
  <input type="submit" value="Submit" />
</form>
```

</details>

### Tag Attributes

Attributes are used in HTML to provide extra information or features to a tag. All tags can have attributes, and attributes should always be placed in the opening tag.

<details>
    <summary>Tag Attributes Information</summary>

Here's the basic syntax for assigning an attribute:

```html
<tagname attributeName="attributeValue">content</tagname>
```

The attribute above has both a name and a value. The value is _assigned_ to the name, and is wrapped in quotes. Notice also that the attribute is declared and assigned in the opening tag, not the closing tag.

Common attributes:

- `id` - the id attribute is used to assign a specific id to an element. This will help us target the desired element when adding in styling or functionality through CSS or JavaScript.
  > Note: There can only be one id assigned per tag. Also, ids should be unique and used only once.
- `class` - the class attribute is used to assign a specific class to an element. Similar to ids, classes let us target desired elements for styling or functionality, but they are designed to be used across many elements at a time.
  > Note: Elements can have multiple classes.
- `href` - the href attribute is commonly paired with an `<a>` tag, and it is used to specify a URL path to link to
- `src` - image tags can use the src attribute to specify the source path or file name of the image displayed
- `height` - the height attribute is used to assign a height to an element. It can take values of `px`, `%`, `vh`, `em`, or `rem`.
- `width` - the width attribute it similarly used to assign a width to an element. It can take values of `px`, `%`, `vh`, `em`, or `rem`
  </details>

### Inline, Block, and Inline-Block Elements

Every HTML element has a default display property value assigned depending on the tag used. The two default display values are: `inline` and `block`. You can also assign an `inline-block` value to the display property.

Here's a visual representation of differences between the properties:

![inline-inline-block-block](images/inline-block.png)

<details>
    <summary>Inline, Inline-block, Block Information</summary>

#### Block Level

Block level elements have some whitespace above and below the element. Block level elements also do the following:

1. Do not allow elements to sit to their left or right
1. Force a line break after the block element
1. Acquire full width if width is not defined (i.e. width is 100% by default)
1. Can be assigned a height and width
1. Respect top, right, bottom, and left paddings and margins

Here are some common elements that are assigned `display: block` by default:

- `<ul>`
- `<form>`
- `<main>`
- `<footer>`
- `<nav>`
- `<div>`

#### Inline Level

Inline level elements _DO NOT_ start on a new line and will only take up as much width as needed. They have no line breaks before or after the element. They also do the following:

1. Allow other inline or inline-block elements to sit to their left and right
1. Cannot be assigned a width and height
1. Respect left and right margins and padding, but _not_ vertical margins and padding

Here are some common elements that are assigned `display:inline` by default:

- `<button>`
- `<a>`
- `<label>`
- `<br>`
- `<span>`

#### Inline-block Level

Inline-block elements are placed as inline elements (on the same line as adjacent content), but they otherwise behave like block level elements. Inline-block level elements also do the following:

1. Allow other elements to sit to their left and right
1. Respect top and bottom margins and padding
1. Respect height and width

HTML elements are not given `display: inline-block` by default. Inline-block can only be manually defined.

</details>

## Additional Resources

- 