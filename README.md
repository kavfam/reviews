This is Brad Travesy's Svelte Crashcourse on Youtube with a "Likes" and JSON backend (credit to Dr Nauman / Udemy Svelte course). Both instructors very good.

if you download this, run npm install and you will have all dependencies.

This project is for ratings/reviews and basic to show off some features of Svelte, in particular Stores. In more than one course Ive seen Stores used for data, rather than putting data into objects/arrays in the main App.svelte file, but Stores are really much more than this. They are a dictionary of functions - see Dr Naumans course. 

That said, Stores are a good way of passing data around an app without having to dispatch custom events up the chain. They can also be accessed directly using $storename rather than importing, subscribing, unsubscribing, you can just prefix storename with $. And this automatically unsubscribes. Neat.

Brads course didnt have backend. Dr Ns course did - used json / json server. As Brads course already had a store, this made moving to a backend easier. To do this, the following was required (but you dont need to do any of this if you download and run npm install). Im just explaining the changes made to Brads course to accomodate the backend json server (as per Dr Ns course).

1. create an \extras folder with a db.json, with the contents in json format being the initial array that was first in App.svelte and then moved to FeedBackStore.js.
2. npm i json-server 
3. npx json-server extras/db.json
4. Open browser at localhost:3000/reviews    (assuming your db.json has "reviews" as first element) and you should see the contents of the json file.
5. in src, create subfolder \backend and in this folder create Api.js. This has async functions for fetchReviews, incLike (increments likes for review), deleteReview and addReview.
6. Changed what Brad had as stores.js to FeedbackStore.js (in folder arc/stores) and in thie file it returns functions within FeedbackStore for subscribe, update, AddNewReview, likeReview, delReview and loadReviews. These functions within FeedbackStore call their counterpart functions in Api.js to update the backend.
7. In Brads code you updated the store in FeedbackForm.svelte for adding. This now changes to call the FeedbackStore function addNewReview, which in turn calls the Api.js function addReview to update the backend. So, this was a simple change to handleSubmit. (I left the store update code, commented out for comparison). 
Similarly, the FeedbackItem.svelte handleDelete() updated the store when deleting an item. Commented out that code and made another small change there to instead call the FeedbackStore.delReview() function which in turn calls the Api.js deleteReview function which updates the json backend file.
In FeebackItem.svelte I added a Like button and this calls the FeedbackStore.likeReview() function, which, as you guessed, calls its counterpart in Api.js (deleteReview).

In short (says he with a smile as you just read the long), having used store, simplified the changes needed to move this to a backend. As mentioned, stores are much more than shown in Brads course and Dr Ns course takes them to another level by moving the functions of updating data into the store and again, with these in place, the final step to connect with the backend is simplified.

Next up two more great instructors with Svelte crashcourses, James Q Quick, Max Schwartzmiller.

Anyone else looking forward to SvelteKit 1.0?
