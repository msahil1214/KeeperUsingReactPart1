import "./styles.css";
import Head from "./Header";
import Footer from "./Footer";
import Note from "./note";
export default function App() {
  return (
    <div className="App">
      <Head className="header" />

      <Note className="note" />

      <Footer className="footer" />
    </div>
  );
}
