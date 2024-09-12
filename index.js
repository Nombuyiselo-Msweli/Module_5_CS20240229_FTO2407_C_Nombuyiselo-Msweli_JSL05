// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "Healing", artist: "Avi Kaplan", genre: "Indie"},
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Stresses out", artist: "21 Pilots", genre: "Grunge"},
    { title: "Radio", artist: "21 Pilots", genre: "Grunge"},
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title:"Together", artist:"Kaytranada", genre: "House"},
    { title:"Overdrive", artist:"Ofenbach", genre: "House"},
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Come as you are", artist: "Nervana", genre: "Grunge"},
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Change on the rise", artist: "Avi kaplan", genre: "Indie"},
    { title: "Take Yours", artist: " Matthew Mole", genre: "Indie"},
    { title: "This Town", artist: "Jeremy Loops ft Black Mambazo", genre: "Indie"},
    { title: "Jeremy", artist: "Pearl Jam", genre: "Grunge"},
    { title:"Leave me alone", artist:"Kaytranda", genre: "House"},
    { title:"baby can you reach", artist:"Todd Terry", genre: "House"},
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Groot": "Indie",
    "Star-Lord": "Rock",
    "Drax" : "House",
    "Gamora": "Pop",
    "Rocket": "Grunge",
};

// Function to generate playlist based on preferred genre
let firstSong = "Tame";  //PLACEHOLDER VARIABLE, MUST CHANGE LATER

//filter songs to separate songs by preferred genre
const grootPlaylist = songs.filter(preference => preference.genre === "Indie"); 
const startlordPlaylist = songs.filter(preference => preference.genre === "Rock");
const draxPlaylist = songs.filter(preference => preference.genre === "House");
const gamoraPlaylist = songs.filter(preference => preference.genre === "Pop");
const rocketPlaylist = songs.filter(preference => preference.genre === "Grunge");

function generatePlaylist(guardians, songs) {                          
    // Use the map() function to create playlists for each Guardian   
const grootSongs = grootPlaylist.map(preference => preference.title + "" + preference.artist)
const starlordSongs = startlordPlaylist.map(preference => preference.title + ""+ preference.artist)
const draxSongs = draxPlaylist.map(preference => preference.title +""+ preference.artist)
const gamoraSongs = gamoraPlaylist.map(preference => preference.title + "" + preference.artist)
const rocketSongs = rocketPlaylist.map(preference => preference.title +"" + preference.artist)
    
    //=== MY CODE, TO CREATE A NEW PARAGRAPH ELEMENT AND DISPLAY IT FOR EACH PLAYLIST ===
//enabling display plai=ylists functionality
  let playlistsDiv = document.getElementById('playlists');

  //Creating and appending Groot's Playlist to the div element to display the text
    let grootPlaylistElement = document.createElement('p');
    grootPlaylistElement.textContent = `Groot's Playlist: ${grootSongs}`;
    playlistsDiv.appendChild(grootPlaylistElement);

//Creating and appending Star Lord's Playlist to the div element to display the text
    let starlordPlaylistElement = document.createElement('p');
    starlordPlaylistElement.textContent = `Star Lord's Playlist: ${starlordSongs}`;
    playlistsDiv.appendChild(starlordPlaylistElement);

//Creating and appending Drax's Playlist to the div element to display the text
    let draxPlaylistElement = document.createElement('p');
    draxPlaylistElement.textContent = `Drax's Playlist: ${draxSongs}`;
    playlistsDiv.appendChild(draxPlaylistElement);

//Creating and appending Gamora's Playlist to the div element to display the text
    let gamoraPlaylistElement = document.createElement('p');
    gamoraPlaylistElement.textContent = `Gamora's Playlist: ${gamoraSongs}`;
    playlistsDiv.appendChild(gamoraPlaylistElement);

//Creating and appending Rocket's Playlist to the div element to display the text
    let rocketPlaylistElement = document.createElement('p');
    rocketPlaylistElement.textContent = `Rocket's Playlist: ${rocketSongs}`;
    playlistsDiv.appendChild(rocketPlaylistElement);
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);