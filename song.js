const time = document.querySelector(".time");

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert 24-hour to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  const strHours = hours.toString().padStart(2, '0');
  const strMinutes = minutes.toString().padStart(2, '0');
  const strSeconds = seconds.toString().padStart(2, '0');

  return `${strHours}:${strMinutes}:${strSeconds} ${ampm}`;
}

function calltime() {
  setInterval(() => {
    time.innerHTML = getCurrentTime();
  }, 1000); // Update every 1 second
}

calltime(); // Start the clock
const vibe = {
  1.0: {
    name: "Tukoh Taka",
    file: "Music_song_png/Tukoh Taka.mp3",
    image: "Music_song_png/Tukoh Taka.png"
  },
  1.1: {
    name: "Traag Pappiee",
    file: "Music_song_png/Traag_pappie.mp3",
    image: "Music_song_png/Traag_pappie.png"
  },
  1.2: {
    name: "Magneta Riddim",
    file: "Music_song_png/Magenta Riddim.mp3",
    image: "Music_song_png/Magneta Riddim.png"
  },
  1.3: {
    name: "Waka Waka",
    file: "Music_song_png/Waka Waka.mp3",
    image: "Music_song_png/Waka Waka.png"
  },
  1.4: {
    name: "9:45",
    file: "Music_song_png/9_45.mp3",
    image: "Music_song_png/9_45.png"
  },
  1.5: {
    name: "Kolaveri",
    file: "Music_song_png/Kolaveri.mp3",
    image: "Music_song_png/Kolaveri.png"
  },
  1.6: {
    name: "Mi Gente",
    file: "Music_song_png/Mi Gente.mp3",
    image: "Music_song_png/Mi Gente.png"
  },
  1.7: {
    name: "Despacito",
    file: "Music_song_png/Despacito.mp3",
    image: "Music_song_png/Despacito.png"
  }
};
const love = {
  2.0: {
    name: "Aaj Se Teri",
    file: "Music_song_png/Aaj Se teri sari.mp3",
    image: "Music_song_png/Aaj Se teri sari.png"
  },
  2.1: {
    name: "Jeene Lage Hoon",
    file: "Music_song_png/Jeene Laga Hoon.mp3",
    image: "Music_song_png/Jeene Laga Hoon.png"
  },
  2.2: {
    name: "Gun Gun Guna",
    file: "Music_song_png/Gun Gun Guna .mp3",
    image: "Music_song_png/Gun Gun Guna.png"
  },
  2.3: {
    name: "Kashmir Main Tu Kanyakumari",
    file: "Music_song_png/Kashmir Main Tu Kanyakumari.mp3",
    image: "Music_song_png/kashmir Main Tu kanyaKumari.png"
  },
  2.4: {
    name: "Slow Motion Angreza",
    file: "Music_song_png/Slow Motion Angreza.mp3",
    image: "Music_song_png/Slow Motion Angreza.png"
  },
  2.5: {
    name: "Laung Da Lashkara",
    file: "Music_song_png/Laung Da Lashkara.mp3",
    image: "Music_song_png/Laung Da Lashkara.png"
  }
};
const motivation = {
  3.0: {
    name: "Morni",
    file: "Music_song_png/Morni.mp3",
    image: "Music_song_png/Morni.png"
  },
  3.1: {
    name: "Aam Jahe Munde",
    file: "Music_song_png/Aam Jahe Munde  .mp3",
    image: "Music_song_png/Aam Jahe Munde .png"
  },
  3.2: {
    name: "Bebe Bapu",
    file: "Music_song_png/Bebe Bapu .mp3",
  },
  3.3: {
    name: "Victory Anthem",
    file: "Music_song_png/VICTORY Anthem.mp3",
    image: "Music_song_png/Victory Anthem.png"
  }
};
const badass = {
  4.0: {
    name: "Leo-Badass",
    file: "Music_song_png/Leo-Badass.mp3",
    image: "Music_song_png/Leo-Badass.png"
  },
  4.1: {
    name: "Russian Bandana",
    file: "Music_song_png/Russian Bandana.mp3",
    image: "Music_song_png/Russain Bandana.png"
  },
  4.2: {
    name: "Baadshah O Baadshah",
    file: "Music_song_png/Baadshah O Baadshah.mp3",
    image: "Music_song_png/Baadshah O Baadshah.png"
  },
  4.3: {
    name: "Born to shine",
    file: "Music_song_png/Born to Shine.mp3",
    image: "Music_song_png/Born to Shine.png"
  },
  4.4: {
    name: "Go Down Deh",
    file: "Music_song_png/Go Down Deh.mp3",
    image: "Music_song_png/Go Down Deh.png"
  },
  4.5: {
    name: "Cheques",
    file: "Music_song_png/Cheques.mp3",
    image: "Music_song_png/Cheques.png"
  }
};
const dance = {
  5.0: {
    name: "Chikni Chameli",
    file: "Music_song_png/Chikni Chameli.mp3",
    image: "Music_song_png/Chikni Chameli.png"
  },
  5.1: {
    name: "Laila Main Laila",
    file: "Music_song_png/Laila Main Laila.mp3",
    image: "Music_song_png/Laila Main Laila.png"
  },
  5.2: {
    name: "Badtamez Dil",
    file: "Music_song_png/Badtameez Dil.mp3",
    image: "Music_song_pngBadtameez Dil.png"
  },
  5.3: {
    name: "Chamma Chamma",
    file: "Music_song_png/Chamma Chamma .mp3",
    image: "Music_song_png/Chamma Chamma.png"
  },
  5.4: {
    name: "Munni Badnaam",
    file: "Music_song_png/Munni Badnaam.mp3",
    image: "Music_song_png/Munni Badnaam.png"
  },
  5.5: {
    name: "Sheila Ki Jawani",
    file: "Music_song_png/Sheila Ki Jawani.mp3",
    image: "Music_song_png/Sheila Ki Jawani.png"
  }
};
const god = {
  6.0: {
    name: "Namo Namo",
    file: "Music_song_png/Namo Namo.mp3",
    image: "Music_song_png/Namo Namo.png"
  }
};

