import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/core/core.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
})
export class AddEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  education: string[] = [
    'Matric',
    'Diploma',
    'Intermidiate',
    'Graduation',
    'Post Grad.',
  ];

  ngOnInit(): void {
    this.employeeForm.patchValue(this.data);
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _empService: EmployeeService,
    private _diologRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,

  ) {
    this.employeeForm = this._formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      dob: [''],
      gender: [''],
      education: [''],
      company: [''],
      experience: [''],
      package: [''],
    });
  }

  onFormSubmit() {
    if (this.employeeForm.valid) {
      if (this.data) {
        this._empService.updateEmployee(this.data.id, this.employeeForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Empolyee deleted !', 'done')
            this._diologRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
      else {
        console.log(this.employeeForm.value);
        this._empService.addEmployees(this.employeeForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Empolyee added !', 'done')
            this._diologRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          },
        });
      }
    }
  }
}
