import React from 'react';
import { SingleItem } from './SingleItem';
import { SingleHero } from './SingleHero';
import './SearchResults.css'

interface Props {
    results: object
    mode: string
}

export const SearchResults = (props: Props) => {

    const rows = [];
    let head;

    if (props.mode === "item") {
        for (let item of Object.values(props.results)) {
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
        };
        head = (
            <tr>
                <th>id</th>
                <th>name</th>
                <th>cost</th>
                <th>secret_shop</th>
                <th>side_shop</th>
                <th>recipe</th>
                <th>image</th>
                <th>code</th>
            </tr>
        );
    }

    if (props.mode === "hero") {
        for (let hero of Object.values(props.results)) {
            console.log(hero);
            rows.push(
                <SingleHero
                    id={hero.id}
                    name={hero.localized_name}
                    localized_name={hero.name}
                    url_small_portrait={hero.url_small_portrait}
                />
            );
        };
        head = (
            <tr>
                <th>id</th>
                <th>name</th>
                <th>portrait</th>
                <th>code</th>
            </tr>
        );
    }

    return (
        <table>
            <thead>
                {head}
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
};
