import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-homedashboard',
  templateUrl: './homedashboard.component.html',
  styleUrls: ['./homedashboard.component.css']
})
export class HomeDashBoardComponent {

  form = new FormGroup({})
  options: FormlyFormOptions = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  }
  model = {
    id: '',
    date_of_enrollment: '',
    packet_provided:'',
    school_information:'',
    discussion_topics: ''
  }
	fields: FormlyFieldConfig[] = [
    {
      key: 'id',
      type: 'input',
      templateOptions: {
        label: 'Student ID :',
        //placeholder: 'Enter name',
        required: true,
      },
    },
    {
      key: 'date_of_enrollment',
      type: 'input',
      templateOptions: {
        label: 'Date of Enrollment Conference:',
        //placeholder: 'Placeholder',
        //description: 'Description',
        type: 'date',
        required: true,
      },
    },
    {
      key: 'packet_provided',
      type: 'select',
      templateOptions: {
        label: 'Was a Welcome Packet provided to the familiy?',
        placeholder: 'Select One',
        //description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2'  },
          { value: 3, label: 'Option 3'  },
          { value: 4, label: 'Option 4', disabled: true },
        ],
      },
    },
    {
      key: 'school_information',
      type: 'multicheckbox',
      templateOptions: {
        formCheck: 'inline',
        label: 'What School information was included in the welcome packet?',
        options: [
          { value: 'School Map', label: 'School Map'},
          { value: 'School Bell Schedule', label: 'School Bell Schedule' },
          { value: 'Campus Tutoring Opportunities', label: 'Campus Tutoring Opportunities' },
        ],
      },
    },
    {
      key: 'discussion_topics',
      type: 'radio',
      templateOptions: {
        formCheck: 'inline',
        label: 'Key Discussion Topics: ',
        options: [
          { value: 'Students interests, strengths and previus successes', label: 'Students interests, strengths and previus successes' },
          { value: 'Social, emotional and behavioral supports', label: 'Social, emotional and behavioral supports' },
          { value: 'Post-secondary readiness', label: 'Post-secondary readiness' },
        ],
      },
    },
	]

	onSubmit() {
    console.log(this.model);
		console.log(this.form.valid);
  }

}
