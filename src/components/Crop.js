import React, {useState, useEffect} from 'react'

const Crop = () => {
  const [crop, setCrop] = useState({})

  useEffect(() => {
    fetch(
      'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&&filters=gujarat'
    )
      .then(res => res.json())
      .then(data => {
        setCrop(data.records[2])
      })
      .catch(console.log)
  }, [])
  return (
    <div>
      {' '}
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{crop.state}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
            {crop.district} {crop.district}
          </h6>
          <h6 className='card-subtitle mb-2 text-muted'>
            {crop.commodity} {crop.variety}
          </h6>
          <p className='card-text'>Min Price - {crop.min_price}</p>
          <p className='card-text'>Max Price - {crop.max_price}</p>
          <p className='card-text'>Modal Price - {crop.modal_price}</p>
        </div>
      </div>
    </div>
  )
}

export default Crop
