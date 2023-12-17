const Result = ({ data }) => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Conversion Result</h2>
        {data ? (
          <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  };
  
  export default Result;
  