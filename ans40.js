function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks: tracks
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Sameer", "Fog", 7);
var album2 = make_album("Arhum", "Ranjha", 14);
var album3 = make_album("Ali", "Dair", 10);
console.log(album1);
console.log(album2);
console.log(album3);
