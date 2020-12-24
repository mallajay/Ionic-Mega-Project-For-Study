import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { WidgetUtilService } from "src/app/providers/widgetUtil-service/widget-util.service";

@Component({
  selector: "app-reactive-form-two",
  templateUrl: "./reactive-form-two.page.html",
  styleUrls: ["./reactive-form-two.page.scss"],
})
export class ReactiveFormTwoPage implements OnInit {
  advanceReactiveForm: FormGroup;

  submittedValue: any;

  validationMessages = {};

  formErrors = {
    firstName: "",
    lastName: "",
    email: "",
    friendName: "",
    age: "",
    selectSubject: "",
  };

  mySubject: Array<any> = [
    {
      subjectName: "Physics",
      duration: "40 Hr",
    },
    {
      subjectName: "Chemistry",
      duration: "30 Hr",
    },
    {
      subjectName: "Maths",
      duration: "60 Hr",
    },
    {
      subjectName: "Biology",
      duration: "35 Hr",
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cerateForm();
  }

  cerateForm() {
    const formControls = this.mySubject.map(
      (control) => new FormControl(false)
    );

    this.advanceReactiveForm = this.fb.group({
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      addFriends: new FormArray([]),
      selectSubject: new FormArray(formControls),
      selectAll: new FormControl(false),
    });

    this.advanceReactiveForm.valueChanges.subscribe((data) => {
      this.onFormValueChanged(data);
    });

    this.createValidationMessages();
    this.onAddFriends();
    this.onCheckboxValueChanges();
  }

  onAddFriends() {
    (<FormArray>this.advanceReactiveForm.get("addFriends")).push(
      new FormGroup({
        friendName: new FormControl(null, Validators.required),
        age: new FormControl(null, [Validators.required]),
      })
    );
  }

  onDeleteFriend(index: number) {
    (<FormArray>this.advanceReactiveForm.get("addFriends")).removeAt(index);
  }

  onCheckboxValueChanges(): void {
    const getSelectedSubject = this.advanceReactiveForm.get("selectSubject");
    const getAllSelected = this.advanceReactiveForm.get("selectAll");

    // IF all Subject Selected
    getAllSelected.valueChanges.subscribe((val) => {
      getSelectedSubject.patchValue(Array(this.mySubject.length).fill(val), {
        emitEvent: false,
      });
    });

    //If Indiviusual Subject is selected
    getSelectedSubject.valueChanges.subscribe((val) => {
      const allSelected = val.every((chexboxStatus) => chexboxStatus);
      if (getAllSelected.value !== allSelected) {
        getAllSelected.patchValue(allSelected, { emitEvent: false });
      }
    });
  }

  onFormValueChanged(data) {
    const form = this.advanceReactiveForm;
    for (const formField in this.formErrors) {
      this.formErrors[formField] = "";
      const control = form.controls[formField];
      if (control && control.dirty && control.invalid) {
        const messageObj = this.validationMessages[formField];
        for (const key in control.errors) {
          this.formErrors[formField] =
            this.formErrors[formField] + messageObj[key] + " ";
        }
      }
    }
  }

  createValidationMessages() {
    this.validationMessages = {
      firstName: {
        required: "First Name is required",
        minlength: "First Name must be at least 3 characters long",
      },
      lastName: {
        required: "Last Name is required",
        minlength: "Last Name must be at least 3 characters long",
      },
      email: {
        required: "Email is required",
        email: "Email must be valid",
      },
    };
  }

  submitForm() {
    const formValue = {
      ...this.advanceReactiveForm.value,
      selectSubject: this.advanceReactiveForm.value.selectSubject
        .map((checked, index) => (checked ? this.mySubject[index] : null))
        .filter((value) => value !== null),
    };
    this.submittedValue = formValue;

    console.log(" this.submittedValue", this.submittedValue);

    // console.log('Form Submitted', this.advanceReactiveForm.value);
  }
}
