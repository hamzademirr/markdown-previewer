import React from 'react'
import './style.css'
import { selectMarkdown } from "../../redux/convertMarkdown";
import { useSelector } from "react-redux";
function OutputArea() {
  const markdown = useSelector(selectMarkdown);
  return (
    <div className='output-area'>
      <div className='output-text' dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  )
}

export default OutputArea
