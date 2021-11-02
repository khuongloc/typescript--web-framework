import axios, { AxiosPromise, AxiosResponse } from 'axios';

interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  constructor(private url: string) {}
  fetch(id: number | string): AxiosPromise {
    return axios.get(`${this.url}/${id}`);
  }

  save(data: T) {
    const { id } = data;
    if (id) {
      axios.put(`${this.url}/${id}`, data);
    } else {
      axios.post(this.url, data);
    }
  }
}
