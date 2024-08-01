import { useState } from 'react';
import Warning from './Warning';

export default function TextArea() {
  const [text, setText] = useState('');
  const [warningText, setWarningText] = useState('');
  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes('<script>')) {
      newText = newText.replace('<script>', '');
      setWarningText('Warning: Avoid using <script> in your text');
    } else if (newText.includes('@')) {
      newText = newText.replace('@', '');
      setWarningText('Warning: Avoid using @ in your text');
    } else {
      setWarningText('');
    }
    setText(newText);
  };
  return (
    <div className="textarea">
      <textarea
        placeholder="Enter some text..."
        value={text}
        spellCheck="false"
        onChange={handleChange}
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
