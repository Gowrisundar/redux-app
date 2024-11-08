import DOMPurify from 'dompurify'
import React, {useState} from 'react'

const SanitizeDemo = () => {
    const [input, setInput] = useState('')
    const handleChange =(e) =>{
    setInput(e.target.value)    
    }

    const sanitizedHtml = DOMPurify.sanitize(input)
  return (
    <div className="Container bg-warning">
        <h3>Comments:</h3>
        <textarea value={input} onChange={handleChange} rows="10" cols="60">
        </textarea>
        <h4 className="bg-info">{input}</h4>
        <h5 dangerouslySetInnerHTML={{__html: sanitizedHtml}}></h5>
    </div>
  )
}

export default SanitizeDemo