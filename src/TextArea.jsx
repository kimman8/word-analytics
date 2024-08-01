import { useState } from 'react';
import Warning from './Warning';

export default function TextArea() {
  const [text, setText] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [warningText, setWarningText] = useState(
    'Warning: Avoid using @ or <script> in your text'
  );
  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes('<script>')) {
      setShowWarning(true);
      newText = newText.replace('<script>', '');
      setWarningText('Warning: Avoid using <script> in your text');
    } else if (newText.includes('@')) {
      setShowWarning(true);
      newText = newText.replace('@', '');
      setWarningText('Warning: Avoid using @ in your text');
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
      {showWarning && <Warning warningText={warningText} />}
    </div>
  );
}
