import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormArray,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { HelperService } from "./helper.service";
import { EXPENSEHEADER } from "./validateMessage";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.page.html",
  styleUrls: ["./reactive-form.page.scss"],
})
export class ReactiveFormPage implements OnInit {
  myClaimForm: FormGroup;
  businessMealAttendees: FormArray;

  hotelName: FormControl;
  city: FormControl;
  expenseType: FormControl;

  // Form Array Field i.e Dynamic Form for Meal Attendees
  attendeeType: FormControl;
  attendeeTitle: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  company: FormControl;
  age: FormControl;
  dateOfBirth: FormControl;
  panNo: FormControl;
  sex: FormControl;
  employeeId: FormControl;

  formError: any = {
    hotelName: "",
    city: "",

    attendeeType: "",
    attendeeTitle: "",
    firstName: "",
    lastName: "",
    company: "",
    age: "",
    dateOfBirth: "",
    panNo: "",
    sex: "",
    employeeId: "",
  };

  get mealAttendees() {
    return this.myClaimForm.get("newAttendes") as FormArray;
  }

  validationMessage: any = EXPENSEHEADER;
  showAddClaimSpinner: boolean = false;

  constructor(private helperService: HelperService, private fb: FormBuilder) {}

  ngOnInit() {
    this.createFormControl();
    this.createForm();
  }

  resetForm() {
    this.myClaimForm.reset();
    this.businessMealAttendees.reset();
    this.formError = {
      hotelName: "",
      city: "",
      expenseType: "",
    };
  }

  createFormControl() {
    this.expenseType = new FormControl("", [Validators.required]);
    this.hotelName = new FormControl("", [Validators.required]);
    this.city = new FormControl("");
  }

  createForm() {
    this.myClaimForm = this.fb.group({
      expenseType: this.expenseType,
      hotelName: this.hotelName,
      city: this.city,
      newAttendes: this.fb.array([this.createAttendeForm()]),
    });
    this.businessMealAttendees = this.myClaimForm.get(
      "newAttendes"
    ) as FormArray;
    this.myClaimForm.valueChanges.subscribe((data) =>
      this.onFormValueChanged(data)
    );
  }

  // Create Business Meals Attendess Forms
  createAttendeForm(): FormGroup {
    return this.fb.group({
      attendeeType: new FormControl(""),
      attendeeTitle: new FormControl(""),
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      company: new FormControl(""),
      age: new FormControl(""),
      dateOfBirth: new FormControl(""),
      panNo: new FormControl(""),
      sex: new FormControl(""),
      employeeId: new FormControl(""),
    });
  }

  onFormValueChanged(data) {
    this.formError = this.helperService.prepareValidationMessage(
      this.myClaimForm,
      this.validationMessage,
      this.formError
    );
  }

  // Selected Type Ion-selectable option
  selectedType = "businessMeals";
  onSelectChange(event) {
    this.selectedType = event.target.value;
    // console.log("Selected", this.selectedType);
  }

  attendesType = "partner";
  onSelect(event) {
    this.attendesType = event.target.value;
    // console.log("Selected", this.selectedType);
  }

  onChange(event) {
    this.selectedType = event.target.value;
  }

  // Business Meal Attendess
  addAttendees() {
    this.businessMealAttendees.push(this.createAttendeForm());
  }

  // remove contact from group
  removeContact(index) {
    // this.contactList = this.form.get('contacts') as FormArray;
    this.businessMealAttendees.removeAt(index);
  }
}
