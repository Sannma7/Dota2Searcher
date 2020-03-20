import itemList from "../data/item.json";

export const itemFilter = (keyWord: string) => {
    return itemList.filter(
        (item) => {
            if (
                item.localized_name.toLowerCase().includes(keyWord.toLowerCase()) &&
                !(item.recipe === 1 && item.cost === 0)
                ) {
                return true;
            }
            return false;
        }
    )
};