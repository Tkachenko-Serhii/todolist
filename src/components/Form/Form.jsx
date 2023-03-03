import { useState } from "react";
import { useCreateNoteMutation } from "../../redux/noteSlice"
import s from './Form.module.css'

export default function Form() {
    const [createNote] = useCreateNoteMutation();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreatePost = async () => {
    if ((title.trim(), description.trim())) {
      await createNote({
        title,
          description,
        
      }).unwrap();
      setTitle("");
      setDescription("");
    }
  };

const handleSubmit = (e) => {
    e.preventDefault();
    if (title === " " || description === " ") {
      alert("Fill in the required data");
      return;
    }
  };
    return (
        <form onSubmit={handleSubmit} autoComplete='off' className={s.form}>
            <label htmlFor="title"  className={s.labelTitle}>Title:</label>
            <input id="title" type='text'
                name='title'
                className={s.input}
              value={title}
                autoComplete='off'
          required
          placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="description" className={s.labelDescription}>Description:</label>
            <input id="description" type='text'
                name='description'
                className={s.input}
              value={description}
                autoComplete='off'
          required
          placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)} /> 
            <button type='submit' onClick={handleCreatePost} className={s.button}>Create</button>
        </form>
    )
}