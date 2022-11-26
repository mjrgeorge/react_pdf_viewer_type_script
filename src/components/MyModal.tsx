import { Worker } from '@react-pdf-viewer/core';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import '@react-pdf-viewer/core/lib/styles/index.css';

const MyModal = () => {
    const [shown, setShown] = useState(false);

    const modalBody = () => (
        <div
            style={{
                margin: '10px auto',
                height: '',
                width: '500px',
                border: '3px solid #73AD21',
            }}
        >
            <div
                style={{
                    alignItems: 'center',
                    backgroundColor: 'Gray',
                    color: '#fff',
                    display: 'flex',
                    padding: '.5rem',
                }}
            >
                <div style={{ marginRight: 'auto' }}>Video Title</div>
                <button
                    style={{
                        backgroundColor: 'goldenrod',
                        border: 'none',
                        borderRadius: '4px',
                        color: '#ffffff',
                        cursor: 'pointer',
                        padding: '8px',
                    }}
                    onClick={() => setShown(false)}
                >
                    Close
                </button>
            </div>
            <div style={{padding: '10px'}}>
                <div>
                <video width="100%" controls>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4"/>
                </video>
                </div>
            </div>
        </div>
    );

    return (
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.js">
            <button
                style={{
                    backgroundColor: 'gray',
                    border: 'none',
                    borderRadius: '.25rem',
                    color: '#fff',
                    cursor: 'pointer',
                    padding: '.5rem',
                }}
                onClick={() => setShown(true)}
            >
                React PDF Viewer
            </button>
            {shown && ReactDOM.createPortal(modalBody(), document.body)}
        </Worker>
    );
};

export default MyModal;