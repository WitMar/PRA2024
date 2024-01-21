import {useEffect, useState} from 'react';

function useCustomExample(counter) {

    const [word, setWord] = useState('Parzyste');

    function handleStatusChange(status) {
        if ( counter%2 === 0 ) {
            setWord('Parzyste');
        } else {
            setWord('Nieparzyste');
        }
    }

    useEffect(
        () => {
            handleStatusChange(counter)
        });

    return word;
}

export default useCustomExample;