import React, { Component } from 'react';



class ProjectItems extends Component {
deleteProject(id){
    console.log("will be deleted form project");
    this.props.onDelete(id);
}




  render() {
    return (
     <ol>
         <li>{this.props.pr.title}</li>
          <li>{this.props.pr.category}</li>
         <li>{this.props.pr.id}</li>
         <a href="#" onClick={this.deleteProject.bind(this,this.props.pr.id)}>delete</a>
         
         </ol>
         
      
    );
  }
}

export default ProjectItems;
