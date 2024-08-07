import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Upload = ({ onDrop }) => {
    const onDropCallback = useCallback((acceptedFiles) => {
        onDrop(acceptedFiles);
    }, [onDrop]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop: onDropCallback });

    return (
        <div {...getRootProps()} className="border-2 border-dashed border-gray-300 p-6 rounded-lg cursor-pointer hover:border-gray-400 transition-colors text-center">
            <input {...getInputProps()} />
            <p className="text-gray-500">Drag & drop some files here, or click to select files</p>
        </div>
    );
};

export default Upload;
