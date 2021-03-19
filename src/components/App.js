import React from 'react'
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends React.Component {
	state = {
		pageHeader: 'Naming Contests'
	};
	componentDidMount () {
	};
	componentWillUnmount () {
	};
	render() {
		return (
			<div>
				<Header className="Header" message={this.state.pageHeader}/>
				<div className="row">
					<div className="col-md-12">
					{
						this.props.contests.map(
							contest => <ContestPreview {...contest}/>
						)
					}
					</div>
				</div>
			</div>
		);
	}
}
export default App;