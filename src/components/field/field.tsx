import * as React from 'react'; 
import { Segment } from '../../containers/segment';

interface IProps {
    name: string,
    type: string,
    required: boolean,
    placeholder: string | undefined,
    fields?: Array<object>,
    disabled: boolean
}

export const Field: React.FC<IProps> = ({type, name, required, placeholder, disabled, fields}: IProps) => {
    return (
        <div className="list-group-item">
            <input name={name} type={type} placeholder={placeholder} required={required} disabled={disabled}/>
            {fields ? <Segment data={fields}/> : null}
        </div>
    )
}