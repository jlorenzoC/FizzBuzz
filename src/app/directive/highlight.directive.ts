import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input() numberToHighlight: string = '-1';
  @Input() searchCriteriaNumberToCompareTo: string = '-1';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer[this.highlight() ? 'addClass' : 'removeClass'](
      this.elementRef.nativeElement,
      'number-highlighted'
    );
  }

  private highlight(): boolean {
    if (this.searchCriteriaNumberToCompareTo !== '') {
      return this.numberToHighlight.includes(
        this.searchCriteriaNumberToCompareTo
      );
    }
    return false;
  }
}
