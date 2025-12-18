// InputArea.tsx
import {useState} from "react"
import type {Item} from "../types"

interface InputAreaProps {
  categories: string[]
  onAddExpanse: (item: Item) => void
}

export default function InputArea({categories, onAddExpanse}: InputAreaProps) {
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState<number>(0)
  const [category, setCategory] = useState<string>(categories[0])

  const handleAdd = () => {
    if (!description || price <= 0) return
    onAddExpanse({
      description,
      price,
      category,
    })
    setDescription("")
    setPrice(0)
    setCategory(categories[0])
  }

  return (
    <div className="mb-3 col-10 col-lg-5 mx-auto">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          placeholder="Coffee"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          step="0.01"
          className="form-control"
          placeholder="5.99"
          value={price === 0 ? "" : price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="text-center">
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Expense +
        </button>
      </div>
    </div>
  )
}
