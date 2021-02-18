import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ListService} from '../list.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  data: any;
  registerForm: FormGroup;
  submitted = false;
  id;
  
  constructor(private listServ : ListService, private activatedRoute : ActivatedRoute, 
    private formBuilder: FormBuilder, private _location: Location) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
       rol_id : 1,
    });
  
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);

    this.listServ.addUser(this.registerForm.value).subscribe(res => {
      console.log(res);
      this._location.back();
    });
  
    
  }
  
}
