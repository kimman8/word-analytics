import Stats from './Stats';
import TextArea from './TextArea';
import { useState } from 'react';
import { INSTAGRAM_MAX_CHARACTERS, FACEBOOK_MAX_CHARACTERS } from './constants';

export default function Container() {
  const [text, setText] = useState('');
  const stats = {
    characterLength: text.length,
    wordCount: text.trim() === '' ? 0 : text.trim().split(/\s+/).length,
    instaLimit: INSTAGRAM_MAX_CHARACTERS - text.length,
    faceBookLimit: FACEBOOK_MAX_CHARACTERS - text.length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats text={text} stats={stats} />
    </main>
  );
}
