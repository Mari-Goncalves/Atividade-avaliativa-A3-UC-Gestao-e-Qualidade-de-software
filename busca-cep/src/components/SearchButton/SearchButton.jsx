import "./style.css";

function SearchButton({ buttonText, onClick }) {
  return (
    <button className="buttonSearch" onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default SearchButton;
