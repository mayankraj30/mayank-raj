import React, { Component } from 'react';
import ProjectItems from './ProjectItems';
import PropTypes from 'prop-types';


class ProjectComponent extends Component {

    deleteProject(id)
    {
        this.props.onDelete(id);
    }

    render() {
       var projectsList;
        if (this.props.projectProperty) {
            projectsList = this.props.projectProperty.map(p => {
                //console.log(p);
                return (<ProjectItems onDelete={this.deleteProject.bind(this)} key={p.title} pr={p} />);

            });
        }
        return (
            <div>
                <h3>newly added projects</h3>
               {projectsList}
               
            </div>
        );
    }
    // Projects.propTypes={
    //     projects:React.PropTypes.array,
    //     onDelete:React.propTypes.func

    // }

    
}
ProjectComponent.propTypes={
        projects:PropTypes.array,
        onDelete:PropTypes.func

    }

export default ProjectComponent;
