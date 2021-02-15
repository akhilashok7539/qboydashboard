import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-top-deals',
  templateUrl: './edit-top-deals.component.html',
  styleUrls: ['./edit-top-deals.component.css']
})
export class EditTopDealsComponent implements OnInit {
  edittopdealsFormRegistration: FormGroup;
  submitted = false;

  sname = '';
  mname;
  oloc = '';
  odes;
  tqpurc;
  tnusers;
  oprice;
  aprice;
  adata;
  atime;
  ctime;
  cashback;
  bimages;
  formData = new FormData();
  files;
  currentphoto;
  results: any = [];
  location;
  isLoading = false;
  pprice;
  button = 'Submit';
  constructor(private formbuilder: FormBuilder, private easydeelservice: EasydealService, private toaster: ToastrService,
     private router: Router) { }

     ngOnInit() {
      this.edittopdealsFormRegistration = this.formbuilder.group(
        {
  
          sname: ['', Validators.required],
          mname: [''],
          oloc: ['', Validators.required],
          odes: ['', Validators.required],
          tqpurc: ['', Validators.required],
          tnusers: ['', Validators.required],
          oprice: ['', Validators.required],
          aprice: ['', Validators.required],
          pprice: ['', Validators.required],
          adata: ['', Validators.required],
          atime: ['', Validators.required],
          ctime: ['', Validators.required],
          cashback: ['', Validators.required],
          bimages: ['', Validators.required],
        })
        this.getallShop();
        this.getalllocations();
    }
    get f() { return this.edittopdealsFormRegistration.controls; }
    addimg(event) {
  
      this.files = event.target.files;
      this.currentphoto = this.files.item(0);
    }
    getallShop(){
      this.easydeelservice.getshop().subscribe(
        data =>{
          console.log(data);
          this.results =data;
       
        },
        error =>{
          console.log(error);
        }
      )
    }
    getalllocations(){
      this.easydeelservice.getalllocations().subscribe(
        data =>{
          console.log(data);
      
          this.location = data;
       
          
        },
        error =>{
          console.log(error);
          
        }
      )
    }
    submit() {
      this.submitted = true;
      this.isLoading = true;
      this.button = 'Processing';
  
      // stop here if form is invalid
      if (this.edittopdealsFormRegistration.invalid) {
        return;
      }
      else {
        this.isLoading = true;
        this.button = 'Processing';
        this.formData.append("shop_id", this.sname);
        this.formData.append("menu_name", this.mname);
        this.formData.append("location_id", this.oloc);
        this.formData.append("description", this.odes);
        this.formData.append("total_qnty", this.tqpurc);
        this.formData.append("number_users", this.tnusers);
        this.formData.append("offer_price", this.oprice);
        this.formData.append("actual_price", this.aprice);
        this.formData.append("available_date", this.adata);
        this.formData.append("available_time", this.atime);
        this.formData.append("clos_time", this.ctime);
        this.formData.append("cashback", this.cashback);
        this.formData.append("offer_img", this.currentphoto);
  
        this.easydeelservice.addoffer(this.formData).subscribe(
          data => {
            this.isLoading = false;
            this.button = 'Submit';
            this.toaster.success("Offers are added");
            this.router.navigate(['/offers']);
          },
          error => {
            this.isLoading = false;
            this.button = 'Submit';
            this.toaster.error("Unable to add Offers");
          }
        )
  
      }
    }
  
  }
  