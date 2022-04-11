import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: `<span class="tag">{{ content }}</span>`,
  styleUrls: ['./tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {

  @Input() content!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
