# Week 5

## jQuery



## AJAX

## JavaScript XHR

The XMLHttpRequest object, or XHR, is a JavaScript API that allows us to
transfer data between a client and a server. This makes it possible to request
and receive web page updates without refreshing, leading to an improved
experience for users. In this lesson, we will be exploring the use of XHR by
using it to access GitHub.

## Objectives

1.  Explain how XHR helps us write dynamic programs
2.  Practice initializing an XHR request
3.  Practice handling an XHR response
4.  Understand how JavaScript fetches data from remote resources

## XMLHttpRequest

XMLHttpRequest was named at a time when XML was all the rage, but it can be used
with any type of data, including JSON, which is the current de facto standard.

> **Definition:** JSON stands for JavaScript Object Notation. Browsers and
> servers are only able pass strings of text to each other. By using JavaScript
> Object Notation, we can structure this text in a way that a browser or server
> can read as a regular JavaScript object.

XHR helps us write dynamic programs by allowing us to fetch data from a server
based on user events, and update parts of pages without requiring a full-page
refresh. This provides users with a smooth, engaging experience that doesn't
require them to stop what they're doing to get new information.

## Using XHR to Get Data from a Server

We're going to be making a simple Github repository browser using the
[Github API][api].

> **Definition:** API stands for [Application Programming Interface][api_wiki].
> In this course, we are working specifically with web APIs, which are sets of
> tools or protocols that allow us to communicate with a resource hosted on a
> remote server. In this lesson, we're communicating with GitHub using the
> protocols they've defined in their documentation.

Code along in the provided `index.html` and `index.js` files. A basic HTML
structure is already in place. Getting data from a server via XHR happens in two
stages. First, we make a _request_, and then we listen for, and handle, the
_response_.

#### Creating the XHR Request

The first thing we want to do is get a list of our public repositories. A
little research on the [Github List Repositories API][user_repos] tells us
we can request a user's public repositories via a `GET` request to `https://api.github.com/users/:username/repos`, so let's try it out.

**Top-tip:** API documentation will often use a colon to precede a dynamic
value in a RESTful URL, like `:username`. That's your hint to supply your own
value.

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

Let's open `index.html` in our browser, open the inspector's `Network` tab, and
click the link.

Something happened! If we examine the request in the inspector, we should see a
response that looks something like this:

```js
[
  {
    id: 18221276,
    name: 'git-consortium',
    full_name: 'octocat/git-consortium',
    owner: {
      login: 'octocat',
      id: 583231,
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=3',
      gravatar_id: '',
      url: 'https://api.github.com/users/octocat',
      html_url: 'https://github.com/octocat',
      followers_url: 'https://api.github.com/users/octocat/followers',
      following_url:
        'https://api.github.com/users/octocat/following{/other_user}',
      gists_url: 'https://api.github.com/users/octocat/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/octocat/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/octocat/subscriptions',
      organizations_url: 'https://api.github.com/users/octocat/orgs',
      repos_url: 'https://api.github.com/users/octocat/repos',
      events_url: 'https://api.github.com/users/octocat/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/octocat/received_events',
      type: 'User',
      site_admin: false
    }
  }
  //... more!
];
```

It worked! We successfully fetched data from a remote resource with XHR without
reloading our page!

Now that we have the request part down, we need to figure out how to capture
this response so we can do something with it.

#### Handling the XHR Response

