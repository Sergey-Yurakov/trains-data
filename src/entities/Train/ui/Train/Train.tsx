import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { getTrainsData, getTrainsError, getTrainsIsLoading } from '../../model/selectors/getTrains/getTrainsData';
import { fetchTrainsData } from '../../model/services/fetchTrainsData/fetchTrainsData';
import { TrainList } from '../TrainList/TrainList';

export const Train = memo(() => {
    const dispatch = useAppDispatch();
    const data = useSelector(getTrainsData);
    const isLoading = useSelector(getTrainsIsLoading);
    const error = useSelector(getTrainsError);

    useEffect(() => {
        dispatch(fetchTrainsData());
    }, [dispatch]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Произошла ошибка!</p>;
    }

    return <>{data.length > 0 ? <TrainList data={data} /> : <p>Данные отсутствуют</p>}</>;
});
