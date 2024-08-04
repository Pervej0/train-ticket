import mongoose, { Schema } from "mongoose";
import { TTrainStation } from "./station.type";

const trainStationSchema = new Schema<TTrainStation>(
  {
    stationId: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    name: {
      type: Schema.Types.String,
      required: true,
    },
    code: {
      type: Schema.Types.String,
      required: true,
      unique: true,
    },
    city: {
      type: Schema.Types.String,
      required: true,
    },
    country: {
      type: Schema.Types.String,
      required: true,
    },
    latitude: {
      type: Schema.Types.Number,
      required: true,
    },
    longitude: {
      type: Schema.Types.Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const trainStationModel = mongoose.model<TTrainStation>(
  "trainStation",
  trainStationSchema
);

export default trainStationModel;
