import React from 'react';
import CustomerInterface from 'types/customers';

const DashboardCustomer: React.FC<{ customers: CustomerInterface[] }> = ({
  customers,
}) => {
  return (
    <div className="container">
      <table className="table table-responsive table-dash">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Total orders</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.location}</td>
              <td>
                {customer?.orders?.reduce((total, order) => {
                  return total + Number(order?.cost);
                }, 0)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardCustomer;
