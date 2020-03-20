import React from 'react';
import { hero } from '../types';

export const SingleHero = (props: hero) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td><img src={props.url_small_portrait} alt="small_portrait" /></td>
            <td>{props.localized_name}</td>
        </tr>
    )
};