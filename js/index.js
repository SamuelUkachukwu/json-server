// javaScript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPost = async (term) => {
    // Your asynchronous code here to render the post
    console.log("Rendering the post...");
    // let url = "http://localhost:3000/posts/"; // if u just want the data to flow from top to bottom
    let url = "http://localhost:3000/posts?_sort=author&_order=desc";

    if(term){
        url += `&q=${term}`;
    }
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
    </div>
    </div>`;
    });

    container.innerHTML = template;


};

searchForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    renderPost(searchForm.term.value.trim())
})

document.addEventListener("DOMContentLoaded", () => renderPost());
