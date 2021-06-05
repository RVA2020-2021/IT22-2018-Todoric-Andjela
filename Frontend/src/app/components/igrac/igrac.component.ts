import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Igrac } from 'src/app/models/igrac';
import { Nacionalnost } from 'src/app/models/nacionalnost';
import { Tim } from 'src/app/models/tim';
import { IgracService } from 'src/app/services/igrac.service';
import { IgracDialogComponent } from '../dialogs/igrac-dialog/igrac-dialog.component';

@Component({
  selector: 'app-igrac',
  templateUrl: './igrac.component.html',
  styleUrls: ['./igrac.component.css']
})
export class IgracComponent implements OnInit, OnChanges, OnDestroy {

  displayedColumns = ['id', 'ime', 'prezime', 'brojReg', 'datumRodjenja', 'nacionalnost', 'tim', 'actions'];
  dataSource: MatTableDataSource<Igrac>;
  subscription: Subscription;
  @Input() selektovanTim: Tim;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private igracService: IgracService,
              private dialog: MatDialog) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(): void {
    if(this.selektovanTim.id) {
      this.loadData();
    }
  }

  ngOnInit(): void {
    //this.loadData();
  }

  loadData() {
    this.subscription = this.igracService.getIgracaTima(this.selektovanTim.id).subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.filterPredicate = (data, filter: string) =>{
        const accumulator = (currentTerm, key) => {
          return key === 'nacionalnost' ? currentTerm + data.nacionalnost.naziv : currentTerm + data[key];
        }
        const dataStr = Object.keys(data).reduce(accumulator,'').toLowerCase();
        const transformedFilter = filter.trim().toLowerCase();
        return dataStr.indexOf(transformedFilter) !== -1;
      };

      this.dataSource.sortingDataAccessor = (data, property) => {
        switch(property) {
          case 'nacionalnost': return data.nacionalnost.naziv.toLowerCase();

          default: return data[property];
        }
      };

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }),
    (error: Error) => {
      console.log(error.name + ' ' + error.message);
    }
  }

  openDialog(flag: number, id?: number, ime?: string, prezime?: string, brojReg?: string,
            datumRodjenja?: Date, nacionalnost?: Nacionalnost, tim?: Tim) {
    const dialogRef = this.dialog.open(IgracDialogComponent,
          { data: {id, ime, prezime, brojReg, datumRodjenja, nacionalnost, tim}});
    dialogRef.componentInstance.flag = flag;
    if(flag === 1) {
      dialogRef.componentInstance.data.tim = this.selektovanTim;
    }
    dialogRef.afterClosed().subscribe(result => {
      if(result === 1) {
        this.loadData();
      }
    });

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;

  }

}
