import React from 'react'
import {Icon, Title, Content} from "./index";
import Apps from "../App.module.css"

const BlogList = (props) => {

    const handleClick = () => {
        alert("クリックされました");
    }

  return (
    <div className={Apps.blog_box}> 
     <Icon />
     <Title title={props.title} />
     <Content content={props.content} />
     <button onClick={() => handleClick()}>クリック</button>
    </div>
  )
}

export default BlogList