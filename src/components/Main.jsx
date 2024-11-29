import Filter from "./Filter";
import Card from "./Card";
import { posts } from "../data/posts";

export default function Main() {
  return (
    <>
      <main>
        <Filter />
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
}
