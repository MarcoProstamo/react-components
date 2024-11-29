import Button from "./Button";

const defaultImgPath = "https://placehold.co/600x400";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={defaultImgPath} alt="place-holder" />
        </div>
        <div className="card-content">
          <h4>Titolo del Post</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            explicabo eius pariatur perferendis commodi, voluptatum harum
            exercitationem!.
          </p>
          <Button />
        </div>
      </div>
    </>
  );
}
