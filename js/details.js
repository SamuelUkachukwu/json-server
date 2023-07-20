// javaScript for details.html
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector('.blog');
const containerTwo = document.querySelector('.blog-two');

const renderDetails = async () => {
    const response = await fetch('http://localhost:3000/posts/' + id)
    const post = await response.json()

    const template = ` <h4 class="my-3"><strong>${post.title}</strong></h4>
    <h6>Category <strong>${post.category}</strong></h6>
    <p class="p-3">${post.body}</p>
    <p class="p-3">Written By: <strong>${post.author}</strong></p>`;

    const templateTwo = `<img class="sticky-top"  src="${post.image}" alt="" style="width:100%">`;

    container.innerHTML = template;
    containerTwo.innerHTML = templateTwo
};

document.addEventListener("DOMContentLoaded", () => renderDetails());