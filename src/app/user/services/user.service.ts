import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environments } from '../../../environments/environments';
import { Projects} from '../interfaces/project.interface';
import { environmentsProd } from '../../../environments/environments.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl:string=environments.baseUrl ||environmentsProd.baseUrlProd

  constructor(private http:HttpClient) { }

  public getProjects():Observable<Projects>{
    return this.http.get<Projects>(`${this.baseUrl}/project`)
  }



}
