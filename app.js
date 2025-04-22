let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

let cato_bx = document.getElementById('cato_bx');
let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');

left_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft -= 100;
})
right_scroll.addEventListener('click', () => {
    cato_bx.scrollLeft += 100;
})


let mvoes_bx_1 = document.getElementById('mvoes_bx_1');
let left_scroll1 = document.getElementById('left_scroll1');
let right_scroll1 = document.getElementById('right_scroll1');

left_scroll1.addEventListener('click', () => {
    mvoes_bx_1.scrollLeft -= 150;
})
right_scroll1.addEventListener('click', () => {
    mvoes_bx_1.scrollLeft += 150;
})




// year and a-z box start 
let year = document.getElementById('year');
let a_z = document.getElementById('a_z');

year.addEventListener('click', () => {
    year.classList.toggle('show_year1')
});
a_z.addEventListener('click', () => {
    a_z.classList.toggle('show_year1')
});



// header slider start

let header_dur = document.getElementById('header_dur');
let header_gen = document.getElementById('header_gen');
let header_title = document.getElementById('header_title');
let header_pra = document.getElementById('header_pra');
let header = document.getElementsByTagName('header')[0];
let slider_btn = document.getElementsByClassName('slider');

const slider_load = () => {
    setTimeout(() => {
        header.style.background = "url('img/121213.jpg') no-repeat center center/cover";
        header_dur.innerText = "1h 37min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>6.3
        <span>Action / Adventure / Sci-Fi</span>`;
        header_title.innerText = "Venom: Let There Be Carnage";
        header_pra.innerText = "From Wikipedia, the free encyclopedia Venom: Let There Be Carnage is a 2021 American superhero film produced by Columbia Pictures and Sony Pictures, based on the Marvel Comics character Venom. The sequel to Venom (2018), it is directed by Andy Serkis and stars Tom Hardy as Eddie Brock, who becomes the host for the alien symbiote, Venom. In this film, Eddie faces a new threat in the form of Cletus Kasady, played by Woody Harrelson, who becomes the deadly symbiote Carnage.";
        slider_btn[0].style.background = "#fff";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 0);
    setTimeout(() => {
        header.style.background = "url('img/121214.jpg') no-repeat center center/cover";
        header_dur.innerText = "1h 00min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>9.0
        <span>Action / Adventure / Fantasy</span>`;
        header_title.innerText = "Solo Leveling S1";
        header_pra.innerText = "Solo Leveling is a South Korean web novel turned into an anime, following the story of Sung Jinwoo, an E-rank Hunter who is weak but determined. After a near-death experience in a dangerous dungeon, he awakens to an ability that allows him to level up, gaining powers beyond human limits. As he grows stronger, he uncovers secrets about the mysterious system that grants him his powers, and his journey leads him to face ever greater challenges in a world filled with deadly monsters and dungeons.";
        
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 5000);
    setTimeout(() => {
        header.style.background = "url('img/121215.jpg') no-repeat center center/cover";
        header_dur.innerText = "2h 10min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>9.2
        <span>Comedy / Action / Drama</span>`;
        header_title.innerText = "Pirates of the Caribbean";
        header_pra.innerText = "Pirates of the Caribbean is a series of fantasy swashbuckler films produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[2].style.background = "#fff";
    }, 10000);
    setTimeout(() => {
        header.style.background = "url('img/121215.png') no-repeat center center/cover";
        header_dur.innerText = "2h 30min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>8.8
        <span>Action / Drama / Historical</span>`;
        header_title.innerText = "RRR";
        header_pra.innerText = "RRR is a 2022 Indian Telugu-language epic action drama film directed by S. S. Rajamouli. The film is set in the 1920s and is inspired by two Indian revolutionaries, Alluri Sitarama Raju and Komaram Bheem, who fought against the British Raj and the Nizam of Hyderabad respectively. The movie showcases their friendship and revolution as they fight against the oppressive forces in British India.";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 15000);
    setTimeout(() => {
        header.style.background = "url('img/shar.jpg') no-repeat center center/cover";
        header_dur.innerText = "5h 25min";
        header_gen.innerHTML = `<i class="fas fa-star"></i>7.5
        <span>Action / Adventure / Sci-Fi</span>`;
        header_title.innerText = "Shangri-La Frontier";
        header_pra.innerText = "Rakuro Hizutome only cares about one thing: beating crappy VR games. He devotes his entire life to these buggy games and could clear them all in his sleep. One day, he decides to challenge himself and play a popular god-tier game called Shangri-La Frontier. But he quickly learns just how difficult it is. Will his expert skills be enough to uncover its hidden secrets?";
        slider_btn[0].style.background = "rgb(184, 184, 184, .1)";
        slider_btn[1].style.background = "#fff";
        slider_btn[2].style.background = "rgb(184, 184, 184, .1)";
    }, 20000);
};


setInterval(slider_load, 25000);
slider_load();

// video controal start 

let plays = document.getElementById('play');
let videos = document.getElementById('video');
let play_btn = document.getElementById('play_btn');


play_btn.addEventListener('click', () => {
    videos.play();
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});

plays.addEventListener('click', () => {
    if (videos.paused || videos.currentTime <= 0) {
        plays.classList.add('bi-pause-fill');
        plays.classList.remove('bi-play-fill');
        videos.play();
    } else {
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
        videos.pause();
    }
});

// video time update 

videos.addEventListener('timeupdate', () => {
    let start_time = document.getElementById('start_time');
    let end_time = document.getElementById('end_time');
    let video_duration = videos.duration;
    let min = Math.floor(video_duration / 60);
    let hour = Math.floor(min / 60);
    let sec = Math.floor(video_duration % 60);
    let video_current_time = videos.currentTime;


    let start_min = Math.floor(video_current_time / 60);
    let start_sec = Math.floor(video_current_time % 60);
    let start_hour = Math.floor(start_min / 60);

    if (start_min < 10) {
        start_min = "0" + start_min;
    }
    if (start_sec < 10) {
        start_sec = "0" + start_sec;
    }
    start_time.innerText = start_min + ":" + start_sec;

    if (start_hour < 10) {
        start_hour = "0" + start_hour;
    }

    if (start_min == 60 || start_min > 60) {
        start_time.innerText = start_hour + ":" + start_min + ":" + start_sec;
    }

    // end 
    let end_min = min - start_min;
    let end_sec = video_duration - start_sec;
    let end_hour = hour - start_hour;

    let end_mins = Math.floor(end_min % 60);
    if (end_mins < 10) {
        end_mins = "0" + end_mins;
    }
    let end_secs = Math.floor(end_sec % 60);
    if (end_secs < 10) {
        end_secs = "0" + end_secs;
    }
    let end_hours = Math.floor(end_min / 60);
    if (end_hours < 10) {
        end_hours = "0" + end_hours;
    }

    end_time.innerText = "-" + end_mins + ":" + end_secs;

    if (end_min == 60 || end_min > 60) {
        end_time.innerText = "-" + end_hours + ":" + end_mins + ":" + end_secs;
    }


    // seek bar start

    let seek = document.getElementById('seek');
    let seek_2 = document.getElementById('seek_2');
    let seek_dot = document.getElementById('seek_dot');


    let progressbar = parseInt((videos.currentTime / videos.duration) * 100);

    seek.value = progressbar;
    let seekbar = seek.value;
    seek_2.style.width = `${seekbar}%`;
    seek_dot.style.left = `${seekbar}%`;

    // seekbar value change 
    let sec_30 = document.getElementById('sec_30');
    seek.addEventListener('change', () => {
            videos.currentTime = seek.value * videos.duration / 100;
            sec_30.addEventListener('click', () => {
                videos.currentTime = seek.value * ((videos.duration - 30) / 100);
            });
        })
        // video end event 
    videos.addEventListener('ended', () => {
        plays.classList.remove('bi-pause-fill');
        plays.classList.add('bi-play-fill');
    })
});

// volume change

let start_seekbar_end = document.querySelector('.start_seekbar_end');
let cc_vol_screen = document.querySelector('.cc_vol_screen');
let vol = document.getElementById('vol');
let vol_icon = document.getElementById('vol_icon');

vol_icon.addEventListener('click', () => {
    cc_vol_screen.classList.toggle('cc_vol');
    start_seekbar_end.classList.toggle('start_seekbar');
    vol.classList.toggle('input_vol');
});

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a = vol.value;
    videos.volume = vol_a / 100;
});

