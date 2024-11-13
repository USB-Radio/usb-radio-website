import "../styles/TrackCard.css";

function AlbumsCard({ albumMetadata }) {
  const album = albumMetadata?.data?.album;
  if (!album) {
    return <p>No album data available</p>;
  }

  // Obtenemos los lanzamientos populares
  const albumReleases =
    album.moreAlbumsByArtist.items[0].discography.popularReleases.items;

  return (
    <div className="albums-content">
      <h2 className="radio-page-artistDateTitle">Discografia:</h2>
      <div className="albums-card">
        {albumReleases.map((release, index) => {
          // Extraemos el coverArt, name y uri
          const coverArtUrl = release.releases.items[0].coverArt.sources[0].url;
          const albumName = release.releases.items[0].name;

          return (
            <div className="album-set" key={index}>
              <img
                className="album-cover-art-single"
                src={coverArtUrl}
                alt={`${albumName} cover`}
              />

              <p>{albumName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AlbumsCard;
