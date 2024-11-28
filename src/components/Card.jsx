import Button from "./Button/Button";

export default function Card() {
  return (
    <>
      <div className="card my-5 center ">
        <div className="card-image">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            alt="place-holder"
          />
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
