import React from 'react'
import {Link} from 'react-router-dom'
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import imag from '../Images/doctor.svg'
function Home() {
  return (
    <>
    <div className='container'>
      
      <div className="textHome">
        <div className='caption'>
          <h4>نحن هنا من أجلك</h4>
          <h1>مرحبا بكم <br/>  
            في العيادة الطبية 
          </h1>
          <p>احصل على أفضل تجربة رعاية صحية دون الحاجة إلى مغادرة المنزل. <br/>
            نحن نتبع طريق التطوير، ونوسع نطاق خدماتنا بانتظام .</p> 
        </div>
        
        <div className="btn">
           <Link to="/حجز موعد"  >حجز موعد</Link>
           <p>انظر كيف نعمل <MdOutlineKeyboardDoubleArrowLeft /></p>
        </div>
      </div>

      <div className="imgHome">
        <img src={imag} alt="" />
      </div>

    </div>
    </>
  )
}

export default Home