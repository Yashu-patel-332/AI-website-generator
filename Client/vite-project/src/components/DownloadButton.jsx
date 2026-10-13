import { downloadWebsite } from "../services/download";

function DownloadButton({ website }) {
  if (!website) {
    return null;
  }

  const handleDownload = () => {
    downloadWebsite(website);
  };

  return (
    <button
      className="download-btn"
      onClick={handleDownload}
    >
      ⬇ Download Website
    </button>
  );
}

export default DownloadButton;