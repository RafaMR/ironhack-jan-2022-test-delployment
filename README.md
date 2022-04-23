# Meower


## Views

Home - Displays list of latest "meows"
Sign Up - Allows visitors to create an account.
Sign in - Allows users to sign in.
Meow creation - Display form which allows user to submit new "meow"
Single meow - Allows to read single meow. Allows creator to delete or edit meow.
Meow edit - Allows meow creator to edit single meow.
Profile - Allows meow creator to edit single meow.
Meow edit - Allows meow creator to edit single meow.

## Route Handlers

GET - '/' - Renders home page
GET - '/authentication/sign-up' - Renders sign up page
POST - '/authentication/sign-up' - Handels acc. registration
GET - '/authentication/sign-in' - Renders sign up page
POST - '/authentication/sign-in' - Handels existing user authentication
POST - '/authentication/sign-out' - Handels user sign out

GET - '/meow/create' - Handels existing user authebnication



// GET - '/meow/create' - Renders meow creation page
// POST - '/meow/create' - Handles new meow creation
// GET - '/meow/:id' - Loads meow from database, renders single meow page
// GET - '/meow/:id/edit' - Loads meow from database, renders meow edit page
// POST - '/meow/:id/edit' - Handles edit form submission.
// POST - '/meow/:id/delete' - Handles deletion.