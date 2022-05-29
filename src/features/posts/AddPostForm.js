import React from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postsSlice'

const AddPostForm = () => {

    const dispatch=useDispatch()
    const [title, setTitle] =React.useState("")
    const [content, setContent] =React.useState("")

    const onTitleChange=(e)=>setTitle(e.target.value)
    const onContentChange=(e)=>setContent(e.target.value)

    const onSavePostClicked=()=>{
        if(title&&content){
            dispatch(postAdded({
                id:nanoid(),
                title,
                content,
            }))
            setTitle("")
            setContent("")
        }
    }

  return (
    <section>
        <h2>Add new Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" name="postTitle" value={title} onChange={onTitleChange} />
            <label htmlFor="postContent">Post Content:</label>
            <textarea type="text" name="postContent" value={content} onChange={onContentChange} />
            <button type="button" onClick={onSavePostClicked}>Submit</button>
        </form>
    </section>
  )
}

export default AddPostForm