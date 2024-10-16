document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const title = document.getElementById('blog-title').value.trim();
        const content = document.getElementById('blog-content').value.trim();

        if (!username || !title || !content) {
            alert('Please complete all fields before submitting.');
            return;
        }

        const blogPost = { username, title, content };
        const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        existingPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));

        window.location.href = 'blog.html';
    });
});
