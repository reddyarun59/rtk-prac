import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {

    const dispatch=useDispatch()
    const [title, setTitle] =React.useState("")
    const [content, setContent] =React.useState("")
    const [userId, setUserId] = React.useState()

    const users =useSelector(selectAllUsers)

    const onTitleChange=(e)=>setTitle(e.target.value)
    const onContentChange=(e)=>setContent(e.target.value)
    const onAuthorChange=(e)=>setUserId(e.target.value)

    const onSavePostClicked=()=>{
        if(title&&content){
            dispatch(postAdded(title, content, userId))
            setTitle("")
            setContent("")
        }
    }

    const canSave=Boolean(title)&&Boolean(content)&&Boolean(userId)

    const usersOption=users.map(user=>(
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <section>
        <h2>Add new Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" name="postTitle" value={title} onChange={onTitleChange} />

            <label htmlFor="postAuthor">Author:</label>
            <select value={userId} onChange={onAuthorChange}>
                <option value=""></option>
                {usersOption}
            </select>
            <label htmlFor="postContent">Post Content:</label>
            <textarea type="text" name="postContent" value={content} onChange={onContentChange} />
            <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Submit</button>
        </form>
    </section>
  )
}

export default AddPostForm