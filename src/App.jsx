import { useState } from "react";
import { Audio } from "react-loader-spinner";
import "./App.css";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import httpRequest from "./httpRequest/httpRequest";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [arrayImg, setArrayImg] = useState([]);
  const [loader, setloader] = useState(false);
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);
  const [queryParam, setqueryParam] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const onSearch = async (query) => {
    try {
      setError(false);
      setArrayImg([]);
      setloader(true);
      const data = await httpRequest(query);
      setArrayImg(data.data.results);
      setloader(false);
    } catch {
      setError(true);
    } finally {
      setloader(false);
    }
  };

  const onSearchMore = async (query) => {
    let newPage = 1;
    newPage += 1;
    try {
      setError(false);
      setloader(true);
      const data = await httpRequest(query, newPage);
      setArrayImg((prevState) => {
        console.log([...prevState, ...data.data.results]);
        return [...prevState, ...data.data.results];
      });

      setloader(false);
    } catch {
      setError(true);
    } finally {
      setloader(false);
    }
  };
  return (
    <>
      <SearchBar onSubmit={onSearch} queryParams={setqueryParam} />
      {arrayImg.length !== 0 && (
        <ImageGallery
          images={arrayImg}
          setImgUrl={setImgUrl}
          setModal={setModal}
        />
      )}
      {loader && <Audio />}
      {error && <p>error</p>}
      {arrayImg.length !== 0 && (
        <div className="button-more">
          <button type="button" onClick={() => onSearchMore(queryParam)}>
            search more
          </button>
        </div>
      )}
      {modal && (
        <ImageModal
          imageUrl={imgUrl}
          modalIsOpen={modal}
          setModalIsOpen={setModal}
        />
      )}
    </>
  );
}

export default App;
