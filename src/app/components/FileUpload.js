import { useDropzone } from 'react-dropzone';

const FileUpload = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles) => {
    onFileUpload(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.csv',
  });
  return (
    <div {...getRootProps()} className="p-4 border-dashed border-2 border-gray-400 mb-8">
      <input {...getInputProps()} />
      <p className="text-center">Drag 'n' drop a Shopify CSV file here, or click to select one</p>
    </div>
  );
};

export default FileUpload;
