import React from 'react';
import './styles.css';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	};

	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<h1 className="ui header">Pixel Images</h1>
						<h4>The latest stock images from world traveling photographers</h4>
						<div className="ui search">
							<div className="ui icon input">
								<input
									type="text"
									value={this.state.term}
									onChange={(e) => this.setState({ term: e.target.value })}
									placeholder="Search"
								/>
								<i class="search icon"></i>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
