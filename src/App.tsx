// App.tsx
import {useState} from "react"
import BudgetTable from "./components/BudgetTable"
import InputArea from "./components/InputArea"
import TotalAmount from "./components/TotalAmount"
import type {Item} from "./types"

const categories: string[] = ["food", "transportation", "entertainment"]

export default function App() {
  const [items, setItems] = useState<Item[]>([])
  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="container mt-5">
      <InputArea categories={categories} onAddExpanse={(item) => setItems([...items, item])} />
      <BudgetTable items={items} onDeleteExpanse={(index: number) => setItems(items.filter((_, i) => i !== index))} />
      <TotalAmount total={total} />
    </div>
  )
}
