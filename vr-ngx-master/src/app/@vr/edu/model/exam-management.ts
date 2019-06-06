import { Time } from "@angular/common";

export class EmPlanification{
id : number;
name : string;
period : AppPeriod;
semester : AcademicSemester;

}
export class EmPlanificationCourse{
planification: EmPlanification;
aclass : AcademicClass;
time : EmTime;
area: AppArea;

}
export class EmTeacherSurveillance{
    id: number;
    teacher : AcademicTeacher;
    planificationCourse : EmPlanificationCourse;
}
export class EmTime{
date : Date;
session : number;
sessionDuration:number;
startTime: Time ;
minutesDuration: number;
}
export class AppPeriod{
id:number;
name : string ;
}
export class AcademicSemester{
    id:number;
    name : string ;
}

export class AcademicTeacher{
id : number;
user: AppUser;
degree : AcademicTeacherDegree;
situation: AcademicTeacherSituation;
}
export class AppContactBase {
id : number;
fullName : string;
}
export class  AppPersonContactBase extends AppContactBase {
fisrtName : string;
lastName : string;
fullTitle : string;
}
export class AppUser extends  AppPersonContactBase {
login : string;
}
export class AcademicTeacherDegree{
id : number;
code : string;
}
export class AcademicTeacherSituation{
id : number;
name : string;
}

export class AppArea{
    //Tree 
     id : number;
     name : string;
     parent : AppArea;
}

export class AcademicCoursePlan{

}
export class AcademicProgram{

}
export class AcademicClass{
//Tree
}
