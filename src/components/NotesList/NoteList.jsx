import { useFetchNotesQuery } from "../../redux/noteSlice";
import NoteItem from '../NoteItem'
import s from "./NoteList.module.css";

export default function NotesList() {
    const { data = [], isFetching } = useFetchNotesQuery();
    
    return (
        <>
        {isFetching && "Loading..."}
            {<ul>
                <li className={s.item}>
                        <p className={s.title}>ID</p>
                        <p className={s.title}>Title</p>
                        <p className={s.title}>Descrilition</p>
                    <p className={s.title}>Status</p>
                </li>
            {data.map((note) => (<NoteItem key={note.id} {...note} />))}
        </ul>}
        </>);
}