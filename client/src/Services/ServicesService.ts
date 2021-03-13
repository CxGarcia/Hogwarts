import axios, { AxiosResponse } from 'axios';

const postService = (name: string): Promise<AxiosResponse> => {
  return axios.post('http://localhost:4000/service', { name });
};

const getServices = async (): Promise<AxiosResponse | undefined> => {
  try {
    let servicesList;
    await axios('http://localhost:4000/services').then((res) => {
      servicesList = res.data;
    });
    return servicesList;
  } catch (error) {
    throw Error(error);
  }
};

const updateServiceList = async (id: number, name: string): Promise<AxiosResponse> => {
  try {
    return await axios.put(`http://localhost:4000/service/${id}`, { name });
  } catch (error) {
    throw Error(error);
  }
};

const deleteService = async (id: number): Promise<AxiosResponse | undefined> => {
  try {
    return await axios.delete(`http://localhost:4000/service/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export { postService, getServices, updateServiceList, deleteService };
