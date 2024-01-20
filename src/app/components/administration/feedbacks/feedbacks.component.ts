import {Component, OnInit} from '@angular/core';
import {feedbackDataStore} from "../../../shared/store/feedback-data-store";
import {MatSnackBar} from "@angular/material/snack-bar";
import {FeedbackService} from "../../../services/feedback.service";

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit{
  feedbacks: any;
  constructor(private feedbackService: FeedbackService, private matSnackBar: MatSnackBar) {
  }
  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks() {
    this.feedbackService.getAllFeedback().subscribe(res => {
      this.feedbacks = res
    });
  }

  deleteFeedback(id: any) {
    this.feedbackService.deleteFeedback(id).subscribe(() => {
      this.loadFeedbacks();
      this.openSnackBar('Feedback deleted successfully', 'Close');
    }, error => {
      this.openSnackBar('Error deleting feedback', 'Close');
    })
  }

  openSnackBar(message: string, action: string) {
    this.matSnackBar.open(message, action, {duration: 3000});
  }
}