// full screen start 
let full_screen = document.getElementById('full_screen');
full_screen.addEventListener('click', () => {
    videos.requestFullscreen();
});

// video box start
let title_video = document.getElementsByClassName('title_video');
let video_1 = document.getElementsByClassName('video_1');
video_1[0].addEventListener('click', () => {
    videos.src = "mimg/Venom.mkv";
    videos.play();
    title_video[0].innerText = "Venom 2";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[1].addEventListener('click', () => {
    videos.src = "mimg/SOLO.mkv";
    videos.play();
    title_video[0].innerText = "Solo leveling";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});
video_1[2].addEventListener('click', () => {
    videos.src = "mimg/p.mkv";
    videos.play();
    title_video[0].innerText = "Pirates of the Caribbean (2015)";
    plays.classList.add('bi-pause-fill');
    plays.classList.remove('bi-play-fill');
});


// Movies Box Set

const movies = [
    // Telugu Movies
    {
        id: 1,
        img: "mimg/rrr.jpg",
        title: "RRR",
        letter: "r",
        genre1: "action",
        genre2: "drama",
        genre3: "historical",
        genre4: "biography",
        genre5: "adventure",
        year: 2022,
        rate: 8.8,
        url: "rrr.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 2,
        img: "mimg/baahubali.jpg",
        title: "Baahubali: The Beginning",
        letter: "b",
        genre1: "action",
        genre2: "drama",
        genre3: "epic",
        genre4: "adventure",
        genre5: "fantasy",
        year: 2015,
        rate: 8.1,
        url: "baahubali.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 3,
        img: "mimg/shaho.jpg",
        title: "Saaho",
        letter: "s",
        genre1: "action",
        genre2: "thriller",
        genre3: "crime",
        genre4: "drama",
        genre5: "none",
        year: 2019,
        rate: 6.0,
        url: "saaho.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 4,
        img: "mimg/sye-raa.jpg",
        title: "Sye Raa Narasimha Reddy",
        letter: "s",
        genre1: "action",
        genre2: "historical",
        genre3: "biography",
        genre4: "drama",
        genre5: "none",
        year: 2019,
        rate: 7.6,
        url: "syeraa.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 5,
    img: "mimg/kgf.jpg",
    title: "KGF: Chapter 1",
    letter: "k",
    genre1: "action",
    genre2: "drama",
    genre3: "thriller",
    genre4: "none",
    year: 2018,
    rate: 8.2,
    url: "kgf.html",
    tppr: "trend",
    msot: "movie",
    },
    {
        id: 6,
        img: "mimg/majili.jpg",
        title: "Majili",
        letter: "m",
        genre1: "romance",
        genre2: "drama",
        genre3: "sports",
        genre4: "none",
        year: 2019,
        rate: 7.6,
        url: "majili.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 7,
    img: "mimg/salar.jpg",
    title: "Salar",
    letter: "s",
    genre1: "action",
    genre2: "thriller",
    genre3: "drama",
    genre4: "none",
    year: 2023,
    rate: 7.5,
    url: "salar.html",
    tppr: "trend",
    msot: "movie",
    },
    {
        id: 8,
img: "mimg/sankranthikivasthunam.jpg",
title: "Sankranthiki Vasthunam",
letter: "s",
genre1: "drama",
genre2: "comedy",
genre3: "family",
genre4: "none",
year: 2025,
rate: 7.3,
url: "sankranthikivasthunam.html",
tppr: "trend",
msot: "movie",

    },
    {
        id: 11,
        img: "mimg/majaka.jpg",
        title: "Mazaka",
        letter: "m",
        genre1: "comedy",
        genre2: "action",
        genre3: "drama",
        genre4: "none",
        year: 2025,
        rate: 7.5,
        url: "mazaka.html",
        tppr: "trend",
        msot: "movie",
        
        
    },
    {
        id: 10,
        img: "mimg/robo-2.jpg",
        title: "Robo 2.0",
        letter: "r",
        genre1: "sci-fi",
        genre2: "action",
        genre3: "thriller",
        genre4: "none",
        year: 2018,
        rate: 6.8,
        url: "robo-2.0.html",
        tppr: "trend",
        msot: "movie",
        
        
    },
    {
        id: 11,
        img: "mimg/agnyaathavaasi.jpg",
        title: "Agnyaathavaasi",
        letter: "a",
        genre1: "action",
        genre2: "thriller",
        genre3: "drama",
        genre4: "none",
        year: 2018,
        rate: 5.8,
        url: "agnyaathavaasi.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 12,
        img: "mimg/f2.jpg",
        title: "F2: Fun and Frustration",
        letter: "f",
        genre1: "comedy",
        genre2: "drama",
        genre3: "romance",
        genre4: "none",
        year: 2019,
        rate: 7.7,
        url: "f2.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 13,
        img: "mimg/attarintiki-daredi.jpg",
        title: "Attarintiki Daredi",
        letter: "a",
        genre1: "romance",
        genre2: "drama",
        genre3: "comedy",
        genre4: "none",
        year: 2013,
        rate: 8.0,
        url: "attarintiki-daredi.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 14,
img: "mimg/pokiri.jpg",
title: "Pokiri",
letter: "p",
genre1: "action",
genre2: "thriller",
genre3: "drama",
genre4: "none",
year: 2006,
rate: 8.1,
url: "pokiri.html",
tppr: "trend",
msot: "movie",

    },
    {
        id: 15,
        img: "mimg/sarileru-neekevvaru.jpg",
        title: "Sarileru Neekevvaru",
        letter: "s",
        genre1: "action",
        genre2: "comedy",
        genre3: "drama",
        genre4: "none",
        year: 2020,
        rate: 7.4,
        url: "sarileru-neekevvaru.html",
        tppr: "trend",
        msot: "movie",
        
    },

    // Marvel Movies
    {
        id: 16,
        img: "mimg/spider-man-no-way-home.jpg",
        title: "Spider-Man: No Way Home",
        letter: "s",
        genre1: "action",
        genre2: "adventure",
        genre3: "sci-fi",
        genre4: "superhero",
        year: 2021,
        rate: 8.9,
        url: "spider-man-no-way-home.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 17,
        img: "mimg/avengers-endgame.jpg",
        title: "Avengers: Endgame",
        letter: "a",
        genre1: "action",
        genre2: "adventure",
        genre3: "sci-fi",
        genre4: "superhero",
        year: 2019,
        rate: 8.4,
        url: "avengers-endgame.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 18,
        img: "mimg/guardians-of-the-galaxy.jpg",
        title: "Guardians of the Galaxy",
        letter: "g",
        genre1: "action",
        genre2: "adventure",
        genre3: "comedy",
        genre4: "superhero",
        year: 2014,
        rate: 8.0,
        url: "guardians-of-the-galaxy.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 19,
        img: "mimg/black-panther.jpg",
        title: "Black Panther",
        letter: "b",
        genre1: "action",
        genre2: "adventure",
        genre3: "superhero",
        year: 2018,
        rate: 7.3,
        url: "black-panther.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 20,
        img: "mimg/iron-man.jpg",
        title: "Iron Man",
        letter: "i",
        genre1: "action",
        genre2: "adventure",
        genre3: "sci-fi",
        genre4: "superhero",
        year: 2008,
        rate: 7.9,
        url: "iron-man.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 21,
        img: "mimg/thor-ragnarok.jpg",
        title: "Thor: Ragnarok",
        letter: "t",
        genre1: "action",
        genre2: "adventure",
        genre3: "comedy",
        genre4: "superhero",
        year: 2017,
        rate: 7.9,
        url: "thor-ragnarok.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 22,
        img: "mimg/captain-america-civil-war.jpg",
        title: "Captain America: Civil War",
        letter: "c",
        genre1: "action",
        genre2: "adventure",
        genre3: "superhero",
        year: 2016,
        rate: 7.8,
        url: "captain-america-civil-war.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 23,
        img: "mimg/doctormovie.jpg",
        title: "Doctor Strange",
        letter: "d",
        genre1: "action",
        genre2: "adventure",
        genre3: "sci-fi",
        genre4: "superhero",
        year: 2016,
        rate: 7.5,
        url: "doctor-strange.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 24,
        img: "mimg/ant-man.jpg",
        title: "Ant-Man",
        letter: "a",
        genre1: "action",
        genre2: "adventure",
        genre3: "comedy",
        year: 2015,
        rate: 7.3,
        url: "ant-man.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 25,
        img: "mimg/captain-marvel.jpg",
        title: "Captain Marvel",
        letter: "c",
        genre1: "action",
        genre2: "adventure",
        genre3: "sci-fi",
        genre4: "superhero",
        year: 2019,
        rate: 6.8,
        url: "captain-marvel.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 26,
        img: "mimg/spider-man-homecoming.jpg",
        title: "Spider-Man: Homecoming",
        letter: "s",
        genre1: "action",
        genre2: "adventure",
        genre3: "superhero",
        year: 2017,
        rate: 7.4,
        url: "spider-man-homecoming.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 27,
        img: "mimg/avengers.jpg",
        title: "The Avengers",
        letter: "a",
        genre1: "action",
        genre2: "adventure",
        genre3: "sci-fi",
        year: 2012,
        rate: 8.0,
        url: "avengers.html",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 28,
        img: "mimg/black-widow.jpg",
        title: "Black Widow",
        letter: "b",
        genre1: "action",
        genre2: "adventure",
        genre3: "superhero",
        year: 2021,
        rate: 6.8,
        url: "black-widow.html",
        tppr: "trend",
        msot: "movie",
    },
    //anime
    {
        id: 29,
        img: "mimg/one piece.jpg",
        title: "One Piece",
        letter: "o",
        genre1: "action",
        genre2: "adventure",
        genre3: "fantasy",
        year: 1999,
        rate: 8.6,
        url: "https://hianimez.to/watch/one-piece-100?ep=2142",
        tppr: "trend",
        msot: "movie",
    
    
    },
    {
        id: 30,
        img: "mimg/blue lock.jpg",
        title: "Blue Lock",
        letter: "b",
        genre1: "sports",
        genre2: "drama",
        genre3: "thriller",
        year: 2022,
        rate: 8.0,
        url: "https://hianimez.to/watch/blue-lock-17889?ep=94538",
        tppr: "trend",
        msot: "movie",
    },
    {
        
            id: 31,
            img: "mimg/dargon ball super.jpg",
            title: "Dragon Ball Super",
            letter: "d",
            genre1: "action",
            genre2: "adventure",
            genre3: "fantasy",
            year: 2015,
            rate: 8.2,
            url: "https://hianimez.to/watch/dragon-ball-super-1692?ep=22219",
            tppr: "trend",
            msot: "movie",
        
        
    },
    {
        id: 32,
        img: "mimg/balck clover.jpg",
        title: "Black Clover",
        letter: "b",
        genre1: "action",
        genre2: "adventure",
        genre3: "fantasy",
        year: 2017,
        rate: 8.0,
        url: "https://hianimez.to/watch/black-clover-2404?ep=27377",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 33,
        img: "mimg/naruto.jpg",
        title: "Naruto Shippuden ",
        letter: "n",
        genre1: "action",
        genre2: "adventure",
        genre3: "animation",
        year: 2002,
        rate: 7.5,
        url: "https://hianimez.to/watch/naruto-shippuden-355?ep=7882",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 34,
        img: "mimg/aot.jpg",
        title: "Attack on Titan: The Final Season",
        letter: "a",
        genre1: "action",
        genre2: "adventure",
        genre3: "drama",
        year: 2022,
        rate: 8.9,
        url: "https://hianimez.to/watch/attack-on-titan-112?ep=3303",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 35,
        img: "mimg/bleach-thousand-year-blood-war.jpg",
        title: "Bleach: Thousand-Year Blood War",
        letter: "b",
        genre1: "action",
        genre2: "adventure",
        genre3: "supernatural",
        year: 2022,
        rate: 7.6,
        url: "https://hianimez.to/watch/bleach-thousand-year-blood-war-the-conflict-19322?ep=128444",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 36,
        img: "mimg/solo-leveling-s2.jpg",
        title: "Solo Leveling: Season 2",
        letter: "s",
        genre1: "action",
        genre2: "adventure",
        genre3: "fantasy",
        year: 2025,
        rate: 9.1,
        url: "https://hianimez.to/watch/solo-leveling-season-2-arise-from-the-shadow-19413?ep=131394",
        tppr: "trend",
        msot: "movie",
    },
    {
        id:37,
        img: "mimg/wind breaker s2.jpg",
        title: "Wind Breaker",
        letter: "w",
        genre1: "action",
        genre2: "adventure",
        genre3: "fantasy",
        year: 2025,
        rate: 7.5,
        url: "https://hianimez.to/watch/wind-breaker-season-2-19542?ep=136108",
        tppr: "trend",
        msot: "movie",
    },
    
    {
        id: 38,
        img: "mimg/demon-slayer.jpg",
        title: "Demon Slayer: Kimetsu no Yaiba",
        letter: "d",
        genre1: "action",
        genre2: "adventure",
        genre3: "fantasy",
        year: 2019,
        rate: 8.7,
        url: "https://hianimez.to/watch/demon-slayer-kimetsu-no-yaiba-47?ep=1279S",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 39,
        img: "mimg/jujutsu-kaisen.jpg",
        title: "Jujutsu Kaisen 2nd Season",
        letter: "j",
        genre1: "action",
        genre2: "supernatural",
        genre3: "thriller",
        year: 2023,
        rate: 8.7,
        url: "https://hianimez.to/watch/jujutsu-kaisen-2nd-season-18413?ep=102662",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 40,
        img: "mimg/shangri-la-frontier.jpg",
        title: "Shangri-La Frontier",
        letter: "s",
        genre1: "action",
        genre2: "adventure",
        genre3: "fantasy",
        year: 2023,
        rate: 7.9,
        url: "https://hianimez.to/watch/shangri-la-frontier-18567?ep=107278",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 41,
        img: "mimg/chainsaw-man.jpg",
        title: "Chainsaw Man",
        letter: "c",
        genre1: "action",
        genre2: "supernatural",
        genre3: "thriller",
        year: 2022,
        rate: 8.6,
        url: "https://hianimez.to/watch/chainsaw-man-17406?ep=94597",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 42,
        img: "mimg/dandadan.jpg",
        title: "Dandadan",
        letter: "d",
        genre1: "action",
        genre2: "comedy",
        genre3: "supernatural",
        year: 2024,
        rate: 8.4,
        url: "https://hianimez.to/watch/dandadan-19319?ep=128368",
        tppr: "trend",
        msot: "movie",
    },
    {
        id: 43,
        img: "mimg/solo-leveling.jpg",
        title: "Solo Leveling",
        letter: "s",
        genre1: "action",
        genre2: "fantasy",
        genre3: "adventure",
        year: 2024,
        rate: 8.8,
        url: "https://hianimez.to/watch/solo-leveling-18718?ep=114721",
        tppr: "trend",
        msot: "movie",
    },
    
        
    
        // DC Movies
        {
            id: 44,
            img: "mimg/justice-league.jpg",
            title: "Justice League",
            letter: "j",
            genre1: "action",
            genre2: "adventure",
            genre3: "sci-fi",
            year: 2017,
            rate: 6.2,
            url: "justice-league.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 45,
            img: "mimg/batman-v-superman.jpg",
            title: "Batman v Superman: Dawn of Justice",
            letter: "b",
            genre1: "action",
            genre2: "adventure",
            genre3: "superhero",
            year: 2016,
            rate: 6.4,
            url: "batman-v-superman.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 46,
            img: "mimg/wonder-woman.jpg",
            title: "Wonder Woman",
            letter: "w",
            genre1: "action",
            genre2: "adventure",
            genre3: "superhero",
            year: 2017,
            rate: 7.4,
            url: "wonder-woman.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 47,
            img: "mimg/harley-quinn.jpg",
            title: "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn)",
            letter: "b",
            genre1: "action",
            genre2: "comedy",
            genre3: "crime",
            year: 2020,
            rate: 6.1,
            url: "birds-of-prey.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 48,
            img: "mimg/aquaman.jpg",
            title: "Aquaman",
            letter: "a",
            genre1: "action",
            genre2: "adventure",
            genre3: "fantasy",
            year: 2018,
            rate: 6.9,
            url: "aquaman.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 49,
            img: "mimg/man-of-steel.jpg",
            title: "Man of Steel",
            letter: "m",
            genre1: "action",
            genre2: "adventure",
            genre3: "superhero",
            year: 2013,
            rate: 7.0,
            url: "man-of-steel.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 50,
            img: "mimg/green-lantern.jpg",
            title: "Green Lantern",
            letter: "g",
            genre1: "action",
            genre2: "adventure",
            genre3: "superhero",
            year: 2011,
            rate: 5.5,
            url: "green-lantern.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 51,
            img: "mimg/the-dark-knight.jpg",
            title: "The Dark Knight",
            letter: "t",
            genre1: "action",
            genre2: "crime",
            genre3: "drama",
            year: 2008,
            rate: 9.0,
            url: "the-dark-knight.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 52,
            img: "mimg/the-batman.jpg",
            title: "The Batman",
            letter: "t",
            genre1: "action",
            genre2: "crime",
            genre3: "drama",
            year: 2022,
            rate: 7.9,
            url: "the-batman.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 53,
            img: "mimg/justice-league-dark.jpg",
            title: "Justice League Dark",
            letter: "j",
            genre1: "action",
            genre2: "adventure",
            genre3: "animation",
            year: 2017,
            rate: 7.8,
            url: "justice-league-dark.html",
            tppr: "trend",
            msot: "movie",
        },
    
        // Transformers Movies
        {
            id: 54,
            img: "mimg/transformers.jpg",
            title: "Transformers",
            letter: "t",
            genre1: "action",
            genre2: "sci-fi",
            genre3: "adventure",
            year: 2007,
            rate: 7.0,
            url: "transformers.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 55,
            img: "mimg/transformers-revenge.jpg",
            title: "Transformers: Revenge of the Fallen",
            letter: "t",
            genre1: "action",
            genre2: "sci-fi",
            genre3: "adventure",
            year: 2009,
            rate: 6.0,
            url: "transformers-revenge.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 56,
            img: "mimg/transformers-dark-side.jpg",
            title: "Transformers: Dark of the Moon",
            letter: "t",
            genre1: "action",
            genre2: "sci-fi",
            genre3: "adventure",
            year: 2011,
            rate: 6.2,
            url: "transformers-dark-of-the-moon.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 57,
            img: "mimg/transformers-age.jpg",
            title: "Transformers: Age of Extinction",
            letter: "t",
            genre1: "action",
            genre2: "sci-fi",
            genre3: "adventure",
            year: 2014,
            rate: 6.0,
            url: "transformers-age.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 58,
            img: "mimg/transformers-the-last-knight.jpg",
            title: "Transformers: The Last Knight",
            letter: "t",
            genre1: "action",
            genre2: "sci-fi",
            genre3: "adventure",
            year: 2017,
            rate: 5.2,
            url: "transformers-the-last-knight.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 59,
            img: "mimg/bumblebee.jpg",
            title: "Bumblebee",
            letter: "b",
            genre1: "action",
            genre2: "sci-fi",
            genre3: "adventure",
            year: 2018,
            rate: 7.0,
            url: "bumblebee.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 60,
            img: "mimg/pirates-of-the-caribbean.jpg",
            title: "Pirates of the Caribbean: The Curse of the Black Pearl",
            letter: "p",
            genre1: "action",
            genre2: "adventure",
            genre3: "fantasy",
            year: 2003,
            rate: 8.0,
            url: "pirates-of-the-caribbean.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 61,
            img: "mimg/pirates-of-the-caribbean-dead-man's-chest.jpg",
            title: "Pirates of the Caribbean: Dead Man's Chest",
            letter: "p",
            genre1: "action",
            genre2: "adventure",
            genre3: "fantasy",
            year: 2006,
            rate: 7.3,
            url: "pirates-of-the-caribbean-dead-mans-chest.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 62,
            img: "mimg/pirates-of-the-caribbean-at-worlds-end.jpg",
            title: "Pirates of the Caribbean: At World's End",
            letter: "p",
            genre1: "action",
            genre2: "adventure",
            genre3: "fantasy",
            year: 2007,
            rate: 7.1,
            url: "pirates-of-the-caribbean-at-worlds-end.html",
            tppr: "trend",
            msot: "movie",
        },
        {
            id: 63,
            img: "mimg/pirates-of-the-caribbean-on-stranger-tides.jpg",
            title: "Pirates of the Caribbean: On Stranger Tides",
            letter: "p",
            genre1: "action",
            genre2: "adventure",
            genre3: "fantasy",
            year: 2011,
            rate: 6.6,
            url: "pirates-of-the-caribbean-on-stranger-tides.html",
            tppr: "trend",
            msot: "movie",
        },
        

    
]

    // all array copyed!

// action button and active box

let action1 = document.getElementById('action1');
let action_bx = document.getElementById('action_bx');

action1.addEventListener('click', () => {
    action1.classList.toggle('cato_button_active');
    action_bx.classList.toggle('movie_box_active');
});

const action_array = movies.filter((e) => {
    return e.genre1 == "action";
});

action_array.forEach(element => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    action_bx.appendChild(card);
});

// crime button and active box

let crime1 = document.getElementById('crime1');
let crime_bx = document.getElementById('crime_bx');

crime1.addEventListener('click', () => {
    crime1.classList.toggle('cato_button_active');
    crime_bx.classList.toggle('movie_box_active');
});

const crime_array = movies.filter((e) => {
    return e.genre2 == "crime";
});

crime_array.forEach(element => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    crime_bx.appendChild(card);
});


