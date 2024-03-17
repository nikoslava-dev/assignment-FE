import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IFile, ITable } from './contracts';
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {}


  public getFiles(): Observable<Array<IFile>> {
    return this.httpClient.get<Array<IFile>>(`${environment.base_api}files`);
  }

  public getTables(fileName: string): Observable<Array<ITable>> {
    return this.httpClient.get<Array<ITable>>(`${environment.base_api}tables?file=${fileName}`);
  }

  public getTable(fileName: string, tableTitle: string): Observable<ITable> {
    return this.httpClient.get<ITable>(`${environment.base_api}table?file=${fileName}&table=${tableTitle}`);
  }
}
