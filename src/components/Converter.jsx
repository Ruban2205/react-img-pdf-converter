import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import Upload from './Upload';

const Converter = () => {
    const [images, setImages] = useState([]);

    const handleDrop = (acceptedFiles) => {
        const imageFiles = acceptedFiles.map(file => URL.createObjectURL(file));
        setImages([...images, ...imageFiles]);
    };

    const handleConvert = () => {
        const pdf = new jsPDF();
        images.forEach((image, index) => {
            if (index > 0) pdf.addPage();
            pdf.addImage(image, 'JPEG', 10, 10, 180, 160);
        });
        pdf.save('converted.pdf');
    };

    return (
        <div>
            <Upload onDrop={handleDrop} />
            {images.length > 0 && (
                <div>
                    <h3>Uploaded Images</h3>
                    <div>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`upload-${index}`} width="100" />
                        ))}
                    </div>
                    <button onClick={handleConvert}>Convert to PDF</button>
                </div>
            )}
        </div>
    );
};

export default Converter;