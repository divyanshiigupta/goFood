import React from 'react'

const Cards = () => {
  return (
    <div>
      <div>
        <div className="card mt-3" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">this is something</p>
            <div className="container w-100">
              <select className="mt-2  h-100 rounded ">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="mt-2  h-100 rounded ">
                <option value="half">half</option>
                <option value="full">full</option>
              </select>
              <div className="d-inline fs-5 h-100 fst-bold">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
