import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Lesson } from '../model/lesson';

@Injectable()
export class LessonEntityService extends EntityCollectionServiceBase<Lesson> {
  constructor(
    public serviceElementsFactory: EntityCollectionServiceElementsFactory,
  ) {
    super('Lesson', serviceElementsFactory);
  }
}
