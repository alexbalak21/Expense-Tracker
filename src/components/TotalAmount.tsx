export default function TotalAmount({total}: {total: number}) {
  return (
    <div className="my-5 d-flex align-items-center">
      <span className="h4 ms-lg-4 d-block total-label">Total Amount:</span>
      <span className="h3 d-block total-amount">{total}$</span>
    </div>
  )
}
