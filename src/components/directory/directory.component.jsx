import React from 'react';
import MenuItem from '../menu-item/menuitem.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { directorySelection } from '../../redux/directory/directory.selectors';
import './directory.styles.scss';

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {sections.map(({ id, ...sectionProps }) => <MenuItem key={id} {...sectionProps} />)}
    </div>
);

const mapStateToProps = createStructuredSelector({
	sections: directorySelection
})

export default connect(mapStateToProps)(Directory);
