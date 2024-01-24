import "../pages/pages.scss";

function PagesList() {
  return (
    <div className="container">
      <div className="px-5 mt-2 pages-list d-flex gap-3">
        <p className="fw-bold">All Categories </p>
        <p>Mobile Phones</p>
        <p>Cars</p>
        <p>Motorcycles</p>
        <p>Houses</p>
        <p>Video-Audios</p>
        <p>Tablets</p>
        <p>Lands & Plots</p>
      </div>
    </div>
  );
}

export default PagesList;
