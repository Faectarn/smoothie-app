import { shuffle, take } from "lodash-es";

const ingredients = [
    "Banana",
    "Mango",
    "Yogurt",
    "Sorbet",
    "Silken tofu",
    "Nut butters",
    "Avocado",
    "Bananas",
    "Pineapple",
    "Strawberries",
    "Blueberries",
    "Raspberries",
    "Blackberries",
    "Cherries",
    "Peaches",
    "Cantaloupe",
    "Watermelon",
    "Pomegranate seeds",
    "Kiwi",
    "Acai berries",
];

const button = document.querySelector("button");
const ul = document.querySelector("ul");

function shuffleAndRender() {

    const shuffledIngredients = shuffle(ingredients);
    const fiveIngredients = take(shuffledIngredients, 5);

    fiveIngredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ul.append(li);
    })
}

button.addEventListener("click", () => {
    console.log("Yay shuffle");

    ul.textContent = null;

    shuffleAndRender();

});