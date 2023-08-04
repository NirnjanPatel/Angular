import { Component, ContentChild, TemplateRef } from '@angular/core';
import { CondContProjParentComponent } from '../cond-cont-proj-parent/cond-cont-proj-parent.component';

@Component({
  selector: 'app-coonditional-cont-proj',
  templateUrl: './coonditional-cont-proj.component.html',
  styleUrls: ['./coonditional-cont-proj.component.scss'],
})
export class CoonditionalContProjComponent {
  constructor(public templateRef: TemplateRef<unknown>) {}
  @ContentChild(CondContProjParentComponent)
  content!: CondContProjParentComponent;
  expanded: boolean = true;
}