// drama button and active box

let drama1 = document.getElementById('drama1');
let drama_bx = document.getElementById('drama_bx');

drama1.addEventListener('click', () => {
    drama1.classList.toggle('cato_button_active');
    drama_bx.classList.toggle('movie_box_active');
});

const drama_array = movies.filter((e) => {
    return e.genre8 == "drama";
});

drama_array.forEach(element => {
    const { img, title, year, url, rate } = element;
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

    drama_bx.appendChild(card);
});

// movies box2 start
// all box start 
let all = document.getElementById('all');

window.addEventListener('load', () => {
        movies.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            all.appendChild(card);
        });
    })
    // latest box start 
let latest = document.getElementById('latest');

let latest_array = movies.filter((e) => {
    return e.upload == "latest";
})

window.addEventListener('load', () => {
        latest_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            latest.appendChild(card);
        });
    })
    // 2022 box start 
let year_2022 = document.getElementById('year_2022');

let year2022 = movies.filter((e) => {
    return e.year == "2022";
})

window.addEventListener('load', () => {
        year2022.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            year_2022.appendChild(card);
        });
    })
    // 2021 box start 
let year_2021 = document.getElementById('year_2021');

let year2021 = movies.filter((e) => {
    return e.year == "2021";
})

window.addEventListener('load', () => {
        year2021.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            year_2021.appendChild(card);
        });
    })
    // 2020 box start 
