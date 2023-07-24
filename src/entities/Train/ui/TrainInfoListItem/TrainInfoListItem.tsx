import { ChangeEvent, memo, useCallback, useEffect, useState } from 'react';

import cl from '../TrainInfoList/TrainInfoList.module.css';

interface TrainInfoListItemProps {
    engineAmperage: number;
    force: number;
    speed: number;
    index: number;
    setIsValidButton: (value: boolean) => void;
    setIndexValue: (value: number) => void;
    setNewSpeed: (value: number) => void;
}

export const TrainInfoListItem = memo((props: TrainInfoListItemProps) => {
    const { engineAmperage, force, speed, setIsValidButton, index, setIndexValue, setNewSpeed } = props;
    const [isValidValue, setIsValidValue] = useState({
        engineAmperage: false,
        force: false,
        speed: false,
    });

    useEffect(() => {
        if (!isValidValue.speed && !isValidValue.force && !isValidValue.engineAmperage) {
            setIsValidButton(true);
        } else {
            setIsValidButton(false);
        }
    }, [isValidValue.engineAmperage, isValidValue.force, isValidValue.speed, setIsValidButton]);

    const onChangeSpeed = useCallback(
        (e: ChangeEvent<HTMLInputElement>, index: number) => {
            setIndexValue(index);
            setNewSpeed(+e.target.value);

            if (+e.target.value > 0 && Number.isInteger(+e.target.value)) {
                setIsValidValue({ ...isValidValue, speed: false });
            } else {
                setIsValidValue({ ...isValidValue, speed: true });
            }
        },
        [isValidValue, setIndexValue, setNewSpeed]
    );

    const onChangeForce = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (+e.target.value % 1 !== 0) {
                setIsValidValue({ ...isValidValue, force: false });
            } else {
                setIsValidValue({ ...isValidValue, force: true });
            }
        },
        [isValidValue]
    );

    const onChangeEngineAmperage = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (Number(e.target.value) > 0 && Number.isInteger(+e.target.value)) {
                setIsValidValue({ ...isValidValue, engineAmperage: false });
            } else {
                setIsValidValue({ ...isValidValue, engineAmperage: true });
            }
        },
        [isValidValue]
    );

    return (
        <>
            <tr>
                <td>
                    <input
                        defaultValue={engineAmperage || 0}
                        className={[cl.input, isValidValue.engineAmperage ? cl.dangerColor : cl.normalColor].join(' ')}
                        onChange={e => onChangeEngineAmperage(e)}
                    />
                </td>
                <td>
                    <input
                        defaultValue={force || 0}
                        className={[cl.input, isValidValue.force ? cl.dangerColor : cl.normalColor].join(' ')}
                        onChange={e => onChangeForce(e)}
                    />
                </td>
                <td>
                    <input
                        defaultValue={speed || 0}
                        className={[cl.input, isValidValue.speed ? cl.dangerColor : cl.normalColor].join(' ')}
                        onChange={e => onChangeSpeed(e, index)}
                    />
                </td>
            </tr>
        </>
    );
});
