import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({ text, bgColor, textColor }) {
    const headerStyles = {
        backgroundColor: bgColor,
    }
    return (
        <header style={headerStyles}>
            <div className="container">
                <Link to="/" style={{ color: textColor }}>
                    <h1>{text}</h1>
                </Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Todo App',
    bgColor: '#323340',
    textColor: '#e19b2c',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
