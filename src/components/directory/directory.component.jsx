import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: []
        }
    }
    
    render() {
        return (
            <div className="directory-menu">
              <MenuItem title={'Special Item'}/>
              <MenuItem title={'Special Item'}/>
              <MenuItem title={'Special Item'}/>
              <MenuItem title={'Special Item'}/>
              <MenuItem title={'Special Item'}/>
            </div>
        )
  }
}


export default Directory;