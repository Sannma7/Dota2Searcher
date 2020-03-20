import heroList from "../data/hero.json";

export const heroFilter = (keyWord: string) => {
    return heroList.filter(
        (hero) => {
            if (
                hero.localized_name.toLowerCase().includes(keyWord.toLowerCase())
            ) {
                return true;
            }
            return false;
        }
    )
};