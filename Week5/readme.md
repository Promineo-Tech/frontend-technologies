# Week 5

## jQuery

<a href="https://jquery.com/">jQuery</a> is a JavaScript file that you include in your web pages. It lets you find elements using CSS-style selectors and then do something with the elements using jQuery methods.

```
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

### jQuery Object

jQuery comes with it’s own object, the dollar sign, $, also known as jQuery. The $ object is specifically made for selecting an element and then returning that element node to perform an action on it.

```
$();
jQuery();
```

### Selectors

One of the core concepts of jQuery is to select elements and perform an action.

The jQuery() function has one parameter: a CSS-style selector. This selector finds any element or CSS selector:

```
$('.feature');           // Class selector
$('li strong');          // Descendant selector
$('em, i');              // Multiple selector
$('a[target="_blank"]'); // Attribute selector
$('#product)');          // ID selector
```

#### This Selection Keyword

When working inside of a jQuery function you may want to select the element in which was referenced inside of the original selector. In this event the this keyword may be used to refer to the element selected in the current handler.

```
$('div').click(function(event){ 
  $(this);
});
```

#### jQuery Selection Filters

Should CSS selectors not be enough there are also <a href="https://api.jquery.com/category/selectors/jquery-selector-extensions/">custom filters</a> built into jQuery to help out. These filters are an extension to CSS3 and provide more control over selecting an element or its relatives.

```
$('div:has(strong)');
```

### Traversing 

The general CSS selectors may not be enough and a little more detailed control is desired. jQuery provides a handful of methods for traversing up and down the DOM tree, filtering and selecting elements as necessary.

In the example below the original selection finds all of the div elements in the DOM, which are then filtered using the .not() method. With this specific method all of the div elements without a class of type or collection will be selected.

```
$('div').not('.type, .collection');
```

#### Chaining

Different traversing methods may be chained together simply by using a dot in-between them.

The code sample below uses both the .not() method and the .parent() method. Combined together this will only select the parent elements of div elements without a class of type or collection.

```
$('div').not('.type, .collection').parent();
```

#### Traversing Methods

 These methods fall into three categories, filtering, miscellaneous traversing, and DOM tree traversing. 

 Filtering:
 - [.eq()](https://api.jquery.com/eq/#eq-index)
 - [.has()](https://api.jquery.com/has/#has-selector)
 - [.map()](https://api.jquery.com/map/#map-callback)
 - [.filter()](https://api.jquery.com/filter/#filter-selector)
 - [.is()](https://api.jquery.com/is/#is-selector)
 - [.first()](https://api.jquery.com/first/#first)
 - [.last()](https://api.jquery.com/last/#last)

 DOM Tree Traversal
  - [.children()](https://api.jquery.com/children/#children-selector)
  - [.closest()](https://api.jquery.com/closest/#closest-selector)
  - [.find()](https://api.jquery.com/find/#find-selector)
  - [.next()](https://api.jquery.com/next/#next-selector)
  - [.parent()](https://api.jquery.com/parent/#parent-selector)
  - [.prev()](https://api.jquery.com/prev/#prev-selector)

### Manipulation

Once elements are fouind via the selecting and/or traversing methods, what do we do with them?

Elements may be altered in the DOM, changing their placement, removing them, adding new elements, and so forth. Overall the options to manipulate elements are fairly vast.

### Getting and Setting

 Getting information revolves around using a selector in addition with a method to determine what piece of information is to be retrieved.

 ```
 // Gets the value of the alt attribute
$('img').attr('alt');

