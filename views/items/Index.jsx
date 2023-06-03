const React = require('react');

function Index (props) {
    return (
        <div>
            <h1>Items Index Page</h1>
            <a href="/items/new">Create a New Item Here</a>
            <ul>
                {
                    props.items.map((item) => {
                        return (
                            <li key={item._id}>
                                <a href={`/items/${item._id}`}>{item.name} is ${item.price}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

module.exports = Index