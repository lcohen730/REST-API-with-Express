const React = require('react');

function Edit(props) {
    const { name, _id, price } = props.item;
    return (
        <div>
            <h1>{name} Edit Page</h1>
            <a href='/items'>Go Back to Index Page</a>
            <form action={`/items/${_id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" defaultValue={name} /><br/><br/>
                Price: <input type="text" name="price" defaultValue={price} /><br/><br/>
                <input type="submit" value="Update Item" />
            </form>
        </div>
    )
}

module.exports = Edit