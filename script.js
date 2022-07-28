let musicas = [
    {titulo:'Ambitionz Az A Ridah', artista:'2PAc', source:'musicas/2Pac   Ambitionz Az A Ridah (Legendado).mp3', img:'imagens/2pac03.jpg'},
    
    {titulo:'Dear Mama', artista:'2PAc', source:'musicas/2Pac   Dear Mama (Official Music Video).mp3', img:'imagens/2pac.jpg'},
    
    {titulo:'Last Muthafucka Breathin', artista:'2Pac', source:'musicas/2pac   Last Muthafucka Breathin.mp3', img:'imagens/2pac02.jpg'},
    
    {titulo:'Me Against The World', artista:'2PAc', source:'musicas/2Pac   Me Against The World.mp3', img:'imagens/pac04.jpg'},
    
    {titulo:'Only God can Judge me', artista:'2PAc', source:'musicas/2pac   Only God can Judge me.mp3', img:'imagens/pac05.jpg'},
    
    {titulo:'Runnin', artista:'2Pac', source:'musicas/2Pac ft Notorious BIG   Runnin.mp3', img:'imagens/2pacenotorios.jpg'},
    
    {titulo:'All Eyez On Me', artista:'2PAc', source:'musicas/All Eyez On Me.mp3', img:'imagens/pac06.jpg'},
    
    {titulo:'Biggie Smalls   Miss U', artista:'2PAc', source:'musicas/Biggie Smalls   Miss U.mp3', img:'imagens/pac07.jpg'},
    
    {titulo:'Check Out Time', artista:'2Pac', source:'musicas/Check Out Time.mp3', img:'imagens/pac08.jpg'},
    
    {titulo:'Trade It All ', artista:'Fabolous', source:'musicas/Fabolous, Jagged Edge, P Diddy   Trade It All Part 2.mp3', img:'imagens/fabolous.jpg'},
    
    {titulo:'Picture Me Rollin', artista:'2PAc', source:'musicas/Picture Me Rollin.mp3', img:'imagens/pac09.jpg'},
    
    {titulo:'Same Girl', artista:'R.Kelly', source:'musicas/R Kelly   Same Girl (Official Music Video).mp3', img:'imagens/Rkelly.jpg'},
    
    {titulo:'The Notorious BIG', artista:'BIG', source:'musicas/The Notorious BIG (2).mp3', img:'imagens/notorios03.jpg'},
    
    {titulo:'The Notorious BIG', artista:'Notorious BIG', source:'musicas/The Notorious BIG.mp3', img:'imagens/notorios02.jpg'},
];

// INICIO
let musica = document.querySelector('audio');
let musicaIndex = 0;

let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');
let imagem = document.querySelector('img');
let tempoDecorrido = document.querySelector('.tempo .inicio');
let duracaoMusica = document.querySelector('.tempo .fim');

nomeMusica.textContent = musicas[musicaIndex].titulo;
nomeArtista.textContent = musicas[musicaIndex].artista;
imagem.setAttribute('src', musicas[musicaIndex].img);
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// EVENTOS
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    musicaIndex--; 
    if (musicaIndex < 0){
        musicaIndex = 14;
    }
    renderizarMusica(musicaIndex);
});

document.querySelector('.proximo').addEventListener('click', () => {
    musicaIndex++;
    if (musicaIndex > 14){
        musicaIndex = 0;
    }
    renderizarMusica(musicaIndex);
});

// FUNÇÕES

function renderizarMusica(musicaIndex){
    musica.setAttribute('src', musicas[musicaIndex].source);

    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[musicaIndex].titulo;
        nomeArtista.textContent = musicas[musicaIndex].artista;
        imagem.src = musicas[musicaIndex].img;
    
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });

    document.body.append(musica);
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
    document.querySelector('.botao-pause').style.display = 'block';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10){
        campoSegundos = '0'+ campoSegundos;
    }
    return `${campoMinutos}:${campoSegundos}`;
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));}