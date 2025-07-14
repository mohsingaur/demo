import { Injectable } from '@angular/core';
import { ITasks } from '../tasks/tasks.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private facts: ITasks[] = [
    { id: 1, userId: 1, title: "Bananas are berries, but strawberries aren\'t", createdOn: '2025-01-01', body: 'Botanically speaking, bananas meet all the criteria of berries, while strawberries do not.', isComplete: false },
    { id: 2, userId: 2, title: "Octopuses have three heart", createdOn: '2025-01-01', body: 'Two pump blood to the gills, and one pumps it to the rest of the body. When they swim, the heart that delivers blood to the body actually stops beating. ', isComplete: false },
    { id: 3, userId: 3, title: "There\'s a species of jellyfish that can potentially live forever", createdOn: '2025-01-01', body: 'Turritopsis dohrnii, known as the \"immortal jellyfish,\" can revert its cells to an earlier stage and start its life cycle over.', isComplete: false },
    { id: 4, userId: 4, title: "The Eiffel Tower can grow more than 6 inches in summer", createdOn: '2025-01-01', body: 'Metal expands when heated, so the tower gets taller during hot days.', isComplete: false },
    { id: 5, userId: 2, title: "Honey never spoils", createdOn: '2025-01-01', body: 'Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.', isComplete: false },
    { id: 6, userId: 2, title: "Wombat poop is cube-shaped", createdOn: '2025-01-01', body: 'This unique shape helps prevent the poop from rolling away, which wombats use to mark their territory.', isComplete: false },
    { id: 7, userId: 5, title: "Sharks existed before trees", createdOn: '2025-01-01', body: 'Sharks have been around for over 400 million years, while the first trees appeared about 350 million years ago.', isComplete: false },
  ]

  constructor() {
    let facts = localStorage.getItem('facts');
    if (facts) {
      this.facts = JSON.parse(facts);
    }
  }

  getAllFacts(): ITasks[] {
    return this.facts;
  }

  getFactsByUserId(userId: number): ITasks[] {
    return this.facts.filter(fact => fact.userId == userId);
  }

  addFact(fact: any, uid: number) {
    this.facts.push({
      id: new Date().getTime(),
      userId: uid,
      title: fact.title,
      body: fact.fact,
      isComplete: false,
      createdOn: fact.date
    });
    this.saveFacts();
  }

  removeFacts(id: number) {
    this.facts = this.facts.filter(fact => fact.id !== id);
    this.saveFacts()
  }

  private saveFacts(){
    localStorage.setItem('facts', JSON.stringify(this.facts));
  }

}
