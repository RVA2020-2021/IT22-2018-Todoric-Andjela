import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Liga } from 'src/app/models/liga';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-liga-dialog',
  templateUrl: './liga-dialog.component.html',
  styleUrls: ['./liga-dialog.component.css']
})
export class LigaDialogComponent implements OnInit {

  public flag:number; //govori o kojoj operaciji je rec prilikom otvaranja prozora

  constructor(public snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<LigaDialogComponent>,
              @Inject (MAT_DIALOG_DATA) public data: Liga,
              public ligaService: LigaService) { }

  ngOnInit(): void {
  }

  public addLiga(): void {
    this.ligaService.addLiga(this.data).subscribe(() => {
      this.snackBar.open('Uspešno dodata liga: ' + this.data.naziv, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom dodavanja nove lige! ' , 'Zatvori', {
        duration: 2500
      })
    }
  }

  public updateLiga(): void {
    this.ligaService.updateLiga(this.data).subscribe(() => {
      this.snackBar.open('Uspešno modifikovana liga: ' + this.data.naziv, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom modifikacije postojeće lige! ' , 'Zatvori', {
        duration: 2500
      })
    }
  }

  public deleteLiga(): void {
    this.ligaService.deleteLiga(this.data.id).subscribe(() => {
      this.snackBar.open('Uspešno obrisana liga: ' + this.data.naziv, 'OK', {
        duration: 2500
      })
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
      this.snackBar.open('Došlo je do greške prilikom brisanja lige! ' , 'Zatvori', {
        duration: 2500
      })
    }
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open('Odustali ste.', 'Zatvori', {
      duration: 1000
    });
  }

}
