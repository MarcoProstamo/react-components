export default function Filter({ tagsList }) {
  return (
    <>
      <section>
        <p className="text-center">TODO: Filtering Tags</p>
        {tagsList.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </section>
    </>
  );
}
