import React, { useState, useEffect, useContext } from 'react';
import { Field } from '../../components/field';
import { Context } from '../../context';

interface IProps {
    data: Array<any>
}

export const Segment: React.FC<IProps> = ({data}) => {
    const rule = useContext(Context);
    const [state, setState] = useState(data);

    useEffect(() => {
        let newData = data;
        
        if (rule !== 'admin') {
            newData = data.filter( i => i.access.hasOwnProperty(rule)).map( i => {

                if (Object.values(i.access).includes('change')) {
                    i.disabled = false;
                } else {
                    i.disabled = true;
                }
                
                return i;
            })
        } else {
            newData = data.map( i => ({...i, disabled: false}))
        }

        setState(newData);

    }, [rule]);

    return (
        <div className="list-group">
            { state.map(item => <Field key={item.name} {...item}/>) }
        </div>
    )
}