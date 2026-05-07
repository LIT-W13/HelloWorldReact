import React from 'react';

class NumberDisplay extends React.Component {

    getClassName = obj => {
        return obj.number > 100 ? 'text-danger' : '';
    }

    getContent = () => {
        const { numbers } = this.props;
        if (!numbers.length) {
            return <h1>No Numbers!!</h1>
        }

        return numbers.map(obj => {
            return <li className='list-group-item'>
                <h2 className={this.getClassName(obj)}>
                    {obj.number}
                </h2>
            </li>
        })


    }

    render() {
        return <ul className='list-group'>
            {this.getContent()}
        </ul>
    }
}

export default NumberDisplay;