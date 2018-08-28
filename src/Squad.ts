// a Squad has a person with a name,
// who is loaned from a chapter
import { Chapter } from './Chapter';

class SquadMember {
  name: string;
  chapter: Chapter;
  tribeLeader: boolean;
  chapterLeader: boolean;
  squadLeader: boolean;
};

export class Squad {
  public speciality: SquadMember[];
}
