import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() searchKeyword: string;
  @Input() currentPage: number;
  @Input() totalPages: number;

  @Output() pageChange = new EventEmitter();

  @ViewChild('previous', { static: false }) previousBtn: ElementRef;
  @ViewChild('next', { static: false }) nextBtn: ElementRef;

  previousBtnSub;
  nextBtnSub;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.previousBtnSub = fromEvent(this.previousBtn.nativeElement, 'click')
    .pipe(
      debounceTime(300)
    )
    .subscribe(res => {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.pageChange.emit(this.currentPage);
      }
    });

    this.nextBtnSub = fromEvent(this.nextBtn.nativeElement, 'click')
    .pipe(
      debounceTime(300)
    )
    .subscribe(res => {
      if (this.currentPage <= this.totalPages) {
        this.currentPage++;
        this.pageChange.emit(this.currentPage);
      }
    });
  }
  
  ngOnDestroy() {
    this.previousBtnSub.unsubscribe();
    this.nextBtnSub.unsubscribe()
  }

}
