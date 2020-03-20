import React from 'react';
import { item } from '../types';

export const SingleItem = (props: item) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.cost}</td>
            <td>{props.secret_shop}</td>
            <td>{props.side_shop}</td>
            <td>{props.recipe}</td>
            <td><img src={props.url_image} alt = {props.name}/></td>
            <td>{props.localized_name}</td>
        </tr>
    )
};
