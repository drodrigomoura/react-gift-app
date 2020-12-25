import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

const GiftExpertApp = (props) => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['One Punch'])

  // const handleAdd = () => {
  //   setCategories(cats => [...categories, 'Naruto']);
  // }

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map((category) => (
            <GiftGrid 
              category={category}
              key={category}  
            />
          ))
          }
      </ol>
    </>
  )
}

// GiftExpertApp.propTypes = {

// }

export default GiftExpertApp;

