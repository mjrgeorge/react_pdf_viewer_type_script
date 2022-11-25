import './App.css';
import MyModal from './components/MyModal';
import ReactPdfView from './components/ReactPdfView';

function App() {
  const fileUrl = "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"
  // const fileUrl = "/src/components/documents/exampleWithAudioVideo.pdf"

  return (
    <div className="App">
      <h1>
        React PDF Viewer
      </h1>
      <MyModal fileUrl={fileUrl}/>
      <br />
      <br />
      <ReactPdfView fileUrl={fileUrl}/>
    </div>
  );
}

export default App;
