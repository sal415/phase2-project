import {Link} from 'react-router-dom'
function Done () {
    return (
        <div style={{textAlign: 'center', fontSize: '70px'}}>
        <h1>Thank you!</h1>
        <h2>Enjoy your Art!</h2>
        <Link to='/'>
            <p>Home</p>
        </Link>
        </div>
    )
}

export default Done;