import { Component } from '@angular/core';
import {feedbackDataStore} from "../../../shared/store/feedback-data-store";

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent {
  feedbacks = feedbackDataStore

  deleteFeedback(id: any) {
    console.log("delete feedback id: " + id);
  }
}
