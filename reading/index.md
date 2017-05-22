# ng-cast: YouTube with AngularJS

In this sprint you are going to work with another front-end framework. Your task is to rebuild the YouTube Video Player app using AngularJS.

**Typical Real-Life Scenario:** Your company's CTO is undecided about the most appropriate front-end framework to use and wants to explore building a website using multiple technologies before ultimately choosing the best one.

## AngularJS is Interesting in a Few Key Ways

- AngularJS uses a mix of standard and custom HTML elements and attributes that transforms standard HTML into HTML with superpowers.
- When using AngularJS, developers don't have to think about when to re-render or how to extract values from the DOM (for example, a developer does not need to query an input element to obtain its current value).
- AngularJS improves code quality and modularity because your modules never directly reference external dependencies. More precisely, AngularJS supplies dependencies to your modules in a way that decouples your code from any other code.

## High-Level Goals of This Sprint

* Continue learning how to think about web apps as components
* Develop an understanding of the differences between AngularJS and React, and an opinion on how each framework's strengths might be useful in future projects
* Continue to gain exposure to interacting with a REST API (in this case, the [YouTube Data API](https://developers.google.com/youtube/v3/?hl=en))

## Thinking in Components

When designing and building front-end applications, a good approach is to break the functionality of the application apart into small, easily understandable and reusable pieces, often called *components*. In many ways AngularJS is similar to React in that it uses custom HTML elements as a way to define components.

The constuct used to create components in Angular is called a *directive* (there are several types of directives, components are created using element directives). Angular's element directives are custom HTML elements with special powers. When composed together in just the right way, these components work in concert to accomplish the goals of the application you are building.

The practice of teasing apart an application into small components lies somewhere in the spectrum between an art and a science. There are often several ways to accomplish the same goal and more artful approaches tend to yield better quality code that is equally simple to understand. Through your own experiences -- both positive and negative -- you will develop skills to artfully navigate this terrain.

The specific extent of each component's capabilities is another area that you will find challenging. With practice, you will learn how much capability to give each element and be able to identify where to place code that implements those capabilities.

In this sprint, the decision about how to split the app into components has already been made for you. Each directive lives in its own file inside of the `src/components` directory. During this sprint you will be building out these directives to correctly interact with each other and the YouTube data API. Here's how they are organized:

![Video Player component layout](https://s3-us-west-2.amazonaws.com/sprint.content/course.ng-cast/components.png "Video Player component layout")

* `app` - The top level container for the entire application. 
* `search` - Responsible for knowing and communicating information about the search input field
* `videoPlayer` - Responsible for playing a single video and displaying information about it
* `videoList` - A container component responsible for populating video list entry components
* `videoListEntry` - A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be shown in the `videoPlayer` component

Notice that HTML for these components is not present within the file that defines a directive. HTML is stored in the `src/templates` folder. The names of the template files are named to match their corresponding directives.

## Project Set Up

### npm

This sprint uses [npm](https://www.npmjs.com/) to manage its dependencies. npm comes bundled with Node and is another JavaScript package manager that makes it easy for developers to share and reuse code. Even though npm started in the Node ecosystem, it is quickly becoming the default choice for sharing all types of JavaScript code.

If you're comfortable with other package managers such as Bower, you will feel right at home with npm:

* Run `npm install` to install your package dependencies
* npm's configuration file is `package.json`
* npm downloads packages into a folder called `node_modules` which is automatically created if it does not exist

Install this sprint's dependencies:

- [ ] [Install Node.js](https://nodejs.org/en/) if you haven't yet.
- [ ] Run `npm install`

### Live-Reloading Server

In order to boost productivity when developing rich client-side applications, this sprint uses a live development server to automatically refresh the browser page as you make changes to your source code.

Install [Live Server](https://github.com/tapio/live-server) from npm:

```bash
npm install -g live-server
```

Try it out:

- [ ] In a new Terminal tab, start the Video Player app by running `live-server`
- [ ] Make a change in one of the JavaScript files in the `src/` directory
- [ ] Be amazed as your browser should magically refresh with the compiled changes

*We'll be covering servers  in extensive detail later. For now you can just run this command and ignore the complexity of what it means or how it works.*

### npm Scripts

npm comes with a handy [scripting](https://docs.npmjs.com/misc/scripts) feature that lets you define shell commands inside of `package.json`. If you want to improve your application's build process, consider completing the following optional task:

- [ ] Write an npm `start` script that runs the instructions from the previous step

### Testing with Karma

Angular recommends the use of [Karma](https://docs.angularjs.org/guide/unit-testing) for testing. Karma runs tests by opening a browser window. Much like `live-server`, Karma watches for changes to your code and re-runs the tests automatically. Additionally, Karma provides a debug interface right from the test page! Like in previous sprints, use `npm test` to run tests. When the browser opens, Karma only displays a summary. To see the actual tests, click `debug`.

## Try the Problem Tutorials

During the "Try the Problem" phase, work through as many of the following tutorials as you can. If you can't get through everything -- that's ok -- it's best not to use up time devoted to pairing for these tutorials.

- [ ] [A simple 'Hello World' Tutorial](http://viralpatel.net/blogs/angularjs-introduction-hello-world-tutorial/)
- [ ] [ng-newsletter Tutorial Part 1](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html)
- [ ] [ng-newsletter Tutorial Part 2](http://www.ng-newsletter.com/posts/beginner2expert-scopes.html)
- [ ] [ng-newsletter Tutorial Part 3](http://www.ng-newsletter.com/posts/beginner2expert-data-binding.html)
- [ ] [ng-newsletter Tutorial Part 4 -- skip 'Directives in our app' ](http://www.ng-newsletter.com/posts/beginner2expert-directives.html)
- [ ] [ng-newsletter Directives Tutorial](http://www.ng-newsletter.com/posts/directives.html)

## Bare Minimum Requirements

Your ultimate goal is to build a working app that looks like the one in the animated gif below, using the included tests as your guide. After completing the Bare Minimum Requirements, you'll be able to search, display, and play any video from YouTube.

![Video Player Demo](https://s3-us-west-2.amazonaws.com/sprint.content/course.ng-cast/video-player.gif "Video Player Demo")

### Initial Steps

- [ ] Explore the codebase to get an understanding of each component's responsibility. Relate the code you see to the previous diagram and ensure you understand how the components relate to each other. An essential aspect of this first step is to understand the HTML for each component too.
- [ ] Inside of `src/components/app.js`, write the directive code that will render this component to the DOM. Not all of the tests in `appSpec` are pertinent at this time. Be sure to follow the MVP practice, that is writing the minimum code at each step.

### Configure Mocked Data

When building out front-end applications, a hightly productive technique is to temporarily ignore the complexity of working with real data (via an API) by making use of "mocked" sample data. For the next several steps, you're going to use the sample data contained in `src/data/exampleVideoData.js`.

- [ ] Include `src/data/exampleVideoData.js` in `index.html` so it can be used by your application

### Create a Dynamic Video List Component

Your first goal is to build the `videoList` component and its partner component, `videoListEntry`, that together render whatever list of videos is supplied to them. When it's all set up, you should see the titles, thumbnails, and descriptions of some Angular Tutorials on the page.

- [ ] Pass the data from `exampleVideoData` into the `videoList` component
- [ ] Refactor the `videoList` component to dynamically render one `videoListEntry` component for each video object in `exampleVideoData`, passing in the video data to `videoListEntry`
- [ ] Refactor the `videoListEntry` component to dynamically render based on the video object it receives
- [ ] Resolve the issue show in the console: `GET <funny-looking-url> 404 (Not Found)`
- [ ] Make sure the tests for `videoList` and `videoListEntry` are passing. You can open the tests with `npm test`

At this point you might notice that your app appears to be working correctly but you might be having a hard time getting your tests to pass. If you made use of `$scope` in your controller you are making use of an outdated AngularJS design pattern.

AngularJS strongly recommends the use of `controllerAs` along with `bindToController` when building directives. This technique allows you to reference the scope from with your view templates explicitly, using the name you supply, instead of the commonly misused "implied binding" technique (which is often viewed as mysterious). It is highly recommended that you take the time to read [this guide](https://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html) to learn more about `controllerAs` and why this is the preferred syntax.

- [ ] Modify your directive to make use of the `controllerAs` syntax. In order to pass the tests, you must call your scope variable `ctrl`. If you are unable to make this work, you may optionally remove the reference to `ctrl` from the tests.

### Create a Dynamic Video Player Component

Next, do the same thing with the `videoPlayer` component, i.e., have the component render whatever video is supplied to it.

YouTube videos are played by passing a source url to the `iframe` tag inside the `videoPlayer` component. The video associated with the id included after `https://www.youtube.com/embed/` will get played.

- [ ] Pass a single video from `exampleVideoData` into `videoPlayer`
- [ ] Update `videoPlayer` to play the video it is passed and display its title and descriptions
- [ ] Continue to use the `controllerAs` syntax for all directives. Refactor to `controllerAs` if you did not initially implement your `videoPlayer` in this way.
- [ ] Make sure the tests for `videoPlayer` are passing. You can open the tests with `npm test`

### Hook the Video List and Video Player Components Together

Now it's time to make these two components interact. When you are finished with this section, the `videoList` component will be interactive, meaning that when you click on a video title, that video will be shown in the `videoPlayer` component.

In most MVC architectures, sibling components should not directly access each other, so they need the help of a parent component to manage communication between them. In this case, `app` is the parent component for the sibling components `videoList` and `videoPlayer`.

- [ ] Initialize the internal state of `app` to keep track of all the videos in the video list and the current video in the player. Pass this information down to its children components, `videoList` and `videoPlayer`. Continue to use the example data.
- [ ] Devise a way to receive the result of a click event inside of a `videoListEntry` so that when a title is clicked, that video is displayed in the player.
- [ ] Make sure all the tests for `app` are passing. You can open the tests with `npm test`
- [ ] Continue to use the `controllerAs` syntax for all directives. Refactor to `controllerAs` if you did not initially implement your `app` in this way.

### Set Up Interactions with the YouTube API

You'll need a developer key in order to access videos from the YouTube Data API. This is common practice with third party APIs because they want to keep track of who is accessing their data, enforce rate limits and even sometimes make money. Access to the YouTube API is free, all you need is a Google Account.

- [ ] Go to Google's [YouTube API](https://console.developers.google.com/apis/api/youtube/overview)
- [ ] If prompted, select a project or create a new one. It doesn't matter what you name a new project
- [ ] Click `Enable` and then `Go to Credentials`
- [ ] Select `Web browser` from the drop-down and the `Public data` radio button
- [ ] Give your key any name, leave the optional field blank, and click `Create`.
- [ ] Make your key available to the rest of your application from a new file, `src/config/youtube.js`

### Create a Reusable API Helper

It is common to encapsulate code that performs a specific API action into its own module. Upon completion of this step, you will have a reusable service for making queries to the YouTube API.

To search for YouTube videos, you'll use the API's [Search:list](https://developers.google.com/youtube/v3/docs/search/list) endpoint. To help keep your code organized, write a helper function that is solely responsible for interacting with this endpoint.

- [ ] In `services/youTube.js`, create an Angular service to fetch data from YouTube's API.
- [ ] Use the Angular provider `$http` to send a `GET` request to the search endpoint. **You should never use jQuery in this sprint**
- [ ] Accept a `callback` function that is invoked with the videos array that is returned from hitting the endpoint
- [ ] The `$http` provider should receive a `params` object with the following properties:
  - [ ] `query` - the string to search for
  - [ ] `maxResults` - the maximum number of videos to get, which should default to 5
  - [ ] `key` - an authorized YouTube Browser API key
  - [ ] Only fetch embeddable videos

### Implement Simple Search

Incorporate the `search` component into the application. After completing this step, the app will be capable of accepting a phrase in the input field and when the user clicks on the search button, the various components will update appropriately with the results obtianed from the YouTube API.

- [ ] Implement the `search` directive, making use of the YouTube service you just created.
- [ ] Devise a way to `app` to receive the result of performing a search operation whenever a user clicks on the button. Update all other views as a result of this operation.

### Initialize the App With Live Data

The last step will be to replace your mocked data with live data. To do this, the app should initialize itself by executing a "default" search and populating its components with the results of this search.

Before integrating live data, you should take a minute to appreciate how far you got with the `exampleVideoData`. Now you can tackle the complexity of starting to use actual data in isolation, and assuming the shape of the live data is the same as the data you mocked out, everything will continue working. If you made your helper correctly, this following section can be completed rather quickly.

- [ ] As you've done with other modules, make `youTube` available for consumption by your `app` component
- [ ] Replace `exampleVideoData` during the initialization of `app` with empty initial values, appropriate to the type of values it is expecting
- [ ] Invoke the `search` function and update the state of the app with videos returned from the `youTube` service

## Advanced Content

### Implement Live Search

Build out `search` and update other components:

- [ ] As a user types into the input box, the `videoList` and `videoPlayer` components are updated with videos from the YouTube data API that match the value of the input
- [ ] Debounce ajax requests triggered by the `search` component to occur *at most* once every 500ms. (Imagine if YouTube's API wasn't free :O)

## Code Cleanup

Make better use of Angular's dependency injection.

- [ ] Inline functions are difficult to test. If you used a controller function in any of your directives, refactor those directive so the controller functions are instantiated by Angular on an as needed.
- [ ] If you made use of the `youTube` service inside your `search` component, you have made your component very specific to one provider of content. Devise a way for your `search` component to receive it's provider from its parent component instead. Refactor as needed. Enable the test in `searchSpec` in the advanced content section.

## More Advanced Content

Our advanced content is intended to throw you in over your head, requiring you to solve problems with very little support or oversight, much like you would as a mid or senior-level engineer. The following problem is no exception, and you may have to do a fair amount of work to get enough context to get started on the problem itself.

- [ ] Allow your search component to respond to an `enter` key press
- [ ] Create a `videoDetails` component that makes another request to the YouTube API and renders more complete video information to the page
- [ ] Create an auto-play toggle button that will automatically start playing the video selected from `videoList`
- [ ] Give each video it's own unique url with the help of [Angular Router](https://docs.angularjs.org/api/ngRoute)
- [ ] Refactor to use AngularJS's `component` syntax. Update your tests to match as needed.
- [ ] Use a module loader like [webpack](https://webpack.github.io/), or [SystemJS](https://github.com/systemjs/systemjs) instead of adding modules as `script` tags

## Resources

* [AngularJS Directives (official docs)](https://docs.angularjs.org/guide/directive)
* [Component Based Thinking in AngularJS](http://busypeoples.github.io/post/thinking-in-components-angular-js/)
* [bindToController and controllerAs](https://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html)
* [YouTube API](https://developers.google.com/youtube/v3/getting-started)
* [The AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