const titles = [ "Vibe" , "Love", "Motivation", "Badass", "Dance", "God"];
let titletrack = 0;
// Step 2: Add audio player dynamically (if not already there)
let audio = document.createElement("audio");
audio.controls = true;
audio.className = "audio-player";

let songId = null;
let songtitle = null;

// Step 3: Add click event listeners to all songs
const songBoxes = document.querySelectorAll(".song");

const pause = document.querySelector(".pause");
function searching_song_by_id(songId , songtitle)
{
    if(pause.innerHTML=="Play")
    {
      pause.innerHTML = "Pause";
    }
    console.log(songId);
    let songData=null;
    if( songtitle == "Vibe")
    {
      titletrack = 0;
      songData = vibe[songId];
    }
    if( songtitle == "Love")
    {
      titletrack = 1;
      songData = love[songId];
    }
    if( songtitle == "Motivation")
    {
      titletrack = 2;
      songData = motivation[songId];
    }
    if( songtitle == "Badass")
    {
      titletrack = 2;
      songData = badass[songId];
    }
    if( songtitle == "Dance")
    {
      titletrack = 2;
      songData = dance[songId];                         //add here
    }
    if( songtitle == "God")
    {
      titletrack = 2;
      songData = god[songId];                         //add here
    }

    if (songData) {
      audio.src = songData.file;
      audio.play();

      // Update image and song title (optional)
      document.querySelector(".player_img").style.backgroundImage = `url('${songData.image}')`;
      document.querySelector(".player_name").innerHTML = `${songData.name}`;
    } else {
      console.error("No song found for ID:", songId);
    }
    songId = Number(songId);
    
  audio.addEventListener("loadedmetadata", () => {
    const durationInSec = audio.duration;
    document.querySelector(".timing").max = durationInSec;
  });
  audio.addEventListener("timeupdate", () => {
  document.querySelector(".timing").value = audio.currentTime;
  const times = document.querySelector(".timing");
  const timeinint = parseFloat(times.value);
  let durationofsong = Math.floor(audio.duration);
  durationofsong = parseFloat(durationofsong);
  console.log("Id of song is : ", songId);
  if(durationofsong==timeinint)
  {
    console.log("the end of the song");
    callnext();
  }
});

// Seek in song when user moves the slider
document.querySelector(".timing").addEventListener("input", () => {
  audio.currentTime = document.querySelector(".timing").value;
});
}
function searchtitle(songtitle)
{
  for ( let titleno=0; titleno<titles.length; titleno++)
  {
    if( titles[titleno]==songtitle)
    {
      console.log("found");
      return titleno;
    }
  }
}
let titlelength = 0;
// main song selector
songBoxes.forEach(song => {
  song.addEventListener("click", () => {
    songtitle = song.getAttribute("title");
    titlelength = searchtitle(songtitle);
    console.log(titlelength);
    console.log(titles[titlelength]);
    songtitle = titles[titlelength];
    console.log(songtitle);
    songId = song.getAttribute("data-id");
    songId = parseFloat(songId);
    console.log(songId);
    
    searching_song_by_id(songId, songtitle);
  });
});
const typesofmusic = { vibe, love, motivation, badass, dance, god};         //addtion of when you add new thing is here 
//pause and play
pause.addEventListener(("click"), ()=> {
  if( audio.paused)
  {
    audio.play();
    pause.innerHTML = "Pause";
  }
  else
  {
    audio.pause();
    pause.innerHTML = "Play";
  }
});
function callnext()
{
  console.log(songId);
  let nextId = (parseFloat(songId) + 0.1).toFixed(1);

const currentTitle = titles[titlelength].toLowerCase(); // Because your object keys are lowercase (vibe, love)

if (
  typesofmusic[currentTitle] && 
  typesofmusic[currentTitle].hasOwnProperty(nextId)
) 
  {
    console.log(nextId);
    nextId = parseFloat(nextId);
    songId = nextId;
    console.log("exits"); 
    songId = parseFloat(songId);
    console.log(songId);
    searching_song_by_id(songId, songtitle);
  }
  else
  {
    console.log("not exits");
    if( titlelength+1===titles.length)
    {
      console.log("do nothing");
    }
    else{
    console.log(songId);
    songId = (Math.floor(parseFloat(songId)) + 1).toFixed(1);
    songId = parseFloat(songId);
    console.log("afte mod", songId);
    console.log(songId);
    titlelength++;
    songtitle = titles[titlelength];
    console.log("title length " , titlelength);
    console.log("Size of titke : ", titles.length);
    searching_song_by_id(songId, songtitle);
    }
  }
}
//prev logic
const next = document.querySelector(".next");
next.addEventListener(("click"), ()=>{
  callnext();
});
const prev = document.querySelector(".prev");
prev.addEventListener(("click"), ()=>{
  let nextId = (parseFloat(songId) - 0.1).toFixed(1);
  nextId = parseFloat(nextId);
  console.log(nextId);
const currentTitle = titles[titlelength].toLowerCase(); 
if (
  typesofmusic[currentTitle] && 
  typesofmusic[currentTitle].hasOwnProperty(nextId)
) 
  {
    console.log("in if for prev");
    songId = nextId;
    console.log("exits"); 
    
    songId = parseFloat(songId);
    console.log(songId);
    searching_song_by_id(songId, songtitle);
  }
  else
  {
    console.log("not exits");
    console.log(songId);
    songId = parseFloat(songId);    //1
    console.log("title of the song is :", songtitle);
    const temp = songtitle.toLowerCase();
    console.log("Tmep ; ", temp);
    console.log("lenght : ",titles[titlelength-1]);
    const ob = typesofmusic[titles[titlelength-1].toLowerCase()];
    console.log("object is :", ob);
    let size = Object.keys(ob).length;
    console.log("Size is : ", size);
    console.log("afte mod", songId);
    console.log(songId);
    songId--;
    console.log("Minus Song id :", songId);
    size--;
    size = size/10;
    console.log("after sice : ", size);
    songId = songId+size;
    titlelength--;
    songtitle = titles[titlelength];
    searching_song_by_id(songId, songtitle);
  }
});
