import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialState } from 'src/app/state/tutorial.state';
import { Observable } from 'rxjs';
import { RemoveTutorial } from 'src/app/actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  tutorials$!: Observable<Tutorial>;

  constructor(private store: Store) {
    this.tutorials$ = this.store.select(state => state.tutorials.tutorials)
   }

   delTutorial(name: string) {
     this.store.dispatch(new RemoveTutorial(name))
   }

  ngOnInit(): void {
  }

}
