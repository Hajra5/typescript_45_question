function make_album(artist: string, title: string,tracks: number):
{artist: string; title: string; tracks?: number}
{
    const album = {
        artist,
        title,
        tracks
    };
    if (tracks !== undefined)
    {
        album.tracks = tracks;

    }
    return album;

}

const album1 = make_album(`Sameer`, `Fog`,7);

const album2 = make_album(`Arhum`, `Ranjha` , 14);

const album3 = make_album(`Ali`, `Dair` , 10);


console.log(album1);
console.log(album2);
console.log(album3);




