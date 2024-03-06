import React, {useState} from 'react'
import Nav from '../Component/Nav';
function BookNow() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        chan: '',
        Age: ''
      })
    
      const [errors, setErrors] = useState({})
    
      const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name] : value
        })
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if(!formData.username.trim()) {
            validationErrors.username = "يجب ادخل الاسم"
        }
    
        if(!formData.email.trim()) {
            validationErrors.email = "يجب ادخال الايميل"
        } else if(!/\S+@\S+\.\S+/.test(formData.email)){
            validationErrors.email = "email is not valid"
        }
    
        if(!formData.chan.trim()) {
            validationErrors.chan = "يجب ادخال نوع الجنس"
        }

        if(!formData.Age.trim()) {
            validationErrors.Age = "يجب ادخال العمر "
        }
    
        
    
        setErrors(validationErrors)
    
        if(Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
        }
    
      }
  return (
    <div>
      <Nav />
    
    <form onSubmit={handleSubmit}>
      <div>
    
        <input className='BookInput'
          type="text"
          name="username"
          placeholder='الاسم الثلاثي'  
          autoComplete='off'  
          onChange={handleChange}   
        />
          {errors.username && <span>{errors.username}</span>}  
      </div>
      <div>
        
        <input className='BookInput'
          type="email"
          name="email"
          placeholder='الايميل'
          autoComplete='off'
          onChange={handleChange} 
        />
          {errors.email && <span>{errors.email}</span>}  
      </div>
      <div>
    
        <input className='BookInput'
          type="text"
          name="chan"
          placeholder='الجنس'
          onChange={handleChange} 
        />
          {errors.chan && <span>{errors.chan}</span>}  
      </div>
      <div>
        
        <input className='BookInput'
          type="text"
          name="Age"
          placeholder='العمر'
          onChange={handleChange} 
        />
          {errors.Age && <span>{errors.Age}</span>}  
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default BookNow