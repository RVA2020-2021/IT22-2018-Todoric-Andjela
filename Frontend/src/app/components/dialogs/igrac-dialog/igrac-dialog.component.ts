import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { error } from 'selenium-webdriver';
import { Igrac } from 'src/app/models/igrac';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { IgracService } from 'src/app/services/igrac.service';
import { NacionalnostService } from 'src/app/services/nacionalnost.service';

@Component({
  selector: 'app-igrac-dialog',
  templateUrl: './igrac-dialog.component.html',
  styleUrls: ['./igrac-dialog.component.css']
})
export class IgracDialogComponent implements OnInit, OnDestroy {

  nacionalnosti: Nacionalnost[];
  public flag: number;
  nacionalnostSubscription: Subscription;

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<IgracDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Igrac,
              public nacionalnostService: NacionalnostService,
              public igracService: IgracService) { }

  ngOnDestroy(): void {
    this.nacionalnostSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.nacionalnostSubscription = this.nacionalnostService.getAllNacionalnosti().subscribe(
      data => {
        this.nacionalnosti = data;
      }
    ),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
    }
  }

  compareTo(a, b) {
    return a.id == b.id;
  }

  public add(): void {
    this.igracService.addIgrac(this.data).subscribe(() => {
      this.snackBar.open('Igrač je uspešno dodat: ' + this.data.id, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom dodavanja igrača: ' + this.data.id, 'Zatvori', {
        duration: 2500
      })
    }
  }

  public update(): void {
    this.igracService.updateIgrac(this.data).subscribe(() => {
      this.snackBar.open('Igrač je uspešno modifikovan: ' + this.data.id, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom modifikacije igrača: ' + this.data.id, 'Zatvori', {
        duration: 2500
      })
    }
  }

  public delete(): void {
    this.igracService.deleteIgrac(this.data.id).subscribe(() => {
      this.snackBar.open('Igrač je uspešno obrisan: ' + this.data.id, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom brisanja igrača: ' + this.data.id, 'Zatvori', {
        duration: 2500
      })
    }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.' , 'Zatvori', {
      duration: 1000
    })
  }

}
