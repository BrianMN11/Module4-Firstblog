document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = document.getElementById('blog-posts');
    const themeToggle = document.getElementById('themetoggle');
    const backButton = document.getElementById('back-button');

    function loadBlogPosts() {
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.innerHTML = '';

        posts.forEach(post => {
            const article = document.createElement('article');
            article.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p class="author">By: ${post.username}</p>
            `;
            blogPosts.appendChild(article);
        });
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    loadBlogPosts();
});
