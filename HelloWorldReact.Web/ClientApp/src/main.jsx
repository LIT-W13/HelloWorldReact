// import {add, sub} from './my-module';
// import fancyLogFoo from './subfolder/another-module';


// fancyLogFoo(sub(10, 20));


import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';  

const randomBetween = (min, max) => Math.random() * (max - min) + min;

// class MyComponent extends React.Component {

//     // constructor() {
//     //     super();
//     //     setInterval(() => {
//     //         this.setState({number: randomBetween(1, 100) })
//     //     }, 1000);
//     // }

//     state = {
//         number: 10
//     }

//     render() {
//         return (
//         <>
//             <h1>Hello React!! {this.props.word} 
//             with value: {this.props.value}</h1>
//             <h3>{this.state.number}</h3>
//         </>)
//     }
// }

// class MyOtherComponent extends React.Component {
//     render() {
//         return <div className='container'>
//                 <h1 className='text-success'>From Other Component</h1>
//                 <MyComponent word="Foobar" value={1 + 1} />
//         </div> 
//     }
// }

// class MyNumberOutput extends React.Component {
//     render() {
//         return <h2 className='text-danger'>{this.props.number}</h2>
//     }
// }

// class MyButtonComponent extends React.Component {

//     state = {
//         number: 0,
//         text: ''
//     }

//     handleButtonClick = () => {
//         this.setState({number: this.state.number + 1});
//     }

//     handleTextChange = (e) => {
//         this.setState({text: e.target.value});
//     }

//     reverseString = str => {
//         return str.split('').reverse().join('');
//     }

//     handleReverseClick = () => {
//         this.setState({text: this.reverseString(this.state.text)});
//     }

//     render() {
//         return (
//             <div className='container mt-5'>
//                 <button onClick={this.handleButtonClick} className='btn btn-primary'>Click me!!</button>
                
//                 <MyNumberOutput number={this.state.number} />
//                 <button onClick={this.handleReverseClick} className='btn btn-dark'>Reverse</button>
//                 <input value={this.state.text} onChange={this.handleTextChange} type='text' className='form-control'  />
//                 <h2>{this.state.text}</h2>
//             </div>
//         )
//     }
// }

import NumberLister from './NumberList';

ReactDOM.createRoot(document.getElementById('root')).render(
    <NumberLister />
)