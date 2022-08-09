import React from 'react'

const Categories = ({filterFoods}) => {
  return (
    <div>
        <button onClick={() => filterFoods('all')}>All</button>
        <button onClick={() => filterFoods('breakfast')}>Breakfast</button>
    </div>
  )
}

export default Categories