import { useContext,useState, useEffect } from 'react'
import './ContactForm.css'

//Components
import Button from '../Button/Button'

// Context
import { AppContext } from '../../contexts/AppContext'

function ContactForm() {
  const appContext = useContext(AppContext)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormValid, setIsFormValid] = useState(false)
  const [formSubmitLoading, setFormSubmitLoading] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isFormValid) {
      setFormSubmitLoading(true)
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...formData, access_key: "ef844d54-d15a-4d42-84ef-bef4de17d20d"})
      })

      if (response.ok) {
        setFormSubmitted(true)
      } else {
        alert('Erro ao enviar!')
      }
    } catch (e) {
      alert('Erro: ',e)
    } finally {
      setFormSubmitLoading(false)
    }
  }  
}

  useEffect(() => {
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    }

    const isValid = formData.name.trim() && 
    formData.email.trim() && 
    isValidEmail(formData.email) && 
    formData.message.trim()

    setIsFormValid(isValid)
  }, [formData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
             <div className="contactForm dFlex fdColumn alCenter">
                <h2>{appContext.languages[appContext.language].contact.title}</h2>
                <form onSubmit={handleSubmit}>
                  <div className="dFlex formGroup">
                    <input 
                      className="formInput"
                      type="text" 
                      id="name"
                      name="name" 
                      placeholder={appContext.languages[appContext.language].contact.pl1}
                      onChange={handleChange} 
                    />
                    <input 
                      className="formInput"
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder={appContext.languages[appContext.language].contact.pl2}
                      onChange={handleChange} 
                    />
                  </div>
                  <div className="dFlex formGroup">
                      <textarea
                        className="formInput"
                        id="message"
                        name="message"
                        placeholder={appContext.languages[appContext.language].contact.pl3}
                        onChange={handleChange}
                        rows="4"
                      ></textarea>
                    </div>
                    <div className=" alCenter dFlex jcEnd formGroup ">
                      {formSubmitted && <p className="textPrimary">{appContext.languages[appContext.language].contact.successMsg}</p>}
                      <Button 
                      text="submit"   
                      buttonStyle="secondary" 
                      disabled={!isFormValid || formSubmitLoading}
                      >
                        {appContext.languages[appContext.language].general.send}
                      </Button>
                    </div>
                </form>
             </div>
  )
}

export default ContactForm