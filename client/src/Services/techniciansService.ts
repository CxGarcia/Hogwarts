import axios, { AxiosResponse } from 'axios';

const postTechnician = (name: string, phone: string, email: string): Promise<AxiosResponse | undefined> => {
  return axios.post('http://localhost:4000/Technician', { name, phone, email });
};

const getTechnicians = async (): Promise<AxiosResponse | undefined> => {
  try {
    let TechniciansList;
    await axios('http://localhost:4000/technicians').then((res) => {
      TechniciansList = res.data;
    });
    return TechniciansList;
  } catch (error) {
    console.log(error);
  }
};

const deleteTechnician = async (id: number): Promise<AxiosResponse | undefined> => {
  try {
    return await axios.delete(`http://localhost:4000/Technician/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export { postTechnician, getTechnicians, deleteTechnician };
