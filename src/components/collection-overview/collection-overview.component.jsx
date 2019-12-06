import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './collection-overview.styles.scss';

import { connect } from 'react-redux';
import { shopSelection } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

const CollectionOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, title, ...items }) => {
            return <CollectionPreview key={id} title={title} {...items} />;
        })}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: shopSelection,
});

export default connect(mapStateToProps)(CollectionOverview);
