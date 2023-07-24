import { memo } from 'react';

import cl from './TrainListItem.module.css';

interface TrainListItemProps {
    name: string;
    description: string;
    currentTrain: string;
    handleClick: (name: string) => void;
    setCurrentTrain: (value: string) => void;
}

export const TrainListItem = memo((props: TrainListItemProps) => {
    const { description, name, handleClick, setCurrentTrain, currentTrain } = props;

    const clickHandle = (name: string) => {
        handleClick(name);
        if (name === currentTrain) {
            setCurrentTrain('');
        } else {
            setCurrentTrain(name);
        }
    };

    return (
        <tr className={name === currentTrain ? cl.active : ''}>
            <td>
                <button onClick={() => clickHandle(name)} className={cl.content}>
                    {name}
                </button>
            </td>
            <td>
                <button onClick={() => clickHandle(name)} className={cl.content}>
                    {description}
                </button>
            </td>
        </tr>
    );
});
