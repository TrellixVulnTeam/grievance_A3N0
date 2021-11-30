import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  portalForm: FormGroup;
  submitted = false;
  designations:String[];

  constructor(private formBuilder: FormBuilder, private router:Router) { }

  ngOnInit() {
    let designations = new DataService();
    this.designations = designations.getDesignations()

      this.portalForm = this.formBuilder.group({
          messageType:['', Validators.required],
          name: ['', Validators.required],
          regno	: ['', Validators.required],
          designation	: ['', Validators.required],
          info:['', Validators.required]
      });
  }

  get f() { return this.portalForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log(this.portalForm.controls);


      if (this.portalForm.invalid) {
          return;
      }


      this.router.navigate(['/finished'])

  }
}
