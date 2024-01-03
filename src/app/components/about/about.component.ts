import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnDestroy {
  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;
  platformName = 'Ethical AI-driven Geographic Analytics Platform';

  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(SignUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}

@Component({
  selector: 'app-sign-up',
  templateUrl: '../shared/sign-up/sign-up.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, NgClass],
})
export class SignUpComponent {

  private themeSubscription: Subscription;
  isDarkMode: boolean | undefined;

  constructor(private themeService: ThemeService, public dialog: MatDialog) {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }
}
