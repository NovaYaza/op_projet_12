export class ActivityModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session, index) => ({
      day: index + 1, // transforme la date en numéro de jour
      kilogram: session.kilogram,
      calories: session.calories,
    }));
  }
}