import { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { TrainData } from '../../model/types/trainSchema';
import { TrainInfoListItem } from '../TrainInfoListItem/TrainInfoListItem';
import cl from './TrainInfoList.module.css';

interface TrainItemInfoProps {
    data: TrainData;
}

export const TrainInfoList = memo((props: TrainItemInfoProps) => {
    const { data } = props;
    const [isValidButton, setIsValidButton] = useState(false);
    const [indexValue, setIndexValue] = useState<number>();
    const [newSpeed, setNewSpeed] = useState<number>();

    const dt = useMemo(() => [...data.characteristics], [data.characteristics]);

    const handleClick = useCallback(() => {
        console.log(dt.sort((a, b) => a.speed - b.speed));
    }, [dt]);

    useEffect(() => {
        if (indexValue !== undefined && newSpeed) {
            dt[indexValue] = {
                ...dt[indexValue],
                speed: newSpeed,
            };
            console.log('dt', dt);
        }
    }, [data, dt, indexValue, newSpeed]);

    return (
        <div>
            <div className={cl.wrapper}>
                <table>
                    <caption className={cl.title}>
                        <h1>Характеристики</h1>
                        <h1>{data.name}</h1>
                    </caption>
                    <thead>
                        <tr>
                            <td>Ток двигателя</td>
                            <td>Сила тяги</td>
                            <td>Скорость</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.characteristics.map((characteristic, index) => (
                            <TrainInfoListItem
                                setNewSpeed={setNewSpeed}
                                setIndexValue={setIndexValue}
                                index={index}
                                setIsValidButton={setIsValidButton}
                                key={characteristic.speed}
                                engineAmperage={characteristic.engineAmperage}
                                force={characteristic.force}
                                speed={characteristic.speed}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={cl.btnWrapper}>
                <button className={cl.btn} disabled={!isValidButton} onClick={handleClick}>
                    Отправить данные
                </button>
            </div>
        </div>
    );
});
