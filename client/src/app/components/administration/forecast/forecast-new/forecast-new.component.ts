import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";
import {ForecastService} from "../../../../services/forecast.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-forecast-new',
  templateUrl: './forecast-new.component.html',
  styleUrls: ['./forecast-new.component.scss']
})
export class ForecastNewComponent implements OnInit {
  draftItem: any;
  isLoading: boolean = false;

  constructor(private sanitizer: DomSanitizer, private forecastService: ForecastService, private snackBar: MatSnackBar) { }

  addForecastForm = new FormGroup({
    title: new FormControl(null,[
      Validators.required
    ]),
    cont: new FormControl(null,[
      Validators.required
    ])
  })

  ngOnInit(): void {
    if (localStorage.getItem('addForecastForm') != null) {
      this.draftItem = JSON.parse(localStorage.getItem('addForecastForm')!);
      this.addForecastForm.setValue(JSON.parse(localStorage.getItem('addForecastForm')!));

      this.draftItem.cont = this.sanitizer.bypassSecurityTrustHtml(this.draftItem.cont);
      // this.draftItem.cont = this.draftItem.cont.replace(/[\r\n]+/g," ")
    }
    else {
      this.draftItem = [{"title":null,"cont":null}];
      this.addForecastForm.reset();
    }
  }

  getDate() {
    let date;
    date = new Date().toString();
    return date.split(' ').slice(1,4).join(' ');
  }

  saveForecast() {
    this.isLoading = true;
    this.forecastService.getForecast().subscribe(res => {
      if (res != null && res.length > 0){
        this.forecastService.deleteForecast(1).subscribe(res => {
          this.forecastService.createForecast({
            id: 1,
            title: this.addForecastForm.get('title')?.value,
            dateTime: this.getDate(),
            description: this.addForecastForm.get('cont')?.value,
            likes: 0,
            visible: true
          }).subscribe(res => {
            this.isLoading = false;
            this.openSnackBar("Forecast Created",'OK');
          }, err => {
            this.isLoading = false;
            this.openSnackBar(err.error.message,'OK');
          })
        }, err => {
          this.isLoading = false;
          this.openSnackBar(err.error.message,'OK');
        })
      }
      else{
        this.forecastService.createForecast({
          id: 1,
          title: this.addForecastForm.get('title')?.value,
          dateTime: this.getDate(),
          description: this.addForecastForm.get('cont')?.value,
          likes: 0,
          visible: true
        }).subscribe(res => {
          this.isLoading = false;
          this.openSnackBar("Forecast Created",'OK');
        }, err => {
          this.isLoading = false;
          this.openSnackBar(err.error.message,'OK');
        })
      }
    })
  }

  saveDraft() {
    localStorage.setItem('addForecastForm', JSON.stringify(this.addForecastForm.value));
    location.reload();
  }

  discardDraft() {
    localStorage.removeItem('addForecastForm');
    location.reload();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }
}
