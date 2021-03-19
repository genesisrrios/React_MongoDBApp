import React from 'react';

const ContestPreview = (contest) =>  (
	<div class="card" style={{width: '18rem'}}>
		<div class="card-body">
			<h5 class="card-title">{contest.categoryName}</h5>
			<p class="card-text">{contest.contestName}</p>
		</div>
	</div>
);
export default ContestPreview;