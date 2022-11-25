import './App.css';
import MyPDF from './components/documents/webviewer-demo.pdf';
import MyModal from './components/MyModal';
import OpenConfirmationModalExample from './components/OpenConfirmationModalExample';
import ReactPdfView from './components/ReactPdfView';

function App() {
  // const fileUrl = "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf"
  const fileUrl = MyPDF

  return (
    <div className="App">
      <h1>
        React PDF Viewer
      </h1>
      <OpenConfirmationModalExample fileUrl={fileUrl}/>
      <br />
      <br />
      <MyModal fileUrl={fileUrl}/>
      <br />
      <br />
      <ReactPdfView fileUrl={fileUrl}/>
    </div>
  );
}

export default App;
