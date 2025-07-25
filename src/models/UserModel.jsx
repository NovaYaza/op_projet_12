export class UserModel {
  constructor(data) {
    this.id = data.id;
    this.firstName = data.userInfos.firstName;
    this.lastName = data.userInfos.lastName;
    this.age = data.userInfos.age;
    this.score = data.score || data.todayScore || 0;
    this.keyData = data.keyData;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}