import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router"
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CatService } from '../cat.service';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat-edit',
  templateUrl: './cat-edit.component.html',
  styleUrls: ['./cat-edit.component.css']
})
export class CatEditComponent implements OnInit {
  id: number;
  editMode = false;
  catForm: FormGroup;

  constructor(private route: ActivatedRoute, private catService: CatService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let catName = '';
    let catImagePath = '';
    let catDescription = '';
    let behaviors = new FormArray([]);

    if (this.editMode) {
      let cat = this.catService.getCat(this.id);
      catName = cat.name;
      catImagePath = cat.imagePath;
      catDescription = cat.description;
      if (cat['behaviors']) {
        for (let behavior of cat.behaviors) {
          behaviors.push(new FormGroup({
            'name': new FormControl(behavior.name, Validators.required),
            'amount': new FormControl(behavior.amount, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
          }));
        }
      }
    }

    this.catForm = new FormGroup(
      {
        'name': new FormControl(catName, Validators.required),
        'imagePath': new FormControl(catImagePath, Validators.required),
        'description': new FormControl(catDescription, Validators.required),
        'behaviors': behaviors
      }
    );
  }

  onSubmit() {
    if (this.editMode) {
      this.catService.updateCat(this.id, this.catForm.value);
    } else {
      this.catService.addCat(this.catForm.value);
    }

    this.catForm.reset();
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  getControls() {
    return (<FormArray>this.catForm.get('behaviors')).controls;
  }

  onAddBehavior() {
    (<FormArray>this.catForm.get('behaviors')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern("^[1-9]+[0-9]*$")])
    }));
  }

  deleteBehavior(i){
    (<FormArray>this.catForm.get('behaviors')).removeAt(i);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
