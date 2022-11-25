import * as React from 'react';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


import openLinksPlugin from './openLinksPlugin';

interface OpenConfirmationModalExampleProps {
    fileUrl: string;
}

const OpenConfirmationModalExample: React.FC<OpenConfirmationModalExampleProps> = ({ fileUrl }) => {
    const openLinksPluginInstance = openLinksPlugin();

    // return <Viewer fileUrl={fileUrl} plugins={[openLinksPluginInstance]} />;
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer fileUrl={fileUrl} plugins={[openLinksPluginInstance]}/>
            </div>
        </Worker>
  )
    
};

export default OpenConfirmationModalExample;
