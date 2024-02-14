import React from 'react'
import imag from '../Images/doctor.svg';
import {Link} from "react-router-dom"

function Reservtion() {
  return (
    <section className='reservation'>
      <div className="Right_Res">
          <div className="img_right_res">
            <img src={imag} alt="doctor" />
            <div className='text_right_res'>
              <h3>الدكتور احمد علي</h3>
              <p>معلومات الدكتور</p>
            </div>
            <div className="year_doctor">
              <p>20<br/> سنة خبرة</p>
              <p>9.5<br/> التقيم</p>
            </div>
            <div className="location-doctor">
              <h3>موقع العيادة</h3>
              <div className='map'>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.4072561098214!2d44.35589767992496!3d32.
                              00408024643001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x155ed7929047c16f%3A0x5f25fca3a0751e39!2z2
                              LnZitin2K_YqSDYp9mE2YXZgdin2LXZhCDYp9mE2KrYrti12LXZitipINin2YTYr9mD2KrZiNixINi52YTZiiDYrdmF2K_ZiiDYp9mE2K_YrNmK2YTZig!
                              5e0!3m2!1sar!2siq!4v1707857851262!5m2!1sar!2siq" 
                              allowfullscreen="" 
                              loading="lazy" 
                              referrerpolicy="no-referrer-when-downgrade">

                </iframe>
             </div>
            </div>
          </div>
      </div>

      <div className="Left_Res">
        <div className='btn_res'>
          <Link to="">احجز الان</Link>   
        </div>
        <div className='table-res'>
          <div className='day_res'>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reservtion