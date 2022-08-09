import React from 'react'

const Categories = ({categories,filterFoods}) => {
  return (
    <div>
        {
            categories.map((category,index) => {
                return(
                    <button key={index} onClick={() => filterFoods(category)}>{category}</button>
                )
            })
        }
    </div>
  )
}

export default Categories