import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Upload from './Upload';

const Converter = () => {
    const [images, setImages] = useState([]);

    const handleDrop = (acceptedFiles) => {
        const imageFiles = acceptedFiles.map(file => ({
            preview: URL.createObjectURL(file),
            file
        }));
        setImages(prev => [...prev, ...imageFiles]);
    };

    const handleConvert = () => {
        const pdf = new jsPDF();
        images.forEach((image, index) => {
            const { file, preview } = image;
            const img = new Image();
            img.src = preview;
            img.onload = () => {
                if (index > 0) pdf.addPage();
                const width = pdf.internal.pageSize.getWidth();
                const height = (img.height * width) / img.width;
                pdf.addImage(img, 'JPEG', 0, 0, width, height);
                if (index === images.length - 1) {
                    pdf.save('converted.pdf');
                }
            };
        });
    };

    const handleRemove = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <Upload onDrop={handleDrop} />
            {images.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold mb-4">Uploaded Images</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((image, index) => (
                            <div key={index} className="relative">
                                <img src={image.preview} alt={`upload-${index}`} className="w-full h-32 object-cover rounded-md" />
                                <button
                                    onClick={() => handleRemove(index)}
                                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 focus:outline-none"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={handleConvert}
                        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto"
                    >
                        Convert to PDF
                    </button>
                </div>
            )}
        </div>
    );
};

export default Converter;
