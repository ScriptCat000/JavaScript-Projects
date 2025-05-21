const showMore = document.querySelector('.show-more-btn');
const cardSection = document.querySelector('.card-section');

const crossBtn = document.querySelector(".cross");




showMore.addEventListener('click', ()=>{
    cardSection.style.display = "block";
});


crossBtn.addEventListener('click', ()=> {
    cardSection.style.display = "none";
});