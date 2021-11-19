import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    // const onClick = () => {
    //     console.log('click');
    // }    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {/*<h1>{title}</h1> --JSX comment--*/}
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            {/*<Button color='blue' text='Add1' />
            <Button color='red' text='Add2' />*/}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JSX
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;