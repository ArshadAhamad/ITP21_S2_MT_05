import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Grade } from 'src/app/entity/grade';
import { ClassTimeTable } from 'src/app/entity/timetable/class-time-table';
import { GradeService } from 'src/app/services/grade.service';
import { ClassTimeTableService } from 'src/app/services/timetable/class-time-table.service';

@Component({
  selector: 'app-class-time-table',
  templateUrl: './class-time-table.component.html',
  styleUrls: ['./class-time-table.component.css']
})
export class ClassTimeTableComponent implements OnInit {

  classTimeTables:ClassTimeTable[];
  editClassTimeTable:ClassTimeTable;
  classTimeTableFormGroup:FormGroup;

  showAdd:boolean=false;
  showUpdate:boolean=false;


  grades:Grade[];
  public staffs:object[];
   classTimeTableObj:ClassTimeTable = new ClassTimeTable();

  constructor(private formBuilder:FormBuilder,
    private classTimeTableService:ClassTimeTableService,
    private gradeListService:GradeService,
     private router:Router,
     private route:ActivatedRoute) { }

  ngOnInit() {
    
    // this.classTimeTableFormGroup = this.formBuilder.group({
    //   classTimeTable : this.formBuilder.group({
    //     classTimeTableName:new FormControl('',[Validators.required, Validators.minLength(2)]),
    //   }),    
    // });  

    this.classTimeTableFormGroup = this.formBuilder.group({
      classG : this.formBuilder.group({
        grade:new FormControl('',[Validators.required, Validators.minLength(2)]),
        staff:new FormControl('',[Validators.required, Validators.minLength(2)])
      }),    
    });

    // this.listClassTimeTables();

    this.staffs=[
      {
        staff_id:1,
        name:'abc'
      },
      {
        staff_id:2,
        name:'pqr'
      },
      {
        staff_id:3,
        name:'xyz'
      },

    ]

    this.listGrades();
  }

  classTimeTablesMonday:ClassTimeTable[];
  classTimeTablesTuesday:ClassTimeTable[];
  classTimeTablesWednesday:ClassTimeTable[];
  classTimeTablesThursday:ClassTimeTable[];
  classTimeTablesFriday:ClassTimeTable[];

  listClassTimeTables() {
    this.classTimeTableService.getTimeTableList().subscribe(
      data=>{
      /*   data.forEach(element => {
          alert(element.t_period_day);
          if(element.t_period_day='MONDAY'){
            this.classTimeTablesMonday = data
          }
          if(element.t_period_day='TUESDAY'){
            this.classTimeTablesTuesday = data
          }
          if(element.t_period_day='WEDNESDAY'){
            this.classTimeTablesWednesday = data
          }
          if(element.t_period_day='THURSDAY'){
            this.classTimeTablesThursday = data
          }
          if(element.t_period_day='FRIDAY'){
            this.classTimeTablesFriday = data
          }
        }); */
        
           this.classTimeTables=data;
      }
    )
  }

  listGrades() {
    this.gradeListService.getGradeList().subscribe(
      data=>{
        this.grades=data;
      }
    )
  }

  ct:any = {
    "timeslot1":[],
    "timeslot2":[],
    "timeslot3":[],
    "timeslot4":[],
    "timeslot5":[],
    "timeslot6":[],
    "timeslot7":[],
    "timeslot8":[],
    "timeslot9":[],
  }
  // {
  //   "days":[
  //     {
  //       "MONDAY":[],
  //       "TUESDAY":[],
  //       "WEDNESDAY":[],
  //       "THURSDAY":[],
  //       "FRIDAY":[]
  //     }
  //     ]
  // }
  // ctd:any = {
  //   "MONDAY":[],
  //   "TUESDAY":[],
  //   "WEDNESDAY":[],
  //   "THURSDAY":[],
  //   "FRIDAY":[]
  // }
  

