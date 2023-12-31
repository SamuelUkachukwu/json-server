// javaScript for details.html
const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector('.blog');
const containerTwo = document.querySelector('.blog-two');


document.addEventListener("DOMContentLoaded", () => renderDetails());

const renderDetails = async () => {
    const response = await fetch('http://localhost:3000/posts/' + id)
    const post = await response.json()

    const template = ` <h4 class="my-3"><strong>${post.title}</strong></h4>
    <h6>Category <strong>${post.category}</strong></h6>
    <p class="p-3">${post.body}</p>
    <p class="p-3">Written By: <strong>${post.author}</strong></p>
    <div class="row">
        <div class="col-12 col-md-6"><a href="/index.html" class="btn btn-info" style="width: 100%">Return Home</a></div>
        <div class="col-12 col-md-6"><button class="btn btn-info delete" style="width: 100%">Delete post</button></div>
    </div>`;

    const templateTwo = `<img class="sticky-top"  src="${post.image}" alt="" style="width:100%">`;

    container.innerHTML = template;
    containerTwo.innerHTML = templateTwo

    const deleteBtn = document.querySelector('.delete')
    if (deleteBtn) {
        deleteBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const deleteResponse = await fetch('http://localhost:3000/posts/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!deleteResponse.ok) {
                alert(`Error deleting ${post.title}`);
            } else {
                window.location.replace('/index.html');
            }
        })
    };
}

