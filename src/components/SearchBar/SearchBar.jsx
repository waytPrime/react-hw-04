import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit, queryParams }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.elements.search.value.trim() === "") {
      toast.error("loh");
      return;
    }

    onSubmit(e.target.elements.search.value);
    queryParams(e.target.elements.search.value);
    // e.target.reset();
  };

  return (
    <>
      <header className={css.we}>
        <form onSubmit={handleSubmit}>
          <input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster />
    </>
  );
}
