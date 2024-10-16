document.getElementById('blog-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const title = document.getElementById("blog-title").value;
    const content = document.getElementById("blog-content").value;

    if (username && title && content){
        let blogPosts =JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push({username, title, content});
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        window.location.href ='blog.html';
    } else {
        alert('Please complete the form')
    }
});
