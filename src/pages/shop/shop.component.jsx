import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';

class Shop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		};
	}

	render() {
		return (
			<div>
				{this.state.collections.map(({ title, ...items }) => {
					return <CollectionPreview title={title} {...items} />;
				})}
			</div>
		);
	}
}

export default Shop;