The second part of XHR is handling the response once we've made the request. We
do this by defining an event listener on the request to listen for the `load`
event, which will tell us that the request is complete. We'll give this listener
a _callback function_, which is simply a function that will get called when the
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
  for (var i = 0; i < this.responseText.length; i++) {
    repoList += '<li>' + this.responseText[i]['name'] + '</li>';
  }
  repoList += '</ul>';
  document.getElementById('repositories').innerHTML = repoList;
}
```

Now if we reload and click our link...

Okay not quite what we expected. While it might be fun to have a list of a
million `undefined` values on a page, we got repositories to print out. What
happened?

The key lies in the `responseText` property. We can look at it and understand
that it's JSON, but to our JavaScript interpreter, it's just a string of text.
And while we _know_ that all JSON is just a string of text, we have to _tell_
JavaScript that it's working with JSON.

The way we tell the interpreter that we're working with JSON is to parse it with [`JSON.parse`][parse].

```js
function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(r => '<li>' + r.name + '</li>')
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}
```

Now we're properly parsing the text into an array of objects that we can work
with. If we reload and try it again, we should get our list of repository names.

Okay, let's take this a step further and set ourselves up to make another XHR
request based on our data.

We want to be able to list the commits for any given repository. Again, we
don't want to just re-query the server for each repository as we're processing
that data, we just want to respond to the user asking for a specific repo's commits.

Let's go back into the Github API docs for [commits][commits] and check it out.

We can see that we can make another `GET` request to
`/repos/:owner/:repo/commits` and list the commits. We have the repo name to
fill in for the `:repo` parameter based on our repo list. Let's say "repo" a
few more times for fun then see what we can do.

We know we'll need an element to click for each repository on our page that
will request that repository's commits. So we'll need to add a "Get Commits"
link to our output in `showRepositories`, make a new XHR request when that link
is clicked, and then show the commits in the second column.

We'll start by adding the link to our repository output.

```js
function showRepositories() {
  var repos = JSON.parse(this.responseText);
  console.log(repos);
  const repoList = `<ul>${repos
    .map(
      r =>
        '<li>' +
        r.name +
        ' - <a href="#" data-repo="' +
        r.name +
        '" onclick="getCommits(this)">Get Commits</a></li>'
    )
    .join('')}</ul>`;
  document.getElementById('repositories').innerHTML = repoList;
}
```

Let's look more closely at this line: `r.name + ' - <a href="#" data-repo="' + r.name + '" onclick="getCommits(this)">Get Commits</a></li>'`.

The first interesting thing is that we're using a [data attribute][data]
to hold the repo name. Data attributes make it super easy to pass data around
between DOM elements and JS, so rather than jump through hoops trying to set
and query `id` attributes, we'll do this.

The second thing is our `onclick` is explicitly passing `this` to the
`getCommits` function. We need to do this to make sure that the current
element, that is, the link being clicked, is available to our `getCommits`
function so that we can get at that data attribute later.

Now that that's out of the way, let's set up our `getCommits`. It's going to
look very similar to `getRepositories`, because it's mostly about just making
another XHR request to Github.

```js
function getCommits(el) {
  const name = el.dataset.repo;
  const req = new XMLHttpRequest();
  req.addEventListener('load', showCommits);
  req.open('GET', 'https://api.github.com/repos/octocat/' + name + '/commits');
  req.send();
}
```

Here we grab that `data-repo` value through the `dataset` property, then set up
an XHR request, with an event listener and callback function, just like we did
in `getRepositories`.

Let's create a place in our HTML to put the commits.

```html
<div>
  <h3>Commits</h3>
  <div id="commits"></div>
