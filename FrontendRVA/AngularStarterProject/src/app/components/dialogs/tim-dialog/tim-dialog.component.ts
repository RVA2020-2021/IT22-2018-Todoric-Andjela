import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/models/liga';
import { Tim } from 'src/app/models/tim';
import { LigaService } from 'src/app/services/liga.service';
import { TimService } from 'src/app/services/tim.service';

@Component({
  selector: 'app-tim-dialog',
  templateUrl: './tim-dialog.component.html',
  styleUrls: ['./tim-dialog.component.css']
})
export class TimDialogComponent implements OnInit {

  public flag: number;
  lige: Liga[];

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<TimDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Tim,
              public timService: TimService,
              public ligaService: LigaService) { }

  ngOnInit(): void {
    this.ligaService.getAllLige().subscribe(data => {
      this.lige = data;
    });
  }

  compareTo(a,b) {
    return a.id == b.id;
  }

  public add(): void {
    this.timService.addTim(this.data).subscribe(() => {
      this.snackBar.open('Tim je uspešno dodat: ' + this.data.naziv, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom dodavanja tima: ' + this.data.naziv, 'Zatvori', {
        duration: 2500
      })
    }
  }

  public update(): void {
    this.timService.updateTim(this.data).subscribe(() => {
      this.snackBar.open('Tim je uspešno modifikovan: ' + this.data.naziv, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom modifikacije tima: ' + this.data.naziv, 'Zatvori', {
        duration: 2500
      })
    }
  }

  public delete(): void {
    this.timService.deleteTim(this.data.id).subscribe(() => {
      this.snackBar.open('Tim je uspešno obrisan: ' + this.data.naziv, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom brisanja tima: ' + this.data.naziv, 'Zatvori', {
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
