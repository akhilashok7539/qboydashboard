import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-rest-type',
  templateUrl: './edit-rest-type.component.html',
  styleUrls: ['./edit-rest-type.component.css']
})
export class EditRestTypeComponent implements OnInit {
  editrestaurantitemtypeformregistration: FormGroup;
  submitted = false;

  itype;
  isLoading = false;
  button = 'Submit';
  constructor(private formbuilder: FormBuilder, private router: Router, private easydeelservice: EasydealService, private toaster: ToastrService) { }

  ngOnInit() {
    this.editrestaurantitemtypeformregistration = this.formbuilder.group(
      {

        itype: ['', Validators.required],

      })

  }
  get f() { return this.editrestaurantitemtypeformregistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.editrestaurantitemtypeformregistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      // let s:String;
      // s = this.ctype;
      // console.log();
      // let req = {
      //   "courceName": this.ctype.toUpperCase(),
      // }



      // this.easydeelservice.addcourse(req).subscribe(
      //   data => {
      //     this.isLoading = false;
      //     this.button = 'Submit';
      //     this.toaster.success("Course type added successfully");
      //     this.router.navigate(['/coursetype'])
      //   },
        error => {
          this.isLoading = false;
          this.button = 'Submit';

        }
      // )
    }
  }
}