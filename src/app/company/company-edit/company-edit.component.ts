import { OnInit, Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})

export class CompanyEditComponent implements OnInit {
  id: number;
  editMode = false;
  companyForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private companyService: CompanyService,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        });
  }

  onSubmit() {
    if(this.editMode) {
      this.companyService.updateCompany(this.id, this.companyForm.value);
    } else {
      this.companyService.addCompany(this.companyForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let companyName = '';
    let companyFullName = '';
    let companyCreatedBy = '';

    if(this.editMode) {
      const company = this.companyService.getCompany(this.id);
      companyName = company.name;
      companyFullName = company.full_name;
      companyCreatedBy = company.createdBy;
    }

    this.companyForm = new FormGroup({
      name: new FormControl(companyName, Validators.required),
      full_name: new FormControl(companyFullName, Validators.required),
      createdBy: new FormControl(companyCreatedBy, Validators.required)
    });

  }

}
