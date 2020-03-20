import React from 'react';
import { SingleItem } from './SingleItem';
import './SearchResults.css';

interface Props {
    items: object
}

export const SearchResults = (props: Props) => {

    console.log(props.items);
    const rows = []
    for (let item of Object.values(props.items)) {
        console.log(item);
        rows.push(
            <SingleItem
                id={item.id}
                name={item.localized_name}
                cost={item.cost}
                secret_shop={item.secret_shop}
                side_shop={item.side_shop}
                recipe={item.recipe}
                localized_name={item.name}
                url_image={item.url_image}
            />
        );
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>cost</th>
                    <th>secret_shop</th>
                    <th>side_shop</th>
                    <th>recipe</th>
                    <th>image</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
};
