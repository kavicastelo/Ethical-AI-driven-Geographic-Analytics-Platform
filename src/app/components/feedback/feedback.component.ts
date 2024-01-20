import {Component, OnInit} from '@angular/core';
import {FeedbackService} from "../../services/feedback.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {feedbackDataStore} from "../../shared/store/feedback-data-store";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  userProfile: any;
  feedbacks: any;

  feedbackForm = new FormGroup({
    feedback: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private feedbackService: FeedbackService, private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loadFeedback();
    this.userProfile = JSON.parse(sessionStorage.getItem('loggedInUser') || '{}');
  }

  loadFeedback() {
    this.feedbackService.getAllFeedback().subscribe(
      (data) => {
        this.feedbacks = data;
      }, (error) => {
        console.log(error)
      }
    )
  }

  loadDate() {
    const date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  submit() {
    console.log(this.userProfile)
    if(this.userProfile.name !== undefined && this.userProfile.name !== null) {
      this.feedbackService.createFeedback({
        id: null,
        name: this.userProfile.name,
        family_name: this.userProfile.family_name,
        email: this.userProfile.email,
        picture: this.userProfile.picture,
        feedback: this.feedbackForm.value.feedback,
        date: this.loadDate()
      }).subscribe(res => {
        this.openSnackBar('Feedback submitted successfully', 'OK');
        this.feedbackForm.reset();
        this.loadFeedback();
      }, error => {
        this.openSnackBar('Something went wrong', 'OK');
      })
    }
    else{
      const message = document.querySelector('.error-message') as HTMLElement;
      message.textContent = 'Please log in to submit feedback. Try to reload the page';
      message.style.display = 'block';
      setTimeout(() => {
        message.style.display = 'none';
      }, 3000);
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }

}