// Sets the value of the alt attribute
$('img').attr('alt', 'Wild kangaroo');
 ```

#### Attribute Manipulation

One part of elements able to be inspected and manipulated are attributes. A few options include the ability to add, remove, or change an attribute or its value. 

In the examples below the .addClass() method is used to add a class to all even list items, the .removeClass() method is used to remove all classes from any paragraphs, and lastly the .attr() method is used to find the value of the title attribute of any abbr element and set it to Hello World.

```
$('li:even').addClass('even-item');
$('p').removeClass();
$('abbr').attr('title', 'Hello World');
```

Some of the attribute methods:

- [.addClass()](https://api.jquery.com/addClass/#addClass-className)
- [.attr()](https://api.jquery.com/attr/#attr-attributeName)
- [.hasClass()](https://api.jquery.com/hasClass/#hasClass-className)
- [.removeAttr()](https://api.jquery.com/removeAttr/#removeAttr-attributeName)
- [.removeClass()](https://api.jquery.com/removeClass/#removeClass-className)
- [.toggleClass()](https://api.jquery.com/toggleClass/#toggleClass-className)
- [.val()](https://api.jquery.com/val/#val)

#### Style Manipulation

On top of manipulating attributes, the style of an element may also be manipulated using a variety of methods. When reading or setting the height, width, or position of an element there are a handful of special methods available, and for all other style manipulations the .css() method can handle any CSS alterations.

The .css() method may be used to set one property, or many, and the syntax for each varies. To set one property, the property name and value should each be in quotations and comma separated. To set multiple properties, the properties should be nested inside of curly brackets with the property name in camel case, removing any hyphens where necessary, followed by a colon and then the quoted value. Each of the property and value pairs need to be comma separated.

```
$('h1 span').css('font-size', 'normal');
$('div').css({
  fontSize: '13px', 
  background: '#f60'
});
$('header').height(200);
```

Some of the style methods:

- [.css()](https://api.jquery.com/css/)
- [.height()](https://api.jquery.com/height/#height)
- [.position()](https://api.jquery.com/position/#position)
- [.width()](https://api.jquery.com/width/#width)

#### DOM Manipultion

We can inspect and manipulate the DOM, changing the placement of elements, adding and removing elements, as well as flat out altering elements. The options here are deep and varied, allowing for any potential changes to be made inside the DOM.

Each individual DOM manipulation method has it’s own syntax but a few of them are outlined below.

```
$('section').prepend('<h3>Featured</h3>');
$('a[target="_blank"]').after('<em>New window.</em>');
$('h1').text('Hello World');
```

Some of the DOM methods:

- [.after()](https://api.jquery.com/after/#after-content-content)
- [.append()](https://api.jquery.com/append/#append-content-content)
- [.prepend()](https://api.jquery.com/prepend/#prepend-content-content)
- [.empty()](https://api.jquery.com/empty/#empty)
- [.html()](https://api.jquery.com/html/#html)
- [.text()](https://api.jquery.com/text/#text)

### Events

jQuery can easily handle event handlers, which are methods that are called only upon a specific event or action taking place. For example, the method of adding a class to an element can be set to only occur upon that element being clicked on.

```
$('li').click(function(event){
  $(this).addClass('saved-item');
});
```

The .click() event method, along with a handful of other event methods, is actually a shorthand method which uses the .on() method introduced. The .on() method uses automatic delegation for elements that get added to the page dynamically.

Making use of the .on() method the first argument should be the native event name while the second argument should be the event handler function. 


```
$('li').on('click', function(event){
  $(this).addClass('saved-item');
});
```

### Additional Resources

 - [W3Schools Tutoials](https://www.w3schools.com/jquery/default.asp)
 - [jQuery CheatSheet](https://htmlcheatsheet.com/jquery/)
 - [Traversy Media Playlist](https://www.youtube.com/playlist?list=PLillGF-RfqbYJVXBgZ_nA7FTAAEpp_IAc)
 - [Net Ninja Playlist](https://www.youtube.com/watch?v=jVe1GBCqFIE&list=PL4cUxeGkcC9hNUJ0j6ccnOAcJIPoTRpO4)
  - [Freecodecamp's Beau Playlist](https://www.youtube.com/playlist?list=PLWKjhJtqVAbkyK9woUZUtunToLtNGoQHB)


## Architecture of web apps: Clients and Servers

When you open a web page (e.g. web app),it opens with text, a background, and a set of images. You click a button, and the page changes. The original text is replaced, new images are displayed, a modal pops up. Your browser is referred to in web development as the client (or “frontend”) – a web-accessing device or software.

Servers expose resources to clients. Those resources could be HTML, CSS, JavaScript, image, video, or audio files, or data, to name but a few. Sometimes those resources are stored on the server itself; other times, the server might provide a path from a database hosted on a different server to the requesting client. The key thing to remember is that servers make it possible for clients to get the files, data, and other resources they need in order to do something valuable for an end user.

Browsers aren’t the only type of client, however.  There are command line clients like curl, special purpose clients like Postman, and apps on your smartphone that request data from web servers. The important thing to remember is that a client requests resources and a server exposes resources.

### Request-Response Cycle

When to request a url from a web address, lots of things happen behind the scenes in
a certain order:

1. The browser parses the URL
2. The browser sends the domain name to the ISP
3. The ISP looks up the IP address in the DNS
4. The ISP sends the IP address back to the browser
5. The browser opens a connection to the server located at the IP address
6. The browser sends a request to the server
7. The server sends a response
8. Repeat steps 6 and 7 until the browser has all of the resources it needs

![IP-Config](images/ip_address.png)
![Response-Request](images/request_response.png)
![URL](images/url.png)

## AJAX

Let's take a step into a time machine. The year is 2005. 🕔🚀🕤

Wouldn't it be nice if page refreshes didn't exist? What if we could do
multiple things at once from a single web page? 

In a perfect world we could type into a search textbox and have searches performed in the background as we type. That world is here, and it's called Ajax! <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX">Asynchronous JavaScript and XML (Ajax)<a/> is a technique that is used in web applications. It provides a way to retrieve content from a server and display it without having to refresh the entire page.

In the background, requests are made to a web API using JavaScript. As developers we can then choose to alter the displayed HTML based on the responses from the web API. 

And the new era in the web was born called <a href="https://en.wikipedia.org/wiki/Web_2.0">Web 2.0</a>. 

Typically, AJAX requests are made to web-based APIs, or application programming interfaces. In general, an API is a specification allowing two systems to communicate. 

For instance, the jQuery library provides an API for DOM manipulation and traversal. A web-based API, then, is one that allows clients to get data from servers on the web. Many companies provide public web APIs that you can build on top of; for example, you can access census data via an API provided by the government, New York Times articles via their API, or you can include messaging and voice calling in an application using the Twilio API.

### Twitter Infinite Scroll 

After you log in, Twitter sends back an HTML file that contains an initial batch of tweets, along with references to other resources the page requires (CSS, JavaScript, and image files). By the time you're scrolling through the timeline, typically the page will have fully loaded, and the JavaScript application layer will be running. That application can detect when you're nearing the bottom of the timeline, and when it sees this happen, it makes a request to the Twitter API for more tweets to display. 

The server responds with JSON data representing additional tweets. The application then inserts the data from these tweets at the bottom of the page, typically before you've reached the bottom. From the standpoint of the end user, there's an unending stream of tweets to read as they scroll down. But behind the scenes, the app is making an asynchronous request for more data and inserting that data into the DOM as it becomes available.

### Anatomy of Request and Response Messages

In the client-server model, web clients make requests to servers, which send back responses, which the client then consumes. These requests and responses are also referred to as HTTP messages. HTTP being a set of rules governing how clients and servers interact.

These rules require request and response messages to be structured in a specific way:

![HTTP-Messages](images/http_messages.png)

HTTP messages are broken up into 4 parts:

1. start-line: a high-level description of the message
2. HTTP headers: details describing the message
3. empty line: space to separate the meta-data from the body of the message
4. body: the data included in the message

### Request Messages

GET tells the server what the request is trying to do - get a resource. The start-line in our example tells the server, “I want to get the resource at /,” and that / is the website’s homepage or root. GET is one of several HTTP methods that describe what a request is trying to do. 

![HTTP-Messages](images/request_types.png)

Notice the operations in the second column. These are known as “CRUD operations.” When folks refer to a CRUD app, they mean one that can create, read, update, and delete resources.

These 4 are not the only HTTP methods, but they’re the most important ones for you to know about right now.

### Response Messages

 The start-line in the response says HTTP/1.1 200. The first half of this line (HTTP/1.1) tells the client that the response follows HTTP rules, version 1.1. The second half (200) is the HTTP status code, which tells us the status of our request. The 200 code in this example tells us that the request was successful. Not all requests succeed though, and the status codes can help us understand what went wrong.

There are many different response status codes, but here are a few of the most common:

- 200 OK - The request succeeded
- 201 Created - The request succeeded and a resource was created
- 401 Unauthorized - The request requires authentication
- 404 Not Found - The server has not found any resource matching the request URL
- 500 Internal Server Error - The server encountered an unexpected condition that prevented it from fulfilling the request

### AJAX Dependencies

AJAX relies on several technologies:

- Things called Promises
- Things called XMLHttpRequestObjects
- A serialization format called JSON
- Asynchronous Input / Output
- The event loop

### JavaScript XHR

The <a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a> object, or XHR, was the <strong>first</strong> JavaScript API to allow transfer of data between a client and a server in the browser. 

XMLHttpRequest was named at a time when XML was all the rage, but it can be used
with any type of data, including JSON, which is the current de facto standard.

> **Definition:** JSON stands for JavaScript Object Notation. Browsers and
> servers are only able pass strings of text to each other. By using JavaScript
> Object Notation, we can structure this text in a way that a browser or server
> can read as a regular JavaScript object.

### Using XHR to Get Data from a Server

We're going to be making a simple Github repository browser using the
[Github API][api].

> **Definition:** API stands for [Application Programming Interface][api_wiki].
> In this course, we are working specifically with web APIs, which are sets of
> tools or protocols that allow us to communicate with a resource hosted on a
> remote server. In this lesson, we're communicating with GitHub using the
> protocols they've defined in their documentation.

#### Creating the XHR Request

The first thing we want to do is get a list of our public repositories. A
little research on the [Github List Repositories API][user_repos] tells us
we can request a user's public repositories via a `GET` request to `https://api.github.com/users/:username/repos`.

