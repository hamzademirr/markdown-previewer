import { useEffect, useState } from 'react'
import './style.css'
import { setMarkdown } from "../../redux/convertMarkdown";
import { useDispatch } from "react-redux";
function InputArea() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(setMarkdown(text));
  }, [text]);
  return (
    <div className='input-area'>
      <textarea onChange={(e) => setText(e.target.value)}></textarea>
    </div>
  )
}

export default InputArea
