import { UserModel } from '../models/UserModel';
import { ActivityModel } from '../models/ActivityModel';
import { AverageSessionModel } from '../models/AverageSessionModel';
import { PerformanceModel } from '../models/PerformanceModel';

export function formatDataByType(type, rawData) {
  switch (type) {
    case 'main': return new UserModel(rawData);
    case 'activity': return new ActivityModel(rawData);
    case 'average': return new AverageSessionModel(rawData);
    case 'performance': return new PerformanceModel(rawData);
    default: return rawData;
  }
}