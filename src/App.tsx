import './App.css';
import MyModal from './components/MyModal';

function App() {
  const fileUrl = "https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"

  return (
    <div className="App">
      <h1>
        React PDF Viewer
      </h1>
      {/* <ReactPdfView fileUrl={fileUrl}/> */}
      <MyModal fileUrl={fileUrl}/>
    </div>
  );
}

export default App;
