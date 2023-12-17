const DownloadButton = ({ onClick }) => {
    return (
      <div className="mb-4">
        <button onClick={onClick} className="bg-green-500 text-white px-4 py-2 rounded">
          Download Result
        </button>
      </div>
    );
  };
  
  export default DownloadButton;
  