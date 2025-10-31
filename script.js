const cancion = {
    _id: '66bc0bcfa356bc53b596c347',
    title: 'In my head',
    album: 'In my head',
    author: 'Bedroom',
} 

const usuario = {
    nombre: 'Felipe',
    apellido: 'Hombrito',
    ci: '25369741',
    edad: 28,
    direccion: {
        calle: 'comercio',
        avenida: 'anzoategui',
        postal: '2001',
        numero: '56-789'
    }
}

// const lista = {
//     'harina',
//     'arroz',
//     'pasta',
//     'granos',
//     'nestune'
// }

const CreateSongComponent = (SongData) => { 
    const a = document.createElement('a')
    a.setAttribute('class', '' )

    a.innerHTML = `
                <div class="main__card">
                    <div>
                        <img src="${SongData.image.url}"
                            alt="Canción de ABBA, llamada Waterloo" class="main__card__imagen">
                        <div>
                            <p class="main__card__titulo">${SongData.title}</p>
                            <p class="main__card__autor">${SongData.author}</p>
                        </div>
                    </div>
                </div>
    `

    setInteractiveComponent(a, SongData)
    return a
}

const setInteractiveComponent = (component, SongData) => {
    component.addEventListener('click', () => {
        document.getElementById('audio').setAttribute('src', SongData.audio.url)
        document.getElementById('image').setAttribute('src', SongData.image.url)
        document.getElementById('title-song').innerHTML= SongData.title
        document.getElementById('author-song').innerHTML = SongData.author
    })
}

axios.get('https://api.institutoalfa.org/api/songs')
    .then(function (response) {
        const songsInfo = response.data.songs
        const contenedor = document.getElementById('container-song')

        songsInfo.map ( (song) => {
            const songComponent = CreateSongComponent(song)
            contenedor.appendChild(songComponent)
        })
    })

document.getElementById('play').addEventListener('click', () => {
    const audio = document.getElementById('audio')

    if(audio.paused){
        audio.play()
    } else {
        audio.pause()
    }

})
