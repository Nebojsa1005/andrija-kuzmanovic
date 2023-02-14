import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoDownload]'
})
export class NoDownloadDirective {
  
  @HostListener('dragstart', ['$event'])
  onDragStart(event: DragEvent) {    
    event.preventDefault();
  }

  @HostListener('contextmenu', ['$event'])
  onContextMenu(event: MouseEvent) {    
    event.preventDefault();
  }
}