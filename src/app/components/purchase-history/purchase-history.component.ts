import { Component, ViewChild } from '@angular/core';
import { Buys } from 'src/app/models/buys.model';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { HistoryService } from 'src/app/services/history.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent {

  historyData: Buys;
  data:Buys[] = [];
  displayedColumns: string[] = ['user_id', 'nombre', 'empresa', 'fecha_hora', 'estado'];

  dataSource = new MatTableDataSource<Buys>(this.data);
  clickedRows = new Set<Buys>()

  constructor(private service:HistoryService, private _liveAnnouncer: LiveAnnouncer) {
    this.historyData = {} as Buys;
  }

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator

  ngOnInit(): void {
    this.getHistory();
    this.dataSource.paginator = this.paginator;
  }

  getHistory(): void {
    this.service.getList().subscribe((response) => {
      console.log(response)
      this.dataSource.data = response;
    });
  }
}
