import trainStationModel from "./station.model";
import { TTrainStation } from "./station.type";

export const createTrainStationDB = async (payload: TTrainStation) => {
  const station = await trainStationModel.create(payload);
  return station;
};
