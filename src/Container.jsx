import Stats from './Stats';
import TextArea from './TextArea';
import { useState } from 'react';
export default function Container() {
  const [text, setText] = useState('');
  const stats = {
    characterLength: text.length,
    wordCount: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
    instaLimit: 210 - text.length,
    faceBookLimit: 2200 - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats text={text} stats={stats} />
    </main>
  );
}
