import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { studentInterface } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _url:string="/assets/data/student.json";
  constructor(private _http:HttpClient) { }

  getStudents():Observable<studentInterface[]>{
    return this._http.get<studentInterface[]>(this._url);
  }
}
