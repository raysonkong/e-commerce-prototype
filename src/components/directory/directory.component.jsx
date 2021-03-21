import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';

const Directory = () => {
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

export default Directory;