First, let's add a link to our HTML so we can trigger the request.

```html
<div>
  <h3>Repositories</h3>
  <a href="#" onclick="getRepositories()">Get Repositories</a>
</div>
```

Then let's create our `getRepositories` function and initiate our XHR request.

```js
function getRepositories() {
  const req = new XMLHttpRequest();
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}
```

Here, we're creating a new instance of an `XMLHttpRequest`. We call `open` with
the HTTP verb we want, in this case `GET`, and the URI for the request.

Now that our request is set up and ready to go, we call `send` to make it happen.

Now that we have the request part down, we need to figure out how to capture
this response so we can do something with it.

#### Handling the XHR Response

The second part of XHR is handling the response once we've made the request. We
do this by defining an event listener on the request to `listen` for the `load`
event, which will tell us that the request is complete. We'll give this listener
a _callback function_, which is a function that will get called when the
event fires.

```js
function showRepositories() {
  //this is set to the XMLHttpRequest object that fired the event
  console.log(this.responseText);
}

function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}
```

When we add the event listener to our `req` object, we set it up so that `this`
will be our `req` object inside our callback function. So, inside
`showRepositories`, we can access `this.responseText` to see the full body of
the response from our XHR request.

Now that we know how to access the response, let's do something with it.

#### Parsing the XHR Response

