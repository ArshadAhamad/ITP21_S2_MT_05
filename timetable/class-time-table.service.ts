import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClassTimeTable } from 'src/app/entity/timetable/class-time-table';

@Injectable({
  providedIn: 'root'
})
export class ClassTimeTableService {

  private baseUrl ='http://localhost:8081/api/ctimeTables';
  constructor(private httpClient:HttpClient) { }

  getTimeTableList():Observable<ClassTimeTable[]>{    
    return this.httpClient.get<GetResponseClassTimeTable>(this.baseUrl).pipe(
      map( response => response._embedded.ctimeTables)
    );
  }

  getTimeTable(theGradeId:number):Observable<ClassTimeTable[]>{
    const gradeDetailsUrl = `${this.baseUrl}/search/findByClassId?id=${theGradeId}`;
    // return this.httpClient.get<GetResponseClassTimeTable>(gradeDetailsUrl);
    return this.httpClient.get<GetResponseClassTimeTable>(gradeDetailsUrl).pipe(
      map( response => response._embedded.ctimeTables)
    );
  }

  getStaffTimeTable(theStaffId:number):Observable<ClassTimeTable[]>{
    const staffDetailsUrl = `${this.baseUrl}/search/findByStaffId?id=${theStaffId}`;
    // return this.httpClient.get<GetResponseClassTimeTable>(gradeDetailsUrl);
    return this.httpClient.get<GetResponseClassTimeTable>(staffDetailsUrl).pipe(
      map( response => response._embedded.ctimeTables)
    );
  }

  insertClassTimeTable(timeTable:ClassTimeTable):Observable<any>{ 
    
    return this.httpClient.post<ClassTimeTable>(this.baseUrl,timeTable);
  }
  
  deleteClassTimeTable(thesubjectId:number):Observable<any>{ 
    const subjectDetailsUrl = `${this.baseUrl}/${thesubjectId}`;
    return this.httpClient.delete<ClassTimeTable>(subjectDetailsUrl);
  }
}

interface GetResponseClassTimeTable{
  _embedded : {
    ctimeTables:ClassTimeTable[];
  },
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}
