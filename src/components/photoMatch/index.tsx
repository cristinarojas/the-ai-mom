// Styles
import "./../../App.css";

// Types
type Props = {
  matchingText: string;
};

const PhotoMatch = ({ matchingText }: Props): any => {
  return (
    <>
      <div>
        <section className="main-photo">
          {matchingText ? (
            <img src={`/photos/${matchingText}.jpg`} alt="logo" />
          ) : (
            <img src={"/photos/mainMom.jpg"} className="App-logo" alt="logo" />
          )}
        </section>
      </div>
    </>
  );
};

export default PhotoMatch;
