type = 'topsongs';
limit = 25;
showAllData = (type,limit) => {
    async function getData() {
        let data = await fetch(`https://itunes.apple.com/us/rss/${type}/all/limit=${limit}/json`);
        return await data.json();
    }
    getData().then(
        data => {
            console.log(data);
            for(item of data.feed.entry) {
                document.getElementById('content').insertAdjacentHTML('beforeend',
                `<div class="music_item">
                <img src="${item['im:image'][2].label}" alt="">
                <span class="song_detail">${item['im:name'].label}</span>
                <span class="song_detail">${item['im:artist'].label}</span>
            </div>`
                )
            }
        },
    )
}