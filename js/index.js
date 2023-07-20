// javaScript for index.html
const container = document.querySelector('.blogs');

const renderPost = async () => {
    // Your asynchronous code here to render the post
    console.log("Rendering the post...");
    let url = "http://localhost:3000/posts/";

    const response = await fetch(url);
    // console.log(response)
    const posts = await response.json();
    // console.log(posts)
    let template = ' ';

    posts.forEach((post) => {
        // Build the template using the post
        template += `<div class="card blog-cards mb-4">
        <div class="card-body p-3">
        <h5 class="card-title"><strong>${post.title}</strong></h5>
        <p class="card-text">${post.excerpt}...</p>
        <p>Written By: <strong> ${post.author}</strong> in <strong>${post.category}</strong></p>
        <a class="btn btn-info" href="/details.html?id=${post.id}">read more...</a>
        <button href="#" class="btn btn-info">Delete post</button>
    </div>
    </div>`;
    });

    container.innerHTML = template;


};

document.addEventListener("DOMContentLoaded", () => renderPost());
