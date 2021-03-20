import React from 'react'
import Header from './Header';
import ContestPreview from './ContestPreview';
import axios from 'axios';

class App extends React.Component {
	state = {
		pageHeader: 'Naming Contests',
		contests: []
	};
	componentDidMount () {
		axios.get('/api/contests')
			.then(resp => {
				this.setState({
					contests: resp.data.contests
				})
			})
			.catch(console.error)
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
						this.state.contests.map(
							contest => <ContestPreview key={contest.id} {...contest}/>
						)
					}
					</div>
				</div>
			</div>
		);
	}
}
export default App;