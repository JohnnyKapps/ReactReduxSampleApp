export const selectWeight = (weight) => {
    console.log("Voce clicou em:", weight.value);

    return {
        type: "WEIGHT_SELECTED",
        payload: weight
    }
}