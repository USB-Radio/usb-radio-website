import "../styles/AlbumMeta.css";

function SongInfo({ albumMetadata }) {
  const album = albumMetadata?.data?.album;
  if (!album) {
    return <p>No album data available</p>;
  }
  const hexColor = album.coverArt.extractedColors.colorRaw.hex;
  const coverArt = album.coverArt.sources[0].url;
  const albumName = album.name;
  const totalTracks = album.tracks.totalCount;
  const url = album.sharingInfo.shareUrl;
  const date = album.date.isoString;

  // Convertimos la fecha a un objeto Date y mostramos solo el año
  const year = new Date(date).getFullYear();
  //   console.log(album);

  return (
    <div className="AlbumMeta-background">
      <div
        className="AlbumMeta-Container"
        style={{ "--album-color": hexColor }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img className="AlbumMeta-Cover" src={coverArt} alt="album-cover" />
        </a>
        <div className="AlbumMeta-text">
          <span>Álbum</span>
          <p className="AlbumMeta-title">{albumName}</p>
          <div className="AlbumMeta-tracks">
            <p>{totalTracks}</p>
            <p>canciones,</p>
            <p>{year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongInfo;
