import { InterviewBuddyPage } from './app.po';

describe('interview-buddy App', function() {
  let page: InterviewBuddyPage;

  beforeEach(() => {
    page = new InterviewBuddyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
