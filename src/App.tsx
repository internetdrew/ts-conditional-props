import { ChangeEventHandler, useState } from 'react';
import './App.css';

interface CommonProps {
  inputId: string;
  labelText: string;
  placeholderText: string;
  inputValue: string;
  onValueChange: ChangeEventHandler<HTMLInputElement>;
}

interface InputWithCharacterCounterProps extends CommonProps {
  characterCounter: true;
  maxLength: number;
  inputMessage?: never;
}

interface InputWithMessageProps extends CommonProps {
  inputMessage: string;
  characterCounter?: never;
  maxLength?: never;
}

type InputProps = InputWithCharacterCounterProps | InputWithMessageProps;

const Input = (props: InputProps) => {
  const {
    inputId,
    labelText,
    placeholderText,
    maxLength,
    inputValue,
    characterCounter,
    inputMessage,
    onValueChange,
  } = props;

  return (
    <div className='input'>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        type='text'
        id={inputId}
        placeholder={placeholderText}
        maxLength={maxLength}
        onChange={onValueChange}
      />
      <span>
        {characterCounter
          ? `${inputValue.length}/${maxLength} characters`
          : inputMessage}
      </span>
    </div>
  );
};

function App() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');

  return (
    <div className='flex'>
      <Input
        inputId='input-1'
        labelText='I am Input 1'
        placeholderText='Enter something'
        inputValue={inputValue1}
        onValueChange={e => setInputValue1(e.target.value)}
        inputMessage='hello there'
      />
      <Input
        inputId='input-2'
        labelText='I am Input 2'
        placeholderText='Enter something'
        inputValue={inputValue2}
        onValueChange={e => setInputValue2(e.target.value)}
        characterCounter
        maxLength={100}
      />
    </div>
  );
}

export default App;