  listUniqueClassTimeTable(formGroupName:string){
    const formGroup = this.classTimeTableFormGroup.get(formGroupName);
    const classId = formGroup.value.grade.class_id;
    
    this.classTimeTableService.getTimeTable(classId).subscribe(
      data =>{
        this.ct.timeslot1=[];
        this.ct.timeslot2=[];
        this.ct.timeslot3=[ ];
        this.ct.timeslot4=[];
        this.ct.timeslot5=[];
        this.ct.timeslot6=[];
        this.ct.timeslot7=[];
        this.ct.timeslot8=[];
        this.ct.timeslot9=[];

        data.forEach(timeslot=>{
          // alert(timeslot.t_class_id);
          // console.log("States Received : "+ JSON.stringify(timeslot.period_time));
          if(timeslot.period_time=="7.40-8.20" ){
            this.ct.timeslot1.push(timeslot);
          }else if(timeslot.period_time=="8.20-9.00"){
            this.ct.timeslot2.push(timeslot);
          }else if(timeslot.period_time=="9.00-9.40"){
             this.ct.timeslot3.push(timeslot);
          }else if(timeslot.period_time=="9.40-10.20"){
              this.ct.timeslot4.push(timeslot);
          }else if(timeslot.period_time=="10.40-11.20"){
            this.ct.timeslot5.push(timeslot);
          }else if(timeslot.period_time=="11.20-12.00"){
            this.ct.timeslot6.push(timeslot);
          }else if(timeslot.period_time=="12.00-12.40"){
            this.ct.timeslot7.push(timeslot);
          }else if(timeslot.period_time=="12.40-1.20"){
             this.ct.timeslot8.push(timeslot);
          }else if(timeslot.period_time=="1.20-2.00"){
            this.ct.timeslot9.push(timeslot);
         }
        });
        console.log("States Received : "+ JSON.stringify(this.ct));

        // this.classTimeTables=data;
        // console.log("States Received : "+ JSON.stringify(data))
        

        //select first Item by default
        // formGroup.get('subjectName').setValue(data[0]);
      }
    );   
  }

  listUniqueStaffTimeTable(formGroupName:string){
    const formGroup = this.classTimeTableFormGroup.get(formGroupName);
    const staffId = formGroup.value.staff.staff_id;
    
    // alert(staffId);

    this.classTimeTableService.getStaffTimeTable(staffId).subscribe(
      data =>{
        this.ct.timeslot1=[];
        this.ct.timeslot2=[];
        this.ct.timeslot3=[ ];
        this.ct.timeslot4=[];
        this.ct.timeslot5=[];
        this.ct.timeslot6=[];
        this.ct.timeslot7=[];
        this.ct.timeslot8=[];
        this.ct.timeslot9=[];

        data.forEach(timeslot=>{
          // alert(timeslot.t_class_id);
          // console.log("States Received : "+ JSON.stringify(timeslot.period_time));
          if(timeslot.period_time=="7.40-8.20" ){
            this.ct.timeslot1.push(timeslot);
          }else if(timeslot.period_time=="8.20-9.00"){
            this.ct.timeslot2.push(timeslot);
          }else if(timeslot.period_time=="9.00-9.40"){
             this.ct.timeslot3.push(timeslot);
          }else if(timeslot.period_time=="9.40-10.20"){
              this.ct.timeslot4.push(timeslot);
          }else if(timeslot.period_time=="10.40-11.20"){
            this.ct.timeslot5.push(timeslot);
          }else if(timeslot.period_time=="11.20-12.00"){
            this.ct.timeslot6.push(timeslot);
          }else if(timeslot.period_time=="12.00-12.40"){
            this.ct.timeslot7.push(timeslot);
          }else if(timeslot.period_time=="12.40-1.20"){
             this.ct.timeslot8.push(timeslot);
          }else if(timeslot.period_time=="1.20-2.00"){
            this.ct.timeslot9.push(timeslot);
         }
        });
        console.log("States Received : "+ JSON.stringify(this.ct));

        //select first Item by default
        // formGroup.get('subjectName').setValue(data[0]);
      }
    );   
  }

}
