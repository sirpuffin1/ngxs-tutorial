import { Tutorial } from "../models/tutorial.model";

export class AddTutorial {
  static readonly type = '[TUTORIAL] Add'

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial {
  static readonly type = '[TUTORIAL] Delete'
  constructor(public payload: string) {}
}
