1. caching enabled

 Basic AngularJS App

Overview:
For this exercise, you will need to create an AngularJS app that retrieves data from an online source and displays the results (consisting of posts, comments, and users) to the user (think of a forum).
The home page should have the list of posts from the server. The user should then be able to select individual posts and 'like' or 'favorite' them, and reflect this to the user by highlighting the row, or adding a badge to the result as a visual representation that it has been selected.
The page should keep track of which items have been 'like'd or 'favorite'd (it is understood that these will not be saved back to a server, so upon page refresh it will clear which results are selected).
The user should also be able to select the post title, and be taken to a post details page where the post is shown, along with the comments assigned to the post.
If the username is selected (from either the home page posts, or the post details page), the site should navigate to the user details page where all of the details of a user are displayed, as well as a list of posts that user has made.
The username should be able to be edited on this page (again, the change will not be actually be saved on the server, so upon page refresh it will clear the change).

Details:
	- Use this online source for retrieving fake data : http://jsonplaceholder.typicode.com/
		= in particular: /posts, /users, /comments
		= The given URLs should return 100 'posts', 10 'users', and 500 'comments'
		= review the returned data to see how they tie together
	- Site should have 3 pages
		= Home/Landing page
			* should be at the root URL '/'
			* should show the list of posts
			* each post should show the following
				$ post title
				$ post body
				$ 'username' of user who made post
				$ status of whether the post is 'like'd or not
			* the post title should link you to the post details page
			* the 'username' should link you the the user details page
		= User Details page
			* should use appropriate route (e.g. - '/user/123' or '/userDetails/123')
			* should show all details retrieved from fake data server pertaining to the given user
				$ the 'name' and 'username' properties of the user should be able to toggle from display mode to edit mode
				$ the edit of the name and/or username should be sent to the server when saved, and upon success message the UI should switch back to display mode (non-edit mode)
				$ if 'username' is edited, the change should be reflected on the home page and post details page for the given user
				$ NOTE: the fake data server allows you to POST/PUT updates, and will send back a response as if it saves the changes, but it doesn't actually change the data in the database.
          This allows you show correct handling of updating the server, without actually changing the data set. So upon page refresh, the original data set will be returned and changes will not persist.
			* should show a list of posts (only need to show the post title, not all details of post) that the given user has written
				$ each post title should link to the post details page for the selected post
		= Post Details page
			* should use appropriate route (e.g. - '/post/123' or '/postDetails/123')
			* should show the details of the selected post
			* should show if it has been 'like'd or not
			* should show the username of the user that created the post
				$ username should link back to the user details page
			* should show a list of the comments that have been made on the given post
				$ show the useful details of the comments in a presentable manner
	- The app should be written using AngularJS 1.6
	- The site should be responsive for any size browser, tablet, and phone display (Twitter Bootstrap)
		= if small design/visual 'quirks' show up on smaller screens, that is ok. Just looking for the general understanding of responsive web design
	- The app should utilize the AngularJS $http module and promises to pull data and display once retrieved
	- Utilize Twitter Bootstrap for styling (custom styling is not needed, but can be done if you so desire)
	- The app should display the results in a formatted presentation to the user
		= e.g. the title should be the focal point, and the body should be the secondary focus for each result

Expectations:
	- This exercise will be reviewed for your knowledge and implementation of the AngularJS standard practices
		= We will review your code to not only make sure that it works, but to view your coding style
		= We will review your code to see if you correctly utilized services, directives, and controllers, and that you understand asynchronous code
		= We will review your code to see if you structure your codebase in an organized manner (hint: not all in one file)
	- This exercise will be reviewed for your knowledge and implementation of CSS and responsive web design
		= We will review your code to see if you correctly utilized responsive web design techniques.
		= We will review your code to see if you implemented a nice visual style (no need to be perfect or extravagant, it is understood to be not 'production ready', but should look appealing and demonstrate your visual style)
	- Other than looking for your core understanding of the web development technologies (JS, AngularJS, CSS, HTML, etc..), we are looking at 'how' you achieve the working result. Aside from the core requirements, feel free to use your own creativity.