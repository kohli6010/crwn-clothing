import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

const Shop = ({ match }) => {
    console.log(match);
    return (
        <Router>
            <div className='shop-page'>
                <Switch>
                    <Route exact path={`${match.path}`} component={CollectionOverview} />
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
                </Switch>
            </div>
        </Router>
    );
};

export default Shop;
