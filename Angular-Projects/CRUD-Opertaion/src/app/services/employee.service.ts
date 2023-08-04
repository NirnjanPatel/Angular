import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  public url: string = 'http://localhost:3000/employee';
  constructor(private _http: HttpClient) { }

  addEmployees(data: any): Observable<any> {
    return this._http.post(`${this.url}`, data);
  }

  getEmployeeList(data: any): Observable<any> {
    return this._http.get(`${this.url}`);
  }

  deleteEmployee(id: number) {
    return this._http.delete(`${this.url}/${id}`)
  }

  updateEmployee(id: number, data: any) {
    return this._http.put(`${this.url}/${id}`, data)
  }
}
