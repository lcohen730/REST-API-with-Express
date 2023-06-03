# Items API with Express
**Practical Homework for General Assembly Software Engineering Immersive**

**Goal:** To create a REST API using Express.js to strengthen my understanding of HTTP, REST, and Express.js.

To start the application, go to the route '/items'.

This should display the Index page of all items that have been created. To create new item, click "Create a New Item Here".

This will bring you to the New Item page. You can create a new item by filling in the "name" and "price" fields. No dollar sign necessary, as it will be filled in automatically.

When you click the "Create Item" button, you will be sent to the Show Item page for that specific item you just created, and it will list the name of the item and its price. On this page you will have the option to edit the item or delete the item by clicking on those respective buttons, or you can click the "Go Back to Index Page" button to be sent back to the main index page and see the item you just created, along with any other items you have created in the past, less any items you have deleted. All items listed on the Index page will be updated with any edits you may have made.

And that's it! The items are currently being stored in a MongoDB database.