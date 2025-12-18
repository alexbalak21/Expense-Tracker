import type {Item} from "../types"

interface Props {
  items: Item[]
  onDeleteExpanse: (index: number) => void
}

export default function BudgetTable({items, onDeleteExpanse}: Props) {
  return (
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
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <button className="btn btn-danger" onClick={() => onDeleteExpanse(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
