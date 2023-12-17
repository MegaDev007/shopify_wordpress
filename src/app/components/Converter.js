const Converter = ({ onConvert }) => {
    return (
      <div className="mb-4">
        <button onClick={onConvert} className="bg-blue-500 text-white px-4 py-2 rounded">
          Convert to WordPress CSV
        </button>
      </div>
    );
  };
  
  export default Converter;
  