</div>
```

Finally, let's handle that request with our callback function. We can look at
the docs for this API call to see the JSON structure and know what values we
want to pull out, then display them on the page.

```js
function showCommits() {
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${commits
    .map(
      commit =>
        '<li><strong>' +
        commit.author.login +
        '</strong> - ' +
        commit.commit.message +
        '</li>'
    )
    .join('')}</ul>`;
  document.getElementById('commits').innerHTML = commitsList;
}
```

Reload it and check it out. Now we can load repositories, then see commits for
any repository dynamically without refreshing the page or reloading the
repository list!

## Summary

We learned what the `XMLHttpRequest` object does, how to use it to request data
from a remote resource, and how to handle the response. We also learned how to
parse the `responseText` into JSON and display it on the page.

## Resources

- [MDN: XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [GitHub API](https://developer.github.com/v3/repos/#list-user-repositories)
- [MDN: JSON.Parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [MDN: Using data attributes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes)

[api]: https://developer.github.com/v3/repos/
[user_repos]: https://developer.github.com/v3/repos/#list-user-repositories
[parse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
[data]: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes
[commits]: https://developer.github.com/v3/repos/commits/
[api_wiki]: https://en.wikipedia.org/wiki/Application_programming_interface

# AJAX and Callbacks

## Objectives

- Explain what an API is and why it's used
- Explain what Ajax is and why it's used
- Make a get request using Ajax to append text to a page
- Explain what a callback is and why Ajax runs asynchronously

## Introduction

In JavaScript, we can use `XMLHttpRequest` directly to access remote data or
web APIs, but it requires us to do a lot of lower-level wiring to get
everything working. Now we're going to take a look at the Ajax capabilities of
jQuery, which abstracts the XHR code into a nice, higher-level package.

##  and the GitHub API (done)

We interact with web APIs through a set of URLs. Each URL defines a resource
that we request or take action on.

Rather than just talk about it, let's get our hands dirty and explore an API.
To do this, we're going to use a tool called Postman. Postman is an easy to use
app that lets us make web requests for testing. It easily allows us to interact
with web APIs. For our exercise, we are going to work with the GitHub API to
retrieve information about the jQuery GitHub repository. To get started we need
to setup Postman.

#### Postman Installation

1. Visit https://www.getpostman.com, download and install the app.
2. Once you have it installed, open Postman.
3. Skip the signup and go straight to the app.

Great!  Now you're all set up to make your own API requests. As you know,
jQuery is a large open source project with many contributors. Those
contributors make a hefty amount of commits. The GitHub API allows us to
retrieve the list of commits made to the jQuery repository.

At this point Postman should be loaded and ready to go:

* Enter **https://api.github.com/repos/jquery/jquery/commits** in the URL textbox.
* Click the **Send** button.

Once the request finishes, Postman will display the results. Does this format
look familiar?  If you said JSON (JavaScript Object Notation), then give
yourself a pat on the back. What we're looking at is a JSON list of all the
commits made to the jQuery repository. Each hash in the array has an author
key. Do you recognize any of the committers?  If not, let's try to narrow the
results returned from the GitHub API.

GitHub exposes a way for us to do this using HTML parameters. By changing the
URL slightly to include the `author` parameter, we can ask the GitHub API to
return only the commits made by John Resig (bonus points if you know who this
  is).

Let's add `?author=jeresig` to the end of the URL and see how the results
change.

Go back to Postman and perform the following:

* Enter **https://api.github.com/repos/jquery/jquery/commits?author=jeresig**
* Click the **Send** button.

As you can see, getting data from an API is pretty easy. But we haven't really
said what an API is.

## Defining APIs

For the purpose of this lesson, we are mostly concerned with web APIs. But the
term API actually has a more broad meaning.

> In computer programming, an application programming interface (API) is a set
of routines, protocols, and tools for building software and applications. - Wikipedia

In its simplest form, an API in relation to object-oriented programming is a
class and the list of methods we define for that class. When creating a class,
we are defining a guidebook on how to interact with other parts of the code. We
get to decide which methods and variables are public or private, essentially
controlling how to interact with the class.

When we apply this concept to the web, we get web APIs like the GitHub and
Twitter API. From our Postman experiment, we saw how GitHub provides a way for
us to interact with the data on their system. Just like how a class provides a
set of public methods to interact with, web APIs provide us with URLs.

The list of URLs that GitHub provides on https://developer.github.com/v3 act as
the public methods into their system. The developers that created the API
control which resources they want to share and who has access to them. In the
end it's all just the same data available on GitHub.com. The big difference is
that the GitHub API forgoes the HTML/CSS/JavaScript that makes up GitHub.com
and serves up pure data, which is the only thing our applications need.

## Ajax

Wouldn't it be nice if page refreshes didn't exist? What if we could do
multiple things at once from a single web page? In a perfect world we could
type into a search textbox and have searches performed in the background as we
type. That world is here, and it's called Ajax! Asynchronous JavaScript and XML
(Ajax) is a technique that is used in web applications. It provides a way to
retrieve content from a server and display it without having to refresh the
entire page.

Modern dynamic applications provide a better user experience by allowing users
to manipulate data on the server and see the results without having to refresh
the page. This is the power of Ajax in action. In the background, requests are
made to a web API using JavaScript. As developers we can then choose to alter
the displayed HTML based on the responses from the web API.

When you've used `XMLHttpRequest` directly to query an API like GitHub to
dynamically update your page, you've been using Ajax. With jQuery, we have a
set of Ajax-related functions to make that even easier.

Let's try an example. You have an `index.html` file with a basic structure.
Let's add a reference to jQuery so we can use it.

```html
<body>
  <p id="sentences">
    Loading our page...
  </p>
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script src="script.js"></script>
</body>
```

There's also a `sentence.html` file. Let's add some data to it.

```html
<p>Ajax is a brand of cleaning products, introduced by Colgate-Palmolive in
  1947 for a powdered household and industrial cleaner.</p>
<p>It was one of the company's first major brands.</p>
```

Now in our `script.js`, let's use the jQuery `get()` function to make a `GET`
request to our `sentence.html` data.

**Note:** Remote data can come from anywhere — even your own server! Remote
just means it isn't directly included in the current page.

```js
// We should wait for the page to load before running our Ajax request
$(document).ready(function(){
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("sentence.html", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    $("#sentences").html(response);
  });
});
```

Let's load up `index.html` and see what happens!

Okay. Not a whole lot.

We actually need to serve this page from an HTTP server rather than load
it directly in our browser. At the console, run the following command: `python
-m SimpleHTTPServer`. If you're using the Learn IDE, use: `httpserver`.

This starts a simple server that will serve our files over HTTP. You need to
start a server instead of just opening up `index.html` in the browser because
of the browser enforced same-origin policy. To prevent security risks, the
browser enforces a same origin policy. A different origin can be interpreted as
a different domain, different protocol, and a different port.

When you open up  `index.html` by right clicking on the file, the site opens
with `file://`. Same-origin policy only allows HTTP, data, chrome,
chrome-extension, HTTPS, chrome-extension-resource protocols. Ajax uses HTTP
requests and thus must interact with HTTP protocol in the browser.

Browse to [http://localhost:8000](http://localhost:8000/) and watch as the Ajax
request is made and the new data is added to our web page. Pretty cool! This
might all happen too quick to really notice anything, so you may want to have
your terminal window side by side with the browser window. This way you can see
the request hit our server.

We used the power of Ajax to load data from `sentence.html`. This same idea can
be applied to calling the GitHub API or another remote resource.

## Callbacks

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

## Resources

* [Application programming interface](http://en.wikipedia.org/wiki/Application_programming_interface)
* [jQuery.get()](http://api.jquery.com/jquery.get/)

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-ajax-callbacks-readme'>AJAX and Callbacks</a> on Learn.co and start learning to code for free.</p>


## Promises 

## Fetch API

## Additional Resources

- [jQuery Tutorial - Shay Howe](https://learn.shayhowe.com/advanced-html-css/jquery/)