import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExamTimeTable } from 'src/app/entity/timetable/exam-time-table';

@Injectable({
  providedIn: 'root'
})
export class ExamTimeTableService {
  private baseUrl ='http://localhost:8081/api/etimeTables';
  constructor(private httpClient:HttpClient) { }

  getExamTimeTableList():Observable<ExamTimeTable[]>{    
    return this.httpClient.get<GetResponseExamTimeTable>(this.baseUrl).pipe(
      map( response => response._embedded.etimeTables)
    );
  }

  getExamTimeTable(theGradeId:number):Observable<ExamTimeTable[]>{
    const gradeDetailsUrl = `${this.baseUrl}/search/findByClassId?id=${theGradeId}`;
    // ${theGradeId}`;
    // return this.httpClient.get<GetResponseClassTimeTable>(gradeDetailsUrl);
    return this.httpClient.get<GetResponseExamTimeTable>(gradeDetailsUrl).pipe(
      map( response => response._embedded.etimeTables)
    );
  }

  // getStaffTimeTable(theStaffId:number):Observable<ClassTimeTable[]>{
  //   const staffDetailsUrl = `${this.baseUrl}/search/findByStaffId?id=${theStaffId}`;
  //   // return this.httpClient.get<GetResponseClassTimeTable>(gradeDetailsUrl);
  //   return this.httpClient.get<GetResponseClassTimeTable>(staffDetailsUrl).pipe(
  //     map( response => response._embedded.ctimeTables)
  //   );
  // }

  insertExamTimeTable(timeTable:ExamTimeTable):Observable<any>{ 
    return this.httpClient.post<ExamTimeTable>(this.baseUrl,timeTable);
  }
  
  deleteExamTimeTable(thesubjectId:number):Observable<any>{ 
    const deleteExamUrl = `${this.baseUrl}/${thesubjectId}`;
    return this.httpClient.delete<ExamTimeTable>(deleteExamUrl);
  }
}

interface GetResponseExamTimeTable{
  _embedded : {
    etimeTables:ExamTimeTable[];
  },
  page:{
    size:number,
    totalElements:number,
    totalPages:number,
    number:number
  }
}
