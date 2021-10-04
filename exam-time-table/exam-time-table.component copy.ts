import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from 'src/app/entity/grade';
import { Subject } from 'src/app/entity/subject';
import { ExamTimeTable } from 'src/app/entity/timetable/exam-time-table';
import { GradeService } from 'src/app/services/grade.service';
import { ExamTimeTableService } from 'src/app/services/timetable/exam-time-table.service';

@Component({
  selector: 'app-exam-time-table',
  templateUrl: './exam-time-table.component.html',
  styleUrls: ['./exam-time-table.component.css']
})
export class ExamTimeTableComponent implements OnInit {

  examTimeTables:ExamTimeTable[];
  editExamTimeTable:ExamTimeTable;
  examTimeTableFormGroup:FormGroup;
  eTTFormGroup:FormGroup;

  showAdd:boolean=false;
  showUpdate:boolean=false;


  grades:Grade[];
  subjects:Subject[];
  public staffs:object[];
  public times:object[];
  public days:object[];

  examTimeTableObj:ExamTimeTable = new ExamTimeTable();

  constructor(private formBuilder:FormBuilder,
    private examTimeTableService:ExamTimeTableService,
    private gradeListService:GradeService,
     private router:Router,
     private route:ActivatedRoute) { }

  ngOnInit() {

    this.examTimeTableFormGroup = this.formBuilder.group({
      examG : this.formBuilder.group({
        grade:new FormControl('',[Validators.required, Validators.minLength(2)]),
        // staff:new FormControl('',[Validators.required, Validators.minLength(2)])
      }),    
    });

    this.eTTFormGroup = this.formBuilder.group({
      eTT : this.formBuilder.group({
        examTimeTableYear:new FormControl(''),
        // examTimeTableClassId:new FormControl(''),
        // examTimeTableClassName:new FormControl(''),
        // examTimeTableClassSectionName:new FormControl(''),
        // examTimeTableClassSubjectId:new FormControl(''),
        // examTimeTableClassSubjectName:new FormControl(''),
        examTimeTableClassPeriodTime:new FormControl(''),
        examTimeTableClassPeriodDay:new FormControl(''),
        examTimeTableClassTermName:new FormControl(''),
        grade:new FormControl(''),
        subject:new FormControl('')
      }),    
    });

    // this.listClassTimeTables();

    this.times=[
      { time:"7.40-8.20" },
      { time:"8.20-9.00" },
      { time:"9.00-9.40" },
      { time:"9.40-10.20" },
      { time:"10.40-11.20" },
      { time:"11.20-12.00" },
      { time:"12.00-12.40" },
      { time:"12.40-1.20" },
      { time:"1.20-2.00" }
    ]

    this.days=[
      { day:"MONDAY" },
      { day:"TUESDAY" },
      { day:"WEDNESDAY" },
      { day:"THURSDAY" },
      { day:"FRIDAY" }
    ]

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

  examTimeTable:ExamTimeTable[];

  listUniqueClassTimeTable(formGroupName:string){
    const formGroup = this.examTimeTableFormGroup.get(formGroupName);
    const classId = formGroup.value.grade.class_id;
    
    // alert(classId);

    this.examTimeTableService.getExamTimeTable(classId).subscribe(
      data =>{
      //   this.ct.timeslot1=[];
      //   this.ct.timeslot2=[];
      //   this.ct.timeslot3=[ ];
      //   this.ct.timeslot4=[];
      //   this.ct.timeslot5=[];
      //   this.ct.timeslot6=[];
      //   this.ct.timeslot7=[];
      //   this.ct.timeslot8=[];
      //   this.ct.timeslot9=[];

      //   data.forEach(timeslot=>{
      //     // alert(timeslot.t_class_id);
      //     // console.log("States Received : "+ JSON.stringify(timeslot.period_time));
      //     if(timeslot.period_time=="7.40-8.20" ){
      //       this.ct.timeslot1.push(timeslot);
      //     }else if(timeslot.period_time=="8.20-9.00"){
      //       this.ct.timeslot2.push(timeslot);
      //     }else if(timeslot.period_time=="9.00-9.40"){
      //        this.ct.timeslot3.push(timeslot);
      //     }else if(timeslot.period_time=="9.40-10.20"){
      //         this.ct.timeslot4.push(timeslot);
      //     }else if(timeslot.period_time=="10.40-11.20"){
      //       this.ct.timeslot5.push(timeslot);
      //     }else if(timeslot.period_time=="11.20-12.00"){
      //       this.ct.timeslot6.push(timeslot);
      //     }else if(timeslot.period_time=="12.00-12.40"){
      //       this.ct.timeslot7.push(timeslot);
      //     }else if(timeslot.period_time=="12.40-1.20"){
      //        this.ct.timeslot8.push(timeslot);
      //     }else if(timeslot.period_time=="1.20-2.00"){
      //       this.ct.timeslot9.push(timeslot);
      //    }
      //   });
      //   console.log("States Received : "+ JSON.stringify(this.ct));

      this.examTimeTable=data;
      }
    );   
  }


  eTTObj:ExamTimeTable = new ExamTimeTable();

  clickAddButton(){
    this.eTTFormGroup.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  refresh(){
    // this.listStudents();
    this.eTTFormGroup.reset();
    this.router.navigateByUrl('/admin/e-time-table');
  }

  onSubmit(){
    if(this.eTTFormGroup.invalid){
      this.eTTFormGroup.markAllAsTouched();
    }

    this.eTTObj.examYear=this.eTTFormGroup.get('eTT').value.examTimeTableYear;
    this.eTTObj.classId=this.eTTFormGroup.get('eTT').value.grade.class_id;
    this.eTTObj.class_name=this.eTTFormGroup.get('eTT').value.grade.class_name;
    this.eTTObj.section_name=this.eTTFormGroup.get('eTT').value.grade.class_section_name;
    this.eTTObj.subject_id=this.eTTFormGroup.get('eTT').value.subject.subject_id;
    this.eTTObj.subject_name=this.eTTFormGroup.get('eTT').value.subject.subject_name;
    this.eTTObj.term_name=this.eTTFormGroup.get('eTT').value.examTimeTableClassTermName;
    this.eTTObj.period_time=this.eTTFormGroup.get('eTT').value.examTimeTableClassPeriodTime.time;
    this.eTTObj.period_day=this.eTTFormGroup.get('eTT').value.examTimeTableClassPeriodDay.day;

    // alert(this.eTTObj.period_day);
    // // this.examTimeTableService.insertExamTimeTable(this.eTTObj).subscribe(
    // //   {
    // //     next: response=>{
    // //       alert("successfully inserted the data");
    // //       this.refresh();
    // //     },
    // //     error:err=>{
    // //       alert(`there is an error ${err.message}`);
    // //     }
    // //   }
    // // );
    this.examTimeTableService.insertExamTimeTable(this.eTTObj).subscribe(
      
      {
        next: response=>{
          alert("successfully inserted the data");
          this.refresh();
        },
        error:err=>{
          alert(`there is an error ${err.message}`);
        }
      }
    );
  }

  listSubjects(formGroupName:string){
    const formGroup = this.eTTFormGroup.get(formGroupName);
    const classId = formGroup.value.grade.class_id;
    
    alert(classId);

    this.gradeListService.getSubjectsForGrade(classId).subscribe(
      data =>{
        
          this.subjects = data;
          console.log("States Received : "+ JSON.stringify(data))
      }
    );   
  }

  deleteeTT(eTTid:number) {
    this.examTimeTableService.deleteExamTimeTable(eTTid).subscribe(
      {
        next: response=>{
          alert("success "+eTTid);
          this.refresh();
        },
        error:err=>{
          alert(`there is an error ${err.message}`);
        }
      }
    );
  }

}
