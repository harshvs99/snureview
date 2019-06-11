var count = 0;
function card_content() {
    document.getElementById(`a_post${count+1}`).innerHTML = `<span class="fh5co-date"> ${card_content[count].date_post}</span>  <h3><a href="${card_content[count].href_link}">${card_content[content].title}</a></h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed scelerisque sapien. Sed sodales, libero non faucibus rutrum, purus tellus finibus diam, eget ornare tortor leo eget erat.</p>  <p><a href="${card_content[count].href_link}">-Read more</a></p>  <p class="author"><img src="${card_content[count].author_img}" alt="Author" class="rounded-corners"> <cite> ${card_content[count].author_name}</cite></p>`;  
}

document.addEventListener("DOMContentLoaded", card_content());

// Add a new document in collection "cities"
db.collection("content").doc("cards").set({
    id: 1,
    date_post : "July 25th",
    post_type : "#gtco-business",
    author_img : "images/harsh-th.jpg",
    author_name : "Harshvardhan Singh",
    href_link : "#post1",
    title : "Sample title"
})
.then(function() {
    console.log("Document successfully written!");
})
.catch(function(error) {
    console.error("Error writing document: ", error);
});

var cardRef = db.collection('content').doc('cards');

var setWithMerge = cardRef.set({
    capital: true
}, { merge: true });


const card_sub=document.querySelector("fh5co-post");
var count;
for (count = 0; count < 9; count++) {
    card_content();
}

const card_content=[
    {
        id: 1,
        date_post : "July 25th",
        post_type : "#gtco-business",
        author_img : "images/harsh-th.jpg",
        author_name : "Harshvardhan Singh",
        href_link : "#post1",
        title : "Sample title"
    },
    {
        id: 2,
        date_post : "December 31st",
        post_type : "#gtco-policy",
        author_img : "images/harsh-th.jpg",
        author_name : "Harshvardhan Singh",
        href_link : "#post1",
        title : "Sample title2" 
    },
    {
        id: 3,
        date_post : "March 26th",
        post_type : "#gtco-tech",
        author_img : "images/prakhar.JPG",
        author_name : "Prakhar Rathi",
        href_link : "#post1",
        title : "Sample title3"
    }
];