import { React, useEffect, useState } from 'react';
import './App.css';

function App() {
	const [data, setData] = useState([])
	useEffect(() => {
		fetch(`https://api.github.com/repos/neovim/neovim/pulls`)
			.then(response => response.json())
			.then(json => setData(json));
	}, []);
	return (
		<div className="App">
			<h1>Github Pull Request</h1>
			<table className='table'>
				<thead>
					<tr>
						<th className="table-td-th" style={{ textAlign: 'center'}}>Title</th>
						<th className="table-td-th">Base Branch</th>
						<th className="table-td-th">Author Branch</th>
						<th className="table-td-th">Author</th>
						<th className="table-td-th">Created On</th>
						<th className="table-td-th">Reviewers</th>
						<th className="table-td-th">Labels</th>
					</tr>
				</thead>
				<tbody>
					{data.map(item => (
						<tr>
							<td>{item.title}</td>
							<td>{item.base.ref}</td>
							<td>{item.author_association}</td>
							<td>{item.user.login}</td>
							<td>{item.created_at}</td>
							<td>{item.requested_reviewers.map((reviewers) => {return reviewers.login})}</td>
							<td>{item.labels.map((label) => {return label.name})}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;