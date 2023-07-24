import { memo, useCallback, useState } from 'react';

import { TrainData } from '../../model/types/trainSchema';
import { TrainInfoList } from '../TrainInfoList/TrainInfoList';
import { TrainListItem } from '../TrainListItem/TrainListItem';
import cl from './TrainList.module.css';

interface TrainListProps {
    data: TrainData[];
}

export const TrainList = memo((props: TrainListProps) => {
    const { data } = props;
    const [trainInfo, setTrainInfo] = useState<TrainData>();
    const [currentTrain, setCurrentTrain] = useState<string>('');

    const handleClick = useCallback(
        (name: string) => {
            if (name !== trainInfo?.name) {
                const res = data.find(i => i.name === name);
                setTrainInfo(res);
            }
        },
        [data, trainInfo?.name]
    );

    return (
        <div className={cl.container}>
            <div className={cl.block}>
                <table>
                    <caption>
                        <h1 className={cl.title}>Поезда</h1>
                    </caption>
                    <thead>
                        <tr>
                            <td>Название</td>
                            <td>Описание</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(train => (
                            <TrainListItem
                                currentTrain={currentTrain}
                                setCurrentTrain={setCurrentTrain}
                                key={train.name}
                                name={train.name}
                                description={train.description}
                                handleClick={handleClick}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            {trainInfo ? <TrainInfoList data={trainInfo} /> : null}
        </div>
    );
});
