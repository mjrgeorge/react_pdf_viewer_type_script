import './App.css';
import MyPDF from './components/documents/webviewer-demo.pdf';
import OpenConfirmationModal from './components/OpenConfirmationModal';

function App() {
  // const fileUrl = "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"
  const fileUrl = MyPDF

  return (
    <div className="App">
      <h1>
        React PDF Viewer
      </h1>
      <OpenConfirmationModal fileUrl={fileUrl}/>
      {/* <br />
      <br />
      <MyModal/>
      <br />
      <br />
      <ReactPdfView fileUrl={fileUrl}/> */}
    </div>
  );
}

export default App;
