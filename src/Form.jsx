import {Link} from 'react-router-dom'

const Form = () => {
    return (
        <div>
            <form>
                <label>Name:</label><br />
                <input type="text" name="name" /><br />
                <label>Price</label><br />
                <input type="text" name="name" /><br />
                <label>Picture</label><br />
                <input type="text" name="name" /><br />
                <input type="submit" />
            </form>
            <Link to="/">
                <button>HomePage</button>
            </Link>
        </div>
    )
}

export default Form;