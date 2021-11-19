// // 1. Đọc Api
// async function fetchApi(){
//     const api = await fetch('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3oYxXd4dA_aVtsddh6Cprx6ySoKEFeKZp-_v0_y8iF-DBG7GhbwkXFvUw');
//     return await api.json();
// }

// fetchApi()
//     .then(
//         api => {
//             console.log(api)
//             let titleMovie = document.getElementsByClassName('movie__title');
//             let imageMovie = document.getElementsByClassName('movie__image');
//             let headerMovie = document.getElementsByClassName('movie__header');
            
//             for (let i = 0; i < api['phim']['phimbo'].length;i++){
//                 imageMovie[i].src = api['phim']['phimbo'][i].imageUrl;
//                 titleMovie[i].textContent = `${api['phim']['phimbo'][i].title}`
//             }
//         }
//     )

// 1. Đổ API sang trang html
// c. Search
const searchMovie = document.getElementById('movie__search')

let allFilm = [];
searchMovie.addEventListener("keyup", (event)=>{
    const searchString = event.target.value.toLowerCase();
    const filterMovies = allFilm.filter((film)=>{
        return film.title.toLowerCase().includes(searchString)
    })
    displayFilm(filterMovies);
})

// a. Đọc API
const loadFilms = async() => {
    try{
        const api = await fetch("https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3oYxXd4dA_aVtsddh6Cprx6ySoKEFeKZp-_v0_y8iF-DBG7GhbwkXFvUw");
        const responseApi = await api.json();
        allFilm = responseApi.phim;
        console.log(allFilm)
        displayFilm(allFilm);
    }catch(err){
        console.error(err);
        console.log("Lỗi kết nối");
    }
}


// b. Đổ lên trang html
const displayFilm = (film) => {
    for(let key in film){
        console.log(document.getElementById(key));
        let filmAll = film[key]
        console.log(filmAll)
        let htmlString = filmAll
            .map((filmAll) =>{
                return `
                <div class="movie__item">
                    <img src="${filmAll.imageUrl}" alt="" class="movie__image">
                    <h1 class="movie__title">${filmAll.title}</h1>
                </div>
                `
            })
            .join("");
        document.getElementById(key).innerHTML = htmlString;
    }
}

loadFilms()
// 2. Mở đóng thanh Slidebar

let movieSlidebarOpen = document.getElementById('movie__menu-open');
let movieSlidebarClose = document.getElementById('movie__slidebar-close');
let movieSlidebarContainer = document.getElementById('movie__slidebar-container')

function showSlidebar(){
    movieSlidebarContainer.classList.add('movie__slidebar-open')
}

movieSlidebarOpen.addEventListener('click',showSlidebar);

function hideSlidebar(){
    movieSlidebarContainer.classList.remove('movie__slidebar-open')
}

movieSlidebarClose.addEventListener('click',hideSlidebar);


// 3. Làm thanh slider

window.addEventListener("load", function(){
    const slider = document.querySelector(".movie__slider");
    const sliderMain = document.querySelector(".movie__slider-main");
    const sliderItems = document.querySelectorAll(".movie__slider-item")
    const nextBtn = document.querySelector(".movie__slider-next");
    const prevBtn = document.querySelector(".movie__slider-prev");
    const dotItems = document.querySelectorAll(".movie__slider-dot-item");

    // Lấy width của hình ảnh
    const sliderItemWidth = sliderItems[0].offsetWidth;
    // Lấy số lượng hình ảnh hiện có
    const sliderLength = sliderItems.length;



    let positionX = 0 
    let index = 0 

    nextBtn.addEventListener("click", function(){
        // Nếu là 1 thì next slide
        handleChangeSlide(1);
    })
    prevBtn.addEventListener("click", function(){
        // Nếu là 1 thì next slide
        handleChangeSlide(-1);
    });

    [ ... dotItems].forEach((item) => 
        item.addEventListener("click",function(e){
            [ ... dotItems].forEach(el => el.classList.remove("active"));
            e.target.classList.add("active");
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            positionX = -1 * index * sliderItemWidth; 
            sliderMain.style = `transform: translateX(${positionX}px)`;
        }));
    function handleChangeSlide(direction){
        if(direction === 1){
            if(index >= sliderLength - 1){
                index = sliderLength - 1; 
                return;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            index++;
        }else if (direction === -1){
            if(index <= 0){
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`
            index--;
        }
        [ ... dotItems].forEach(el => el.classList.remove("active"));
        dotItems[index].classList.add("active");
    }
})


