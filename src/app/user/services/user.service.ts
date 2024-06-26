import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* import { environments } from '../../../environments/environments';
 *//* import { environmentsProd } from '../../../environments/environments.prod';  */ /* Activar para subir a produccion */
import { Projects} from '../interfaces/project.interface';
import {  Certifications } from '../interfaces/certification.interface';

import { environments } from '../../../environments/environments';
import { environmentsProd } from '../../../environments/environments.prod';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl:string=environmentsProd.baseUrlProd

  constructor(private http:HttpClient) { }

  public getProjects():Observable<Projects>{
    return this.http.get<Projects>(`${this.baseUrl}/project`)
  }

  public getCertifications():Observable<Certifications>{
    return this.http.get<Certifications>(`${this.baseUrl}/certification`)
  }

}
