import classes from "./StudentListItem.module.css"

const StudentListItem = (props) => {
    return(
        <li className={classes['list-item']}>
            <div>
                <span>{props.name} -</span>
                <span>{props.address} -</span>
                <span>{props.contact} -</span>
            </div>
            <div>
                <button onClick={props.onEdit}>Edit</button>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        </li>
    )
}

export default StudentListItem;
