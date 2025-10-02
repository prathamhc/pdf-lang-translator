import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
;

interface FileUploadProps {
    onFileSelect: (file: File) => void;
    loading?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileSelect, loading }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            onFileSelect(acceptedFiles[0]);
        }
    }, [onFileSelect]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf']
        },
        maxFiles: 1,
        disabled: loading
    });

    return (
        <div className="file-upload">
            <div
                {...getRootProps()}
                className={`dropzone ${isDragActive ? 'active' : ''} ${loading ? 'loading' : ''}`}
            >
                <input {...getInputProps()} />
                <div className="dropzone-content">
                    {loading ? (
                        <div className="loading-spinner">
                            <div className="spinner"></div>
                            <p>Uploading...</p>
                        </div>
                    ) : (
                        <>
                            <div className="upload-icon">📄</div>
                            {isDragActive ? (
                                <p>Drop the PDF file here...</p>
                            ) : (
                                <div>
                                    <p>Drag and drop a PDF file here, or click to select</p>
                                    <p className="file-info">Only PDF files are supported (Max: 10MB)</p>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
