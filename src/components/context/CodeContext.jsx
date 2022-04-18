import { createContext } from 'react';

const CodeContext = createContext({
  explanation: null,
  setExplanation: null,
});

export default CodeContext;
