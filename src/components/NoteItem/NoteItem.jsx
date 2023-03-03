import showModal from '../../redux/Modal/actions';

import s from './NoteItem.module.css'

export default function NoteItem({id, title, description, status }) {
    return (
            <li className={s.item} onClick={showModal}><a href='/' className={s.link} >
            <p className={s.linkText}>{id}</p>
            <p className={s.linkText}>{title}</p>
            <p className={s.linkText}>{description}</p>
            <p className={s.linkText}><input type="checkbox" checked={status} readOnly /></p>
            </a>
            </li>
    )
}