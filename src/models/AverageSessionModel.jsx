export class AverageSessionModel {
  constructor(data) {
    this.userId = data.userId;
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    this.sessions = data.sessions.map((session, index) => ({
      day: session.day,
      dayLabel: days[index],
      sessionLength: session.sessionLength,
    }));
  }
}