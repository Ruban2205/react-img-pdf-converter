import React, { useCallback } from "react";
import { useDropzone } from 'react-dropzone';

const Upload = ({ onDrop }) => {
    const onDropCallback = useCallback((acceptedFiles) => {
        onDrop(acceptedFiles);
    }, [onDrop]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop: onDropCallback });

    return (
        <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
        </div>
    );
};

export default Upload; 