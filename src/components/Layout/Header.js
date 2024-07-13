import './Header.css'
import { useContext } from 'react';
import StudentContext from '../../store/cart-context';
import HeaderButton from './HeaderButton';
const Header = (props) => {
    const studCtx = useContext(StudentContext);
    return(<div className='header-main'>
        <h1>Student Manager</h1>
        <div className='count'>Count {studCtx.totalStudent}</div>
        <HeaderButton onClick ={props.onShowForm}/>
    </div>)
}
export default Header;