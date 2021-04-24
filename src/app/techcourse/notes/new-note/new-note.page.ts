import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { Note } from '../note.model';



@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})

export class NewNotePage implements OnInit {
  noteForm: FormGroup = this.fb.group({
    titleInput: [[], Validators.required],
    descriptionInput: [[], Validators.required]
  })

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  addNote() {
    if (this.noteForm.valid) {
      let newNote:  Note= {
        title: this.noteForm.get('titleInput').value,
        content: this.noteForm.get('descriptionInput').value
      }


      console.log(newNote);
    } else {
      console.log("Invalid form");
    }
  }
}

