
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


import openLinksPlugin from './openLinksPlugin';

const OpenConfirmationModal = ({ fileUrl }) => {
    const openLinksPluginInstance = openLinksPlugin();

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

export default OpenConfirmationModal;
