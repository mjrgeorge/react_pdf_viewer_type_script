import { Viewer, Worker } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const ReactPdfView = ({ fileUrl}) => {
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
                <Viewer fileUrl={fileUrl}/>
            </div>
        </Worker>
  )
}

export default ReactPdfView


// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { pageNavigationPlugin, RenderCurrentPageLabelProps } from '@react-pdf-viewer/page-navigation';
// import * as React from 'react';

// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/page-navigation/lib/styles/index.css';

// interface CurrentPageExampleProps {
//     fileUrl: string;
// }

// const ReactPdfView: React.FC<CurrentPageExampleProps> = ({ fileUrl }) => {
//     const pageNavigationPluginInstance = pageNavigationPlugin();
//     const { CurrentPageLabel } = pageNavigationPluginInstance;

//     return (
//         <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.11.338/build/pdf.worker.js">
//             <div
//                 style={{
//                     height: '750px',
//                     width: '900px',
//                     marginLeft: 'auto',
//                     marginRight: 'auto',
//                 }}
//             >
//             <div
//                 style={{
//                     border: '1px solid rgba(0, 0, 0, 0.3)',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     height: '100%',
//                 }}
//             >
//                 <div
//                     style={{
//                         alignItems: 'center',
//                         backgroundColor: '#eeeeee',
//                         borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
//                         display: 'flex',
//                         justifyContent: 'center',
//                         padding: '8px',
//                     }}
//                 >
//                     <CurrentPageLabel>
//                         {(props: RenderCurrentPageLabelProps) => (
//                             <span>{`${props.currentPage + 1} of ${props.numberOfPages}`}</span>
//                         )}
//                     </CurrentPageLabel>
//                 </div>
//                 <div
//                     style={{
//                         flex: 1,
//                         overflow: 'hidden',
//                     }}
//                 >
//                     <Viewer fileUrl={fileUrl} plugins={[pageNavigationPluginInstance]} />
//                 </div>
//             </div>
//             </div>
//         </Worker>
//     );
// };

// export default ReactPdfView;