let year_2020 = document.getElementById('year_2020');

let year2020 = movies.filter((e) => {
    return e.year == "2020";
})

window.addEventListener('load', () => {
    year2020.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        year_2020.appendChild(card);
    });
})


// letter_a box start 
let letter_a = document.getElementById('letter_a');

let letter_a_array = movies.filter((e) => {
    return e.letter == "a";
})

window.addEventListener('load', () => {
        letter_a_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            letter_a.appendChild(card);
        });
    })
    // letter_b box start 
let letter_b = document.getElementById('letter_b');

let letter_b_array = movies.filter((e) => {
    return e.letter == "b";
})

window.addEventListener('load', () => {
        letter_b_array.forEach(element => {
            const { img, title, year, url, rate } = element;
            let card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

            letter_b.appendChild(card);
        });
    })
    // letter_t box start 
let letter_t = document.getElementById('letter_t');

let letter_t_array = movies.filter((e) => {
    return e.letter == "t";
})

window.addEventListener('load', () => {
    letter_t_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        letter_t.appendChild(card);
    });
});


// rate8 box start 
let rate8 = document.getElementById('rate8');

let rate8_array = movies.filter((e) => {
    return e.rate >= 8;
})

window.addEventListener('load', () => {
    rate8_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        rate8.appendChild(card);
    });
});
// rate4 box start 
let rate4 = document.getElementById('rate4');

