import React from 'react';

const ContestPreview = (contest) =>  (
	<div className="card" style={{width: '18rem'}}>
		<div className="card-body">
			<h5 className="card-title">{contest.categoryName}</h5>
			<p className="card-text">{contest.contestName}</p>
		</div>
	</div>
);
export default ContestPreview;