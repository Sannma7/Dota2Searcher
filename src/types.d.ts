export interface item {
    "id": number,
    "name": string,
    "cost": number,
    "secret_shop": boolean,
    "side_shop": boolean,
    "recipe": boolean,
    "localized_name": string,
    "url_image": string
}

export interface hero {
    "name": string,
    "id": number,
    "localized_name": string,
    "url_small_portrait": string,
    "url_large_portrait": string,
    "url_full_portrait": string,
    "url_vertical_portrait": string
}