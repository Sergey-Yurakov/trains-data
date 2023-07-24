import { CounterSchema } from '../../../../entities/Counter';
import { TrainSchema } from '../../../../entities/Train';

export interface StateSchema {
    counter: CounterSchema;
    trains: TrainSchema;
}
