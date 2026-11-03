import React from 'react'

const restaurants = [
  { id: 1, name: 'miora', 'image': '' },
  { id: 2, name: 'grano', 'image': '' },
  { id: 3, name: 'rino', 'image': '' },
  { id: 4, name: 'aljomeira', 'image': '' },
  { id: 5, name: 'karolanch', 'image': '' }
]

export default function RestaurantsListPage() {
  function handleClick(id) {
    console.log(id);
    
  }
  return (
    <div>
      {restaurants.map((item) => {
        return (
          <div className='border rounded-2' onclick={()=>{ handleClick(item.id) }}>
            <p>
              {item.name}
            </p>
          </div>
        )
      })}

    </div>
  )
}
