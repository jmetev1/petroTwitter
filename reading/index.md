# ng-cast

Your company's CTO is undecided about the most appropriate front-end framework to use and wants to explore building the website using multiple technologies, before ultimately choosing the best one from several options. Your job is to build the the YouTube video broswer app using AngularJS. After completing the Bare Minimum Requirements, you'll be able to live-search, display, and play any video from YouTube.

![Video Player Demo](https://github.com/reactorcore/course.ng-cast/raw/master/assets/video-player.gif "Video Player Demo")

## High Level Goals of this Sprint

* Understand the importance, and experience the benefits of client side libraries by way of building with AngularJS
* Continue learning how to think about web apps as components
* Understand how the differences between AngularJS and React how each framework's strength might be used in future projects
* Continue to gain exposure interacting with a REST API (in this case, the [YouTube Data API](https://developers.google.com/youtube/v3/?hl=en))


## Thinking in Components

When building front-end applications, one very good approach is to break apart the functionality of the application into small, easily understandable and reusable pieces. We often call these pieces *components*, and in Angular specifically, we call them *directives*. Angular directives are custom HTML elements with super powers. When composed together in just the right way, these components work in concert to accomplish the goals of the application you are building.

The practice of teasing apart an application into small components lies somewhere in the spectrum between an art and a science. There are often several ways to accomplish the same goal, and the more artful approaches yield better quality code that is equally as simple. Through your own experiences -- both positive and negative -- you will develop skills to artfully navigate this terrain.

The specific extent of each component's super powers is another area that you will find challenging. With practice, you will learn how much power to give each element and be able to identify where to place code that implements those powers.

In this sprint, the decision about how to split the app into componenets has already been made for you. Each directive lives in its own file inside of the `src/components/` directory. During this sprint you will be building out these directives to correctly interact with each other and the YouTube Data API. Here's how they are organized:

![Video Player component layout](https://github.com/reactorcore/course.ng-cast/raw/master/assets/components.png "Video Player component layout")

* `app` - The top level container for the entire application. 
* `search` - Responsible for knowing and communicating information about the search input field
* `videoPlayer` - Responsible for playing a single video and displaying information about it
* `videoList` - A container component responsible for populating video list entry components
* `videoListEntry` - A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be shown in the `VideoPlayer` component

## Project set up

### npm

This sprint uses [npm](https://www.npmjs.com/) to manage its dependencies. npm comes bundled with Node, and is another JavaScript package manager that makes it easy for developers to share and reuse code. Even though npm started in the Node ecosystem, it is quickly becoming the default choice for sharing all types of JavaScript code.

If you're comfortable with other package managers such as Bower, you will feel right at home with npm:

* Run `npm install` to install your package dependencies
* npm's configuration file is `package.json`
* npm downloads packages into a folder called `node_modules` which is automatically created if it does not exist

Install this sprint's dependencies:

- [ ] [Install Node.js](https://nodejs.org/en/) if you haven't yet.
- [ ] Run `npm install`

### Live reloading server

In order to boost productivity when developing rich client side applications, this sprint uses a live development server to automatically refresh the browser page as you make changes to your source code.

Install [Live Server](https://github.com/tapio/live-server) from npm:

```bash
npm install -g live-server
```

Try it out:

- [ ] In a new Terminal tab, start the Recast.ly app by running `live-server`
- [ ] Make a change in one of the JavaScript files in the `src/` directory
- [ ] Be amazed as your browser should magically refresh with the compiled changes

*We'll be covering servers later in extensive detail. For now you can just run this command and ignore the complexity of what it means or how it works.*

### npm scripts

npm comes with a handy [scripting](https://docs.npmjs.com/misc/scripts) feature that lets you define shell commands inside of `package.json`. If you want to improve your application's build process, consider completing the following optional task:

- [ ] Write an npm `start` script that combines the previous two build steps together

## Bare Minimum Requirements

- [ ] Inside of `src/index.js`, render the `App` component to the DOM and explore the codebase to get an understanding of each component's responsibility
- [ ] Read [this guide](http://busypeoples.github.io/post/thinking-in-components-angular-js/) to learn more about thinking in components with AngularJS.

### Create a dynamic Video List component

When building out front-end applications, it can be productive to temporarily ignore the complexity of working with real data, and mock out "fake" data instead. [**Stateless functional components**](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components) make this easy because they render the same with "real" data from a live API or "fake" data from a file.

You're going to use the sample data in `src/data/exampleVideoData.js` to build out the stateless functional `VideoList` and `VideoListEntry` components.

- [ ] Include `src/data/exampleVideoData.js` in `index.html` so it can be used by your React components
- [ ] Pass `exampleVideoData` into the `VideoList` component
- [ ] Refactor the `VideoList` component to dynamically render one `VideoListEntry` component for each video object in `exampleVideoData`
- [ ] Refactor the `VideoListEntry` component to dynamically render based on the video object it receives
- [ ] Make sure the tests for `VideoList` and `VideoListEntry` are passing. You can open the tests with `npm test`

When it's all set up, you should see the titles, thumbnails, and descriptions of some React Tutorials on the page. If you notice a *Warning* in the console about a "unique 'key' prop", know that this has to do with [React's performance](https://facebook.github.io/react/docs/multiple-components.html#dynamic-children), but you can ignore it if you wish.

### Create a dynamic Video Player component

Videos are played by passing a source url to the `iframe` tag inside the `VideoPlayer` component. The video associated with the id included after `https://www.youtube.com/embed/` will get played. Because this is also a stateless functional component, we can build it out with our example data.

- [ ] Pass a single video from `exampleVideoData` into `VideoPlayer`
- [ ] Update `VideoPlayer` to play the video it is passed and display its title and descriptions
- [ ] Make sure the tests for `VideoPlayer` are passing. You can open the tests with `npm test`

### Hook together the Video List and Video Player components

Now it's time to make the stateless functional components interact. In React, sibling components can not directly access each other, so they need the help of a parent component to manage communication between them. In this case, `App` is the parent component for the sibling components `VideoList` and `VideoPlayer`.

- [ ] Refactor `App` into a [class component](https://facebook.github.io/react/docs/reusable-components.html#es6-classes) using ES6 classes
- [ ] Initialize the `state` of `App` to keep track of all the videos in the video list and the current video in the player. Pass this `state` down as props to its children components. Continue to use the example data.
- [ ] Make it so that when the title of a `VideoListEntry` is clicked, that video is displayed in the player. **Do not** add `state` to any of the functional components.
- [ ] Make sure all the active tests for `App` are passing. You can open the tests with `npm test`

### Set up interactions with the YouTube API

You'll need a developer key in order to access videos from the YouTube Data API. This is common practice with third party APIs because they want to keep track of who is accessing their data, enforce rate limits, and even sometimes make money. Access to the YouTube API is free, all you need is a Google Account.

- [ ] Go to Google's [YouTube API](https://console.developers.google.com/apis/api/youtube/overview)
- [ ] If prompted, select a project or create a new one. It doesn't matter what you name a new project
- [ ] Click `Enable` and then `Go to Credentials`
- [ ] Select `Web browser` from the drop-down and the `Public data` radio button
- [ ] Give your key any name, leave the optional field blank, and click `Create`.
- [ ] Make your key available to the rest of your application from a new file, `src/config/youtube.js`

### Create a reusable API helper

To search for YouTube videos, you'll use the API's [Search:list](https://developers.google.com/youtube/v3/docs/search/list) endpoint. To help keep your code organized, write a helper function that is solely responsible for interacting with this endpoint. In `lib/searchYouTube.js` fill out the `searchYouTube` function. It should:

- [ ] Use jQuery to send a `GET` request to the search endpoint. **This is the only time you should use jQuery in this sprint**
- [ ] Accept a `callback` function that is invoked with the videos array that is returned from hitting the endpoint
- [ ] Accept an `options` object with the following properties:
  - [ ] `query` - the string to search for
  - [ ] `max` - the maximum number of videos to get, which should default to 5
  - [ ] `key` - an authorized YouTube Browser API key
- [ ] Only `GET` embeddable videos
- [ ] Make sure all the tests for `searchYouTube` are passing. You can open the tests with `npm test`

### Initialize the app with live data

Before integrating live data, you should take a minute to appreciate how far you got with the `exampleVideoData`. Now you can tackle the complexity of starting to use actual data in isolation, and assuming the shape of the live data is the same as the data you mocked out, everything will continue working. If you made your helper correctly, this following section should be simple.

- [ ] As you've done with other modules, make `searchYouTube` available for consumption and pass it as a prop to your app
- [ ] Replace `exampleVideoData` from the initial `state` of `App` with empty initial values, appropriate to the type of values it is expecting
- [ ] Utilize the [`componentDidMount`](https://facebook.github.io/react/docs/component-specs.html#mounting-componentdidmount) lifecycle hook to render your app with live videos returned from `searchYouTube`
- [ ] Remove the `x` from the pending tests in `AppSpec.jsx`, and make sure all the `App` tests are passing. You can open the tests with `npm test`

### Implement live-search

Build out `Search` and update other components:

- [ ] As a user types into the input box, the `VideoList` and `VideoPlayer` components are updated with videos from the YouTube data API that match the value of the input
- [ ] Debounce ajax requests triggered by the `Search` component to occur *at most* once every 500ms. (Imagine if YouTube's API wasn't free :O)
- [ ] Make sure all the tests for `Search` are passing. You can open the tests with `npm test`

## Advanced Content

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

- [ ] Create a `VideoDetails` component that makes another request to the YouTube API and renders more complete video information to the page
- [ ] Create an auto-play toggle button that will automatically start playing the video selected from `VideoList`
- [ ] Give each video it's own unique url with the help of [React Router](https://github.com/reactjs/react-router)
- [ ] Refactor `searchYouTube` to use the [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) function to make HTTP requests, instead of `$.ajax`
- [ ] Refactor your application to use flux. [Redux](http://redux.js.org/) is a popular implementation of flux you might consider
- [ ] Use a module loader like [webpack](https://webpack.github.io/), or [SystemJS](https://github.com/systemjs/systemjs) and refactor to use ES6 `import` and `export` instead of exposing components to the `window` and adding them as `script` tags

## Resources

* The [Babel REPL](http://babeljs.io/repl/) shows you a ES5 representation of ES6/JSX code

* [Facebook's React Tutorial](https://facebook.github.io/react/docs/tutorial.html)
* [YouTube API](https://developers.google.com/youtube/v3/getting-started)
* [The AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
