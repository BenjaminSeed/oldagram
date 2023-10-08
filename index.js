const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    } 
]

let postSection = document.querySelector(".post-section");

for (let i = 0; i < posts.length; i++) {
    let newPost = `
    <article class="post">
        <div class="header container">
            <img class="avatar" src="${posts[i].avatar}">
            <div>
                <div>
                    <span class="name">${posts[i].name}</span>
                </div>
                <p class="location">${posts[i].location}</p>
            </div>
        </div>
        <section>
            <div>
                <img class="main-post" src="${posts[i].post}">
            </div>
            <img class="icon" src="images/icon-heart.png">
            <img class="icon" src="images/icon-comment.png">
            <img class="icon" src="images/icon-dm.png">
            <div class="likes">
                <span>${posts[i].likes}</span> likes
            </div>
            <div class="comment-wrapper">
                <h4 class="username">${posts[i].username}</h4>
                <p class="comment">${posts[i].comment}</p>
            </div>
        </section>
        <div class="divider"></div>
    </article>
    `;
    postSection.innerHTML += newPost;  
}
