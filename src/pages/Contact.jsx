import React, {useState} from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
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

    if(!formData.email.trim()) {
        validationErrors.email = "يجب ادخال الايميل"
    } else if(!/\S+@\S+\.\S+/.test(formData.email)){
        validationErrors.email = "email is not valid"
    }

    setErrors(validationErrors)

  }
  return (
    <form type="submit" className='contact-form'>
      <input className='BookInput' type="text" name=""  placeholder='الاسم الكامل'/>
      <input className='BookInput' type="number" name=""  placeholder='العمر '/>
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
      <input className='BookInput' type="text" name=""  placeholder=' الموضوع'/>
      <textarea className='BookInput' name="massage" cols="30" rows="5" placeholder='النص'></textarea>
      <button type="submit">ارسال</button>
    </form>
  )
}

export default Contact