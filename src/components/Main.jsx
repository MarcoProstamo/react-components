import Filter from "./Filter";
import Card from "./Card";
import { posts } from "../data/posts";

export default function Main() {
  return (
    <>
      <main>
        <Filter tagsList={[]} />
        <div className="card-container">
          {posts
            .filter((post) => post.published)
            .map((post) => (
              <Card
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                tags={post.tags}
              />
            ))}
        </div>
      </main>
    </>
  );
}
