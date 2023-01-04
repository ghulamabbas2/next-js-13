export default function DetailsLayout({ children }) {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <div className="alert alert-success">
          <h2>Nested Layout</h2>
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
