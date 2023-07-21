# Blog Site with Full CRUD Functionality using json-server
blog site created with JSON server

This blog site demonstrates full CRUD (Create, Read, Update, Delete) functionality using HTML, CSS, JavaScript, and a JSON server to handle data storage. It allows users to perform the following actions:

**Read Posts**: Users can view a list of existing blog posts on the home page.
**Read Individual Post**: Users can click on a post to view its full content and comments.
**Create Post**: Users can create new blog posts by filling out a form with a title, content, and author name.
**Update Post**: Users can edit and update the content of an existing blog post.
**Delete Post**: Users can delete a blog post, along with all its associated comments.

The project serves as a comprehensive example of how to build a blog site with full frontend and backend functionality using JSON server as a mock backend.

## Prerequisites

Before running the blog site, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- JSON server (a simple mock REST API server)

## Installation

1. Clone this repository to your local machine:

`git clone https://github.com/SamuelUkachukwu/json-server.git`

2. download and install Node.js on your local machine.
Go to the official Node.js website: [Download Node](https://nodejs.org/en/download)

3. install json server globally on local machine.
Open terminal or command prompt as administrator then run:
`npm install -g json-server`

## Usage
### Starting the JSON Server
Before running the blog site, we need to start the JSON server to handle data storage.

run code `json-server --watch data` in a terminal.

The blog site will be accessible at `http://localhost:5500`.

### Features
1. **Read Posts**: The home page displays a list of existing blog posts, showing their titles and truncated content. Users can click on a post to view its full content and comments.

2. **Read Individual Post**: When users click on a specific post, they are directed to the individual post page. Here, they can read the complete content of the post and view comments.

3. **Create Post**: Users can create new blog posts by clicking on the "New Post" button and filling out a form with a title, content, and author name. The new post will be added to the list of existing posts.

4. **Search Post**: The blog site also provides a search functionality that allows users to find specific blog posts based on their titles or content. The search feature enhances the user experience by making it easy to discover relevant posts quickly.

5. **Delete Post**: Users can delete a blog post by clicking on the "Delete" button on the individual post page. This action removes the post and all its associated comments from the database.

## Technologies
The blog site is built using the following technologies:

- HTML
- CSS
- JavaScript
- JSON server (as a mock backend)

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a GitHub issue and/or create a pull request.

1. Fork the repository.
2. Create your feature branch: git checkout -b feature/YourFeature
3. Commit your changes: git commit -m 'Add some feature'
4. Push to the branch: git push origin feature/YourFeature
5. Open a pull request.