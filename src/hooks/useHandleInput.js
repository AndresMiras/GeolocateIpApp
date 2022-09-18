import { useState } from "react";

export default () => {
    const [input, setInput] = useState('');
    const handleInput = ({target}) => setInput(target.value);
    
    return [input, handleInput]
}
