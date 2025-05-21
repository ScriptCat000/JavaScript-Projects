const reviews = [
    {
        id: 1,
        img: "images/person-1.jpg",
        authorName: "Cailyn Karla",
        job: "ux designer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatibus in tenetur totam quam mollitia aspernatur, nisi, blanditiis ut temporibus beatae ea magnam placeat labore.blanditiis ut temporibus beatae ea magnam placeat labore.",
    },
    {
        id: 2,
        img: "images/person-2.jpg",
        authorName: "Dave Woodpecker.",
        job: "data analyst",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, consectetur ipsum enim aliquid sunt quisquam, consequatur debitis vel deserunt blanditiis, reprehenderit non obcaecati unde expedita minima laudantium labore. Doloribus cumque enim ipsum doloremque illo perspiciatis? Lorem ipsum dolor sit amet,  ",
    },
    {
        id: 3,
        img: "images/person-3.jpg",
        authorName: "Rachael Mila",
        job: "web developer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, consectetur ipsum enim aliquid sunt quisquam, consequatur debitis vel deserunt blanditiis, reprehenderit non obcaecati unde expedita minima laudantium labore. Doloribus cumque enim ipsum",
    },
    {
        id: 4,
        img: "images/person-4.jpg",
        authorName: "Ammy lee",
        job: "AI engineer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, consectetur ipsum enim aliquid sunt quisquam, consequatur debitis vel deserunt blanditiis, reprehenderit non obcaecati unde expedita minima laudantium labore. Doloribus cumque enim ipsum doloremque illo perspiciatis? ",
    },
    {
        id: 5,
        img: "images/person-5.jpg",
        authorName: "Emily Airheart",
        job: "data analyst",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, consectetur ipsum enim aliquid sunt quisquam, consequatur debitis vel deserunt blanditiis, reprehenderit non obcaecati unde expedita minima laudantium labore. Doloribus",
    },
    {
        id: 6,
        img: "images/person-6.jpg",
        authorName: "Kyle Smith",
        job: "AI engineer",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, consectetur ipsum enim aliquid sunt quisquam, consequatur debitis vel deserunt blanditiis, reprehenderit non obcaecati unde expedita minima laudantium labore. Doloribus cumque enim ipsum doloremque illo perspiciatis? ",
    },
    {
        id: 7,
        img: "images/person-7.jpg",
        authorName: "Prottasha Bridge",
        job: "photographar",
        info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, consectetur ipsum enim aliquid sunt quisquam, consequatur debitis vel deserunt blanditiis, reprehenderit non obcaecati unde expedita minima laudantium labore. Doloribus cumque enim ipsum doloremque illo perspiciatis? ",
    },
    // add much as you want
];

let itemCount = 0;

// to select the elements
const img = document.getElementById("person-img");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const info = document.querySelector(".info");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

function showReview(personNum){
    img.src = reviews[personNum].img;
    author.textContent = reviews[personNum].authorName;
    job.textContent = reviews[personNum].job;
    info.textContent = reviews[personNum].info;
};

window.addEventListener('DOMContentLoaded', ()=> {
    showReview(itemCount);
});


nextBtn.addEventListener('click', ()=> {
    itemCount++;

    if(itemCount > reviews.length - 1){
        itemCount = 0;
    }

    showReview(itemCount);

});

prevBtn.addEventListener('click', ()=> {
    itemCount--;

    if(itemCount < 0){
        itemCount = reviews.length -1;
    }

    showReview(itemCount);
});