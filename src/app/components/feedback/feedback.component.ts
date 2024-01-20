import {Component, OnInit} from '@angular/core';
import {FeedbackService} from "../../services/feedback.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {feedbackDataStore} from "../../shared/store/feedback-data-store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {filter} from "rxjs";
import {NavigationEnd, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  userProfile: any = [
    {
      name: '',
      family_name: '',
      email: '',
      picture: '',
    }
  ];
  feedbacks: any;

  feedbackForm = new FormGroup({
    feedback: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private feedbackService: FeedbackService, private matSnackBar: MatSnackBar, private router: Router, private cookieService: AuthService) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        // Reload the page when the route changes
        window.location.reload();
        window.scrollTo(0, 0);
      });

    if (!this.cookieService.isUserProfileName()){
      this.router.navigate(['/authorize']);
    }

    this.loadFeedback();
    this.userProfile.name = this.cookieService.profileName();
    this.userProfile.family_name = this.cookieService.profileFamilyName();
    this.userProfile.email = this.cookieService.profileEmail();
    this.userProfile.picture = this.cookieService.profilePicture();
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
    if (this.feedbackForm.valid){
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
        location.reload();
      }
    }
    else {
      this.openSnackBar('Please Enter Your Feedback', 'OK')
    }
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }

}
