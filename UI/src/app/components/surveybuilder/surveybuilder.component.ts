import { Component } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-surveybuilder',
  templateUrl: './surveybuilder.component.html',
  styleUrls: ['./surveybuilder.component.scss']
})
export class SurveybuilderComponent {

  fields: FormlyFieldConfig[] = [];
  model: any = {};
  fieldsResult: FormlyFieldConfig[] = [];
  modelResult: any;

  onFieldsChange(fields: FormlyFieldConfig[]): void {
    this.fieldsResult = fields;
  }

  onModelChange(model: any): void {
    this.modelResult = model;
  }

}
