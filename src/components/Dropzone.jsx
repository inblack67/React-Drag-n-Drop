import React, { useState } from 'react'
import superArrayOfObjects from '../utils/superArrayOfObjects'
import { parse } from 'papaparse'

const Dropzone = () => {

    const [images, setImages] = useState([]);
    const [csvData, setCsvData] = useState([]);
    const [csvFiles, setCsvFiles] = useState([]);
    const [highlighted, setHighlighted] = useState(false);

    const onDragOver = e => {
        e.preventDefault(); // it downloads
    }

    const onDrop = e => {
        e.preventDefault();
        setHighlighted(false);
        // console.log(e.dataTransfer.files);
        const filesArray = Array.from(e.dataTransfer.files).filter(file => file.type === 'text/csv');
        filesArray.forEach(async file => {
            const contents = await file.text();
            const res = parse(contents, {
                header: true
            });
            setCsvData(res.data);
        })

        const images = Array.from(e.dataTransfer.files).filter(file => file.type === 'img/jpg' || 'img/png');

        setImages(images);

        setCsvFiles(filesArray);
    }

    return (
        <div>
            <div className={highlighted ? 'red': 'grey'} style={{height: '10rem'}} onDragOver={onDragOver} onDrop={onDrop} onDragEnter={e => setHighlighted(true)} onDragLeave={e => setHighlighted(false)}>
                <p className="flow-text">
                    Drop here!
                </p>
            </div>
            <ul className="collection">
                { csvData.map((data, index) => <li key={index}>
                    { `${data.name} | ${data.email}` }
                </li>) }
            </ul>
        </div>
    )
}

export default Dropzone
