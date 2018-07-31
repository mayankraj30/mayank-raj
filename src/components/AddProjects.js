import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component{
    constructor(){
        super();
        this.state={
            newProject:{}
        }
    }


      static defaultProps={
    categories:['web design','web dev','mobile dev']
  }

  handleSubmit(e)
  {

      if(this.refs.title.value=="")
      {
          alert("please give your tittle");
      }
      else{
          e.preventDefault(); 
          this.setState({newProject:{
              id:uuid.v4(),
              title:this.refs.title.value,
              category:this.refs.category.value
          }
        },function(){
            console.log(this.state);
            this.props.addProject(this.state.newProject);
        }
        );

      }
      
      console.log("submitted"+this.refs.title.value);
     
  }
    render() {

        let categoryOptions=this.props.categories.map(category=>{
            return <option  key={category} value={category}>{category}</option>
        });
    return (
     <div>
         <h3>add project</h3>

         <form onSubmit={this.handleSubmit.bind(this)}>
             <div>
                 <label>Title</label><br/>
                 <input type="text" ref="title"/>
             </div>
             <div>
                 <label>category</label>
                

                 <select ref="category">{categoryOptions}</select>
             </div>
             <input type="submit" value="submit details"/>
         </form>
     </div>
    );
  }
}

export default AddProject ;
