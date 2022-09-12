# expressBlogger

# assignment 

- Create two GET routes in ./routes/blogs.js
	- GET /blogs/all that will send the entire list of sample blogs in the HTTP response
		- _Remember_: Since route names concatenate with the blogs router code we added to app.js, we only need to name our new route "/all" in blogs.js. This is because all of the routes we will create in blogs.js will concatenate their route name with "/blogs" from the app.use('/blogs', blogsRouter); line of code in app.js. 
		- _Note_: It is good practice to send success: true in the response JSON
			- res.json({
					success: true,
					blogs: sampleBlogs
				});
	- GET /blogs/single/:blogTitleToGet that will send a single blog from the sample blogs in the HTTP response based upon the blog title passed into the url
- Create one DELETE route with a single route param blogTitleToDelete
	- DELETE /blogs/single/:blogTitleToDelete that will delete a single blog in the sample blogs based upon the blog title passed into the url
	- _Note_: Even though we are not sending any blog data back with this request, we still need to respond to the request. So we will res.json an object containing success:true.
- Create Postman requests for all of these routes and test to see that they work