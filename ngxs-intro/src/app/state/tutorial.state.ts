import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from '../models/tutorial.model';
import { AddTutorial, RemoveTutorial } from '../actions/tutorial.action';
//create a state model
export class TutorialStateModel {
  tutorials: Tutorial[] = [];
}
//use state decorator to define a name and default values based on the state model above
@State<TutorialStateModel>({
  name: 'tutorials',
  defaults: {
    tutorials: [],
  },
})
export class TutorialState {
  @Selector()
  static getTutorials(state: TutorialStateModel) {
    return state.tutorials;
  }

  @Action(AddTutorial)
  add(
    { getState, patchState }: StateContext<TutorialStateModel>,
    { payload }: AddTutorial
  ) {
    const state = getState();
    patchState({
      tutorials: [...state.tutorials, payload],
    });
  }

  @Action(RemoveTutorial)
  remove(
    { getState, patchState }: StateContext<TutorialStateModel>,
    { payload }: RemoveTutorial
  ) {
    patchState({
      tutorials: getState().tutorials.filter((a) => a.name != payload),
    });
  }
}
