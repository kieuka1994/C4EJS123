

// 1. Đọc Api
async function fetchApi(){
    const api = await fetch('https://api.apify.com/v2/key-value-stores/QubTry45OOCkTyohU/records/LATEST?fbclid=IwAR3oYxXd4dA_aVtsddh6Cprx6ySoKEFeKZp-_v0_y8iF-DBG7GhbwkXFvUw');
    return await api.json();
}

fetchApi()
    .then(
        api => {
            console.log(api)
            let titleMovie = document.getElementsByClassName('movie__title');
            let imageMovie = document.getElementsByClassName('movie__image');
            let headerMovie = document.getElementsByClassName('movie__header');
            
            for (let i = 0; i < api['phim']['phimbo'].length;i++){
                imageMovie[i].src = api['phim']['phimbo'][i].imageUrl;
                titleMovie[i].textContent = `${api['phim']['phimbo'][i].title}`
            }
        }
    )