import { useState } from "react";
import FileUpload from "../components/FileUpload";
import Converter from "../components/Converter";
import Result from "../components/Result";
import DownloadButton from "../components/DownloadButton";

const IndexPage = () => {
  const [shopifyData, setShopifyData] = useState(null);
  const [wordpressData, setWordpressData] = useState(null);

  //   const handleFileUpload = (file) => {
  //     // Handle file upload logic
  //   };
  const handleFileUpload = async (file) => {
    try {
      const fileContent = await readFileAsync(file);

      // Perform any additional preprocessing or validation if needed
      // For simplicity, assuming CSV content is a string
      setShopifyData(fileContent);
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  const readFileAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(file);
    });
  };

  //   const handleConvert = () => {
  //     // Handle the conversion logic and setWordpressData
  //   };

  const handleConvert = () => {
    try {
      // Perform the conversion logic here
      // For simplicity, assuming direct copy for demonstration
      setWordpressData(shopifyData);
    } catch (error) {
      console.error("Error converting file:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  //   const handleDownload = () => {
  //     // Handle download logic
  //   };
  const handleDownload = () => {
    try {
      if (wordpressData) {
        const blob = new Blob([wordpressData], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = "wordpress.csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Handle the case where there is no data to download
        console.warn("No data available to download.");
      }
    } catch (error) {
      console.error("Error handling download:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">
        Shopify to WordPress Converter
      </h1>

      <FileUpload onFileUpload={handleFileUpload} />
      {shopifyData && (
        <>
          <Converter onConvert={handleConvert} />
          <Result data={wordpressData} />
          <DownloadButton onClick={handleDownload} />
        </>
      )}
    </div>
  );
};

export default IndexPage;
