import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  template: `
    <svg *ngIf="!selected" class="favorite" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.999 0c.279 0 .533.16.655.41l2.079 4.282 4.646.688c.273.04.498.23.585.491a.729.729 0 0 1-.178.743l-3.37 3.34.796 4.713a.726.726 0 0 1-.294.712c-.224.161-.548.182-.767.052L8 13.212l-4.177 2.219c-.218.13-.515.109-.742-.052a.81.81 0 0 1-.319-.712l.822-4.713-3.367-3.34A.725.725 0 0 1 .622 5.38l4.643-.688L7.345.41A.73.73 0 0 1 7.998 0Zm0 2.393L6.408 5.674a.74.74 0 0 1-.549.403l-3.586.528 2.604 2.579a.733.733 0 0 1 .203.64l-.612 3.625 3.188-1.704a.722.722 0 0 1 .685 0l3.189 1.704-.612-3.625a.735.735 0 0 1 .206-.64l2.604-2.58-3.586-.527a.73.73 0 0 1-.549-.403L8 2.393Z" fill="currentColor" fill-rule="nonzero"/></svg>
    <svg *ngIf="selected" class="favorite favorite--selected" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m10.82 4.555 4.353.642a.967.967 0 0 1 .54 1.648l-3.158 3.097.746 4.441a.971.971 0 0 1-1.412 1.018l-3.89-2.075L4.11 15.4a.976.976 0 0 1-1.024-.07.965.965 0 0 1-.387-.948l.745-4.441L.287 6.845a.974.974 0 0 1-.239-.993.964.964 0 0 1 .78-.655l4.35-.642L7.129.545a.967.967 0 0 1 1.742 0l1.948 4.01Z" fill="currentColor" fill-rule="nonzero"/></svg>
  `,
  styleUrls: ['./favorite.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteComponent implements OnInit {

  @Input() selected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