let rate4_array = movies.filter((e) => {
    return e.rate <= 8;
})

window.addEventListener('load', () => {
    rate4_array.forEach(element => {
        const { img, title, year, url, rate } = element;
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
    <a href="${url}">
                <img src="${img}" alt="${title}">
                <div class="content">
                    <h5>${title}</h5>
                    <h6>
                        <span>${year}</span>
                        <div class="rate">
                            <i class="fas fa-heart"></i>
                            <i class="fas fa-eye"></i>
                            <i class="fas fa-star"></i>
                            <h6>${rate}</h6>
                        </div>
                    </h6>
                </div>
            </a>
    `

        rate4.appendChild(card);
    });
});


// movies box2 end


// btns start 

let all_btn = document.getElementById('all_btn');

all_btn.addEventListener('click', () => {
    all_btn.classList.toggle('cato_button_active');
    all.classList.toggle('box2_actives');
});

let latest_btn = document.getElementById('latest_btn');

latest_btn.addEventListener('click', () => {
    latest_btn.classList.toggle('cato_button_active');
    latest.classList.toggle('box2_actives');
});
let year2022__btn = document.getElementById('year2022__btn');

year2022__btn.addEventListener('click', () => {
    year2022__btn.classList.toggle('cato_button_active');
    year_2022.classList.toggle('box2_actives');
});
let year2021__btn = document.getElementById('year2021__btn');

year2021__btn.addEventListener('click', () => {
    year2021__btn.classList.toggle('cato_button_active');
    year_2021.classList.toggle('box2_actives');
});
let year2020__btn = document.getElementById('year2020__btn');

year2020__btn.addEventListener('click', () => {
    year2020__btn.classList.toggle('cato_button_active');
    year_2020.classList.toggle('box2_actives');
});


let letter_a_btn = document.getElementById('letter_a_btn');

letter_a_btn.addEventListener('click', () => {
    letter_a_btn.classList.toggle('cato_button_active');
    letter_a.classList.toggle('box2_actives');
});
let letter_b_btn = document.getElementById('letter_b_btn');

letter_b_btn.addEventListener('click', () => {
    letter_b_btn.classList.toggle('cato_button_active');
    letter_b.classList.toggle('box2_actives');
});
let letter_t_btn = document.getElementById('letter_t_btn');

letter_t_btn.addEventListener('click', () => {
    letter_t_btn.classList.toggle('cato_button_active');
    letter_t.classList.toggle('box2_actives');
});

// rat change 

let change_input = document.getElementById('change_input');

change_input.addEventListener('change', () => {
    if (change_input.value >= 8) {
        rate8.classList.add('box2_actives');
    } else {
        rate8.classList.remove('box2_actives');
    }
    if (change_input.value < 8) {
        rate4.classList.add('box2_actives');
    } else {
        rate4.classList.remove('box2_actives');
    }
});


let search_bx2 = document.getElementsByClassName('search_bx2')[0];


window.addEventListener('load', () => {
    movies.forEach(element => {
        const { img, title, year, url } = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
        <div class="content2">
            <h6>${title}</h6>
            <p>${year}</p>
        </div>`;
        search_bx2.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})