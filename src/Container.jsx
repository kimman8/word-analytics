import Stats from './Stats';
import TextArea from './TextArea';
import { useState } from 'react';
export default function Container() {
  const [text, setText] = useState('');
  const characterLength = text.length;
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats text={text} characterLength={characterLength} />
    </main>
  );
}
