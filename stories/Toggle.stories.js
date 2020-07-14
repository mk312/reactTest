import '../src/client/scss/styles.scss';
import React from 'react';
import Toggle from '../src/client/components/basic/Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
};

export const ToggleWithCurrentValues = () =>(
    <Toggle
        values={[{ value: 'TITLE', id: 'filterValue1' }, { value: 'GENRE', id: 'filterValue2' }]}
    ></Toggle>
);
export const ToggleWith3Items = () =>(
    <Toggle
        values={[{ value: '1', id: '1' }, { value: '2', id: '2' }, { value: '3', id: '3' }]}
    ></Toggle>
);
export const ToggleWith1Item = () =>(
    <Toggle
        values={[{ value: '1', id: '1' }]}
    ></Toggle>
);

export const ToggleWithLongText = () =>(
    <Toggle
        values={[{ value: 'asd asdasd asdasdasd', id: '1' }, { value: 'qwe qweqweqwe qweqwe', id: '2' }]}
    ></Toggle>
);

export const ToggleNoText = () =>(
    <Toggle
        values={[{ value: '', id: 'filterValue1' }, { value: '', id: 'filterValue2' }]}
    ></Toggle>
);
