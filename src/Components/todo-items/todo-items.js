// this component is just to show data
import { FaCheckDouble, FaTimes } from 'react-icons/fa';
import './todo-items.css';
const ToDoList = (props) =>
{
    const { items, deleteItems } = props;
    const itemsLength = items.length;
    const listItems = itemsLength ? (items.map(item =>
    {
        return (
            <div className='row' key={ item.id }>
                <span className='cell'>{ item.mision }</span>
                <span className='cell'>{ item.duration } mints</span>
                <span className='cell done'><FaCheckDouble /></span>
                <span className='cell delete' onClick={ () => deleteItems(item.id) } ><FaTimes /></span>
            </div>

        );
    })) : (<p className='no-misions'>There is No Misions</p>);
    return (
        <div className='table'>
            <div className='row'>
                <span className='cell'>Mision</span>
                <span className='cell'>Duration</span>
                <span className='cell'> Done</span>
                <span className='cell'>Delete</span>
                <hr />
            </div>

            { listItems }

        </div>
    );
};

export default ToDoList;