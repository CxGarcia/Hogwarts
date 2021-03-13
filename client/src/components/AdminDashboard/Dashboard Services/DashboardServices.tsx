import './DashboardServices.css';

const DashboardService = ({ services }) => {
	return (
		<div className="container">
			<button
				onClick={() => console.log('Clicked')}
				className="btn btn-primary btn-block add-btn"
			>
				Add a Service
			</button>
			<table className="table table-responsive table-dash">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{services.map((service) => (
						<tr key={service.id}>
							<td>{service.id}</td>
							<td>{service.name}</td>
							<td>
								{' '}
								<button
									onClick={() => console.log('Clicked')}
									className="btn btn-warning btn-bg"
								>
									Update
								</button>
							</td>
							<td>
								<button
									onClick={() => console.log('Clicked')}
									className="btn btn-danger btn-bg"
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardService;
