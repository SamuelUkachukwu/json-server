// json-server --watch data/db.json
// powershell -ExecutionPolicy Bypass -File "C:\Users\shybo\AppData\Roaming\npm\json-server.ps1" --watch data/db.json

const form = document.querySelector('.new-blog');


const createPost = async (e) => {
    e.preventDefault();

    const blog = {
        title: form.title.value,
        body: form.body.value,
        author: form.author.value,
        category: form.category.value,
        image: "images/",
        excerpt: form.excerpt.value,
    };

    try {
        const response = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }

        // Redirect to the index.html page after successful post creation
        window.location.replace('/index.html');
    } catch (error) {
        console.error('Error creating post:', error);
        // Handle the error appropriately (e.g., show a user-friendly error message)
    }

};

form.addEventListener('submit', createPost);
