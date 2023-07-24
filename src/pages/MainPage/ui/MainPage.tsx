import { memo } from 'react';

import { Train } from '../../../entities/Train';

interface MainPageProps {}

const MainPage = memo((props: MainPageProps) => {
    return (
        <>
            <Train />
        </>
    );
});

export default MainPage;
