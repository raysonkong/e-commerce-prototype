import React from 'react';
import './homepage.styles.scss';
import MenuItem from '../../components/menu-item/menu-item.component.jsx';

const HomePage = () => {
    return(
    <div className='homepage'>
      <div className="directory-menu">

        <MenuItem title={'Special Item'}/>
        <MenuItem title={'Special Item'}/>
        <MenuItem title={'Special Item'}/>
        <MenuItem title={'Special Item'}/>
        <MenuItem title={'Special Item'}/>

      </div>
    </div>
    );
}

export default HomePage;