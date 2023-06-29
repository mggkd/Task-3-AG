import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit{
  accordionForm: FormGroup | any;
  sections: any[] =[];

  constructor() {}

  ngOnInit(): void {
    this.accordionForm = new FormGroup({
      sectionHeader : new FormControl('',Validators.required),
      sectionDetails : new FormControl('',Validators.required)
    })
  }
  

  addSection() {
    if (this.accordionForm.valid) {
      const newSection = {
        header: this.accordionForm.value.sectionHeader,
        details: this.accordionForm.value.sectionDetails
      };
      this.sections.push(newSection);
      this.accordionForm.reset();
    }
  }

  onSubmit(){
    console.log(this.accordionForm)
  }
}

