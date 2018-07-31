import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectComponent from './components/projects.js';
import AddProject from './components/AddProjects';
import uuid from 'uuid';
import $ from 'jquery';

class App extends Component {
  constructor(){
    super();
    this.state={
      projects:[
        
      ]
    };
  }
  componentWillMount(){
    console.log("component will mount");
    this.setState({

      projects:[
        {id:uuid.v4(),title:'business website',category:'businnes'},
         {id:uuid.v4(),title:'social website',category:'social'},
         {id:uuid.v4(),title:'political website',category:'political'}
        
      ]
    });
    // getTodos();
  }

  componentDidMount(){

    this.getTodos();

  }

getTodos() {

    $.ajax({

      url: 'https://jsonplaceholder.typicode.com/todos',
      crossDomain:true,
      type:'GET',

      dataType: 'jsonp',

      cache: false,

      success: function (data) {

        this.setState({ todos: data }, function () {

          console.log(this.state);

        });

      }.bind(this),

      error: function (xhr, status, err) {

        console.log(err);

      }

    });

  }

handleAddProject(newProj)
{
  let proj=this.state.projects;
  proj.push(newProj);
  console.log(newProj);
  this.setState({projects:proj})
}
handleDeleteProject(id){
  let projects=this.state.projects;
  let index=projects.findIndex(obj=>obj.id===id)
  projects.splice(index,1);
  this.setState({projects:projects});
}





  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
         <ProjectComponent onDelete={this.handleDeleteProject.bind(this)} projectProperty={this.state.projects}/>
      </div>
    );
  }
}

export default App;
