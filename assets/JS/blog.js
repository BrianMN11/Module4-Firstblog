document.addEventListener('DOMContentLoaded', function(){
    const posts = document.getElementById('posts');
    const blogPosts =JSON.parse(localStorage.getItem('BlogPosts')) || [];

    blogPosts.forEach(post => {
        const postELmement = document.createElement('div');
        postELmement.className = 'post';
        postELmement.innerHTML = `
            <h2>${post.title} </h2>
            <p>${post.content}</p>
            <p><strong> Posted by: </strong>${post.username}</p>`;
        posts.appendChild(postELmement);
    });

});

document.getElementById('toggle-mode').addEventListener( 'click', function() {
    document.body.classList.toggle('darkmode')
} );

document.getElementById('back').addEventListener('click', function() {
    window.location.href = 'index.html';
});
