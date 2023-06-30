import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Buys } from 'src/app/models/buys.model';

@Component({
  selector: 'app-sale-history',
  templateUrl: './sale-history.component.html',
  styleUrls: ['./sale-history.component.css']
})
export class SaleHistoryComponent {
  historyData: Buys;
  data:Buys[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'n_productos', 'total', 'fecha_hora', 'estado'];

  dataSource = new MatTableDataSource<Buys>(this.data);
  clickedRows = new Set<Buys>()

  constructor(/*private service:HistoryService,*/ private _liveAnnouncer: LiveAnnouncer) {
    this.historyData = {} as Buys;
  }

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator

  ngOnInit(): void {
    /*
    this.getHistory();
    this.dataSource.paginator = this.paginator;
    */
  }

  getHistory(): void {
    /*
    this.service.getList().subscribe((response) => {
      console.log(response)
      this.dataSource.data = response;
    });
    */
  }
}