Since the Github API deals strictly in JSON, we know that our response will be
well-formed JSON, so it should be easy for us to work with.

Let's parse this response and list out the repositories on the page. We'll
start by giving ourselves a place in the DOM to put the data.

```html
<div>
  <h3>Repositories</h3>
  <a href="#" onclick="getRepositories()">Get Repositories</a>
  <div id="repositories"></div>
</div>
```

Then let's start by simply listing the repository names.

```js
function showRepositories() {
  console.log(this.responseText);
  let repoList = '<ul>';
  for (let i = 0; i < this.responseText.length; i++) {
    repoList += `<li> ${this.responseText[i]['name']} </li>`;
  }
  repoList += `</ul>`;
  document.querySelector('#repositories').innerHTML = repoList;
}
```


### Callbacks

If we look at our last example, the Ajax request completed very quickly, but
this won't always be the case. If we request data from a slow server over a
slow internet connection, it might take multiple seconds to get a response.
Using a callback allows our code to make our request and continue doing other
things until the request completes.

Ajax follows an asynchronous pattern, which makes Ajax requests *non-blocking*.
This means we don't sit around and wait for the request to finish before
running the rest of our code. We set callbacks and then fire and forget. When
the request is complete, the callbacks are responsible for deciding what to do
with the returned data.

