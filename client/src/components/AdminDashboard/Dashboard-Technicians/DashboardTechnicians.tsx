const DashboardTechnician = ({ technicians }) => {
	return (
		<div className="container">
			<button
				onClick={() => console.log('Clicked')}
				className="btn btn-primary btn-block add-btn"
			>
				Add a Technician
			</button>
			<table className="table table-responsive table-dash">
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th></th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{technicians.length !== 0 ? (
						technicians.map((technician) => (
							<tr key={technician.id}>
								<td>{technician.id}</td>
								<td>{technician.name}</td>
								<td>{technician.phone}</td>
								<td>{technician.email}</td>
								<td>
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
						))
					) : (
						<tr>
							<td>.</td>
							<td>.</td>
							<td>.</td>
							<td>.</td>
							<td>.</td>
							<td>.</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default DashboardTechnician;
