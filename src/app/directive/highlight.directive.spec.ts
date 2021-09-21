import { ElementRef, Renderer2, RendererStyleFlags2 } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    let nativeElement: any;
    const directive = new HighlightDirective(
      new MockElementRef(nativeElement),
      new MockRenderer2()
    );
    expect(directive).toBeTruthy();
  });
});

class MockElementRef extends ElementRef {}
class MockRenderer2 extends Renderer2 {
  get data(): { [key: string]: any } {
    throw new Error('Method not implemented.');
  }
  destroy(): void {
    throw new Error('Method not implemented.');
  }
  createElement(name: string, namespace?: string | null) {
    throw new Error('Method not implemented.');
  }
  createComment(value: string) {
    throw new Error('Method not implemented.');
  }
  createText(value: string) {
    throw new Error('Method not implemented.');
  }
  appendChild(parent: any, newChild: any): void {
    throw new Error('Method not implemented.');
  }
  insertBefore(
    parent: any,
    newChild: any,
    refChild: any,
    isMove?: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  removeChild(parent: any, oldChild: any, isHostElement?: boolean): void {
    throw new Error('Method not implemented.');
  }
  selectRootElement(selectorOrNode: any, preserveContent?: boolean) {
    throw new Error('Method not implemented.');
  }
  parentNode(node: any) {
    throw new Error('Method not implemented.');
  }
  nextSibling(node: any) {
    throw new Error('Method not implemented.');
  }
  setAttribute(
    el: any,
    name: string,
    value: string,
    namespace?: string | null
  ): void {
    throw new Error('Method not implemented.');
  }
  removeAttribute(el: any, name: string, namespace?: string | null): void {
    throw new Error('Method not implemented.');
  }
  addClass(el: any, name: string): void {
    throw new Error('Method not implemented.');
  }
  removeClass(el: any, name: string): void {
    throw new Error('Method not implemented.');
  }
  setStyle(
    el: any,
    style: string,
    value: any,
    flags?: RendererStyleFlags2
  ): void {
    throw new Error('Method not implemented.');
  }
  removeStyle(el: any, style: string, flags?: RendererStyleFlags2): void {
    throw new Error('Method not implemented.');
  }
  setProperty(el: any, name: string, value: any): void {
    throw new Error('Method not implemented.');
  }
  setValue(node: any, value: string): void {
    throw new Error('Method not implemented.');
  }
  listen(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    throw new Error('Method not implemented.');
  }
}