To make this concept stick, let's look at a real world example. When you put
food into a microwave, you don't stand there and wait for the food to finish
cooking. Okay, well, I do. Just in case.

![microwave](http://i.giphy.com/xLIwD85C0z9D2.gif)

But even if you stand there, you can do other things. You probably pick up your
phone, look at Instagram, read some text messages, and, of course, work on
[Learn](https://learn.co). Basically, you are doing other things while the
microwave takes care of cooking your food.

When the food is cooked, the microwave beeps, and you remove the food and eat
it. This final step of removing the food and eating it is exactly how our
callbacks work. One thing to note: as we wait for our food, we don't check if
it's done every 5 seconds (again, I do because I'm very hungry, but I don't
*have* to). We wait until the beep tells us it's done. Checking every 5 seconds
is called *polling*, and it's a lot less efficient than waiting for the beep,
which is our *callback*.

## Handling Problems

So far, we have been dealing with successful API requests. But things don't
always go according to plan. What happens if the API we are using doesn't
respond? Or if we attempt to retrieve a resource that doesn't exist?

This can happen when API requests are based on user input. Let's go back to the
GitHub API where we are retrieving commits. Imagine we want to retrieve a
specific commit using a SHA.

Postman:
`https://api.github.com/repos/jquery/jquery/commits?sha=8f447576c918e3004ea479c278c11677920dc41a`
> Returns success.

Postman error:
`https://api.github.com/repos/jquery/jquery/commits?sha=fake-SHA`
> Returns a 404 not found.

A good developer will make sure to handle these unexpected events gracefully
when using Ajax. We can provide multiple callbacks when using jQuery: one to
handle a successful response and one to handle when an error occurs.

Let's add this inside our document ready function. Then, open the inspector,
and reload the page.

```javascript
$.get("this_doesnt_exist.html", function(data) {
  // This will not be called because the .html file request doesn't exist
  doSomethingGood();
}).fail(function(error) {
  // This is called when an error occurs
  console.log('Something went wrong: ' + error);
});
```

We chained an additional call to `fail` on the end of our request. We passed a
callback function to the method that will run only if an error occurs. In our
example, we logged the error to the console, but in a real world situation you
might want to try to fix the issue or inform the user.

Note that it doesn't matter what you call `data` and `error` in the above
examples — the only thing that matters is the order of the arguments. In the
callback to `get()`, the first argument is going to be the data that the server
sent back, so it makes sense to call it `data` — but we could just as well call
it `response`. Similarly, the first argument to `fail()`'s callback is an error
object, so we should probably give it a descriptive name like `error` (but we
  don't have to).

This is another example of how we could use jQuery to perform an Ajax request.

```js
var url = "https://api.github.com/repos/rails/rails/commits?sha=82885325e04d78fb7ec608a4670164d842d23078";

$.get(url)
  .done(function(data) {
    console.log("Done");
    console.log(data);
  });
```

Note: The callback that gets passed into `.done`  gets `data` as an argument.
`data` represents the response returned from the API. jQuery handles passing in
that `data` object to the callbacks. This is essential to our fire and forget
technique. We don't have to sit around and wait for the API to give us a
response. Instead, we tell jQuery that when it receives a response to please
pass it along to our callbacks so they can handle it accordingly.

## Additioanl Resources



