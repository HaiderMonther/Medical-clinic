import React from 'react'

function BookNow() {
  return (
    <div className='book_now'>

        <h1>الحجز</h1>
        <div>
            <input type="text" placeholder='الاسم الثلاثي' />
        </div>
        <div>
            <input type="number" placeholder='العمر' />
        </div>
        <div>
            <input type="text" placeholder=' الجنس' />
        </div>
        <div>
            <input type='time' placeholder=' الوقت' />
        </div>
        
    </div>
  )
}

export default BookNow