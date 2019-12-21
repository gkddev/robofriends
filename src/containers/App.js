import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
// import {robots} from './robots';
import Scroll from '../components/Scroll';
import './App.css';

class App extends React.Component{
     constructor(){
         super()
         this.state={
            robots:[],
            Searchfield:''
         }
     }
     componentDidMount()
     {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response=> response.json())
            .then(users=>this.setState({robots:users}));

        
        
     }
     onSearchChange = (event)=>
     {
        this.setState({Searchfield:event.target.value})
        
     
     }
     render(){
         const {robots,Searchfield}=this.state;
        const filteredRobots=robots.filter(robot=>{
            return robot.name.toLowerCase().includes(Searchfield.toLowerCase());
        })
        return !robots.length?
         <h1>Loading</h1>:
    (
            <div className='tc'>
                <h1 className='tc'>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll >
               <CardList robots={filteredRobots} />
       </Scroll>
            </div>
             );
      
            }
 }
 export default App; 