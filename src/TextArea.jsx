import { useState } from 'react';

export default function TextArea() {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes('<script>')) {
      alert('No scripts allowed!');
      newText = newText.replace('<script>', '');
    }
    setText(newText);
  };
  return (
    <textarea
      placeholder="Enter some text..."
      value={text}
      className="textarea"
      spellCheck="false"
      onChange={handleChange}
    />
  );
}
