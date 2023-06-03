const React = require('react');

function New(props) {
    return (
        <div>
            <h1>New Item Page</h1>
            <a href='/items'>Go Back to Index Page</a>
            <form action="/items" method="POST">
                Name: <input type="text" name="name" /><br/><br/>
                Price: <input type="text" name="price" /><br/><br/>
                <input type="submit" value="Create Item" />
            </form>
        </div>
    )
}

module.exports = New