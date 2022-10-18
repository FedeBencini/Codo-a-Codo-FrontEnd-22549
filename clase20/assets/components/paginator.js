function Paginator(props) {
  console.log("Paginator:", props);

  const { page, total_pages } = props;

  let prev = `
    <li class="page-item ${page !== 1 ? "" : "disabled"}">
      <a class="page-link ${
        page !== 1 ? `onclick="search(${page - 1})"` : ""
      }">Previous</a>
    </li>
  `;

  let next = `
  <li class="page-item ${page === total_pages ? "disabled" : ""}">
    <a class="page-link" href="#">Next</a>
  </li>
  `;

  let allPages = Pages(page, total_pages);

  const html = `
  <nav aria-label="...">
    <ul class="pagination">
      ${prev}
      ${allPages}
      ${next}
    </ul>
  </nav>
  `;

  return html;
}

function Pages(currentPage, totalPages) {
  let html = ``;

  for (let i = 1; i <= totalPages; i++) {
    console.log("runs");
    if (i == currentPage) {
      html += `
      <li class="page-item active" aria-current="page">
        <a class="page-link" href="#">${i}</a>
      </li>
    `;
    } else {
      html += `
      <li class="page-item" aria-current="page">
        <a class="page-link" href="#">${i}</a>
      </li>
    `;
    }
  }
  return html;
}
