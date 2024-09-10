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
    // Feel free to add even more songs
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
let firstSong = "Tame";

function generatePlaylist(guardians, songs) {                           //THIS IS FOR DISPLAYING THE LISTS
    // Use the map() function to create playlists for each Guardian    //I'm supposed to use map to extract song name and artist

    //=== MY CODE ===
//enabling display plai=ylists functionality
  let playlistsDiv = document.getElementById('playlists');

  //Creating and appending Groot's Playlist to the div element to display the text
    let grootPlaylistElement = document.createElement('p');
    grootPlaylistElement.textContent = `Groot's Playlist: ${firstSong}`;
    playlistsDiv.appendChild(grootPlaylistElement);

//Creating and appending Star Lord's Playlist to the div element to display the text
    let starlordPlaylistElement = document.createElement('p');
    starlordPlaylistElement.textContent = `Star Lord's Playlist: ${firstSong}`;
    playlistsDiv.appendChild(starlordPlaylistElement);

//Creating and appending Drax's Playlist to the div element to display the text
    let draxPlaylistElement = document.createElement('p');
    draxPlaylistElement.textContent = `Drax's Playlist: ${firstSong}`;
    playlistsDiv.appendChild(draxPlaylistElement);

//Creating and appending Gamora's Playlist to the div element to display the text
    let gamoraPlaylistElement = document.createElement('p');
    gamoraPlaylistElement.textContent = `Gamora's Playlist: ${firstSong}`;
    playlistsDiv.appendChild(gamoraPlaylistElement);

//Creating and appending Rocket's Playlist to the div element to display the text
    let rocketPlaylistElement = document.createElement('p');
    rocketPlaylistElement.textContent = `Rocket's Playlist: ${firstSong}`;
    playlistsDiv.appendChild(rocketPlaylistElement);

}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);