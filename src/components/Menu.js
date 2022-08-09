import React from 'react'

const Menu = ({items}) => {
  return (
    <div>
        {
            items.map((foodItem) => {
                const[id,title,price,img,desc] = foodItem;
                return(
                    <div key={id}>
                        <img src={img} alt={title}/>
                        <div>
                            <h2>{title}</h2>
                            <h2>${price}</h2>
                        </div>
                        <p>{desc}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Menu