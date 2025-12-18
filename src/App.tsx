export default function App() {
  return (
    <div className="container">
      {/* INPUT */}
      <div className="mb-3 mt-5 col-10 col-lg-5 mx-auto">
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input id="description" type="text" className="form-control" placeholder="Coffee" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input id="amount" type="float" className="form-control" placeholder="5.99" />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select id="category" className="form-select">
            <option selected>Food</option>
            <option value="2">Transportation</option>
            <option value="3">Entertainment</option>
          </select>
        </div>
        <div className="text-center">
          <button className="btn btn-primary">Add Expense +</button>
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-4">
        <table className="table table-bordered w-100">
          <thead>
            <tr>
              <th scope="col" className="description-column">
                Description
              </th>
              <th scope="col" className="amount-column">
                Amount
              </th>
              <th scope="col" className="category-column">
                Category
              </th>
              <th scope="col" className="category-action"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coffee</td>
              <td>$5.99</td>
              <td>Food</td>
              <td className="w-10">
                <button className="btn btn-danger btn-sm">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* TOTAL AMOUNT */}
      <div className="my-5 d-flex align-items-center">
        <span className="h4 ms-lg-4 d-block total-label">Total Amount:</span>
        <span className="h3 d-block total-amount">$11.98</span>
      </div>
    </div>
  )
}
