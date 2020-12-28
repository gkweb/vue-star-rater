export const normalExample = `<StarRate v-model="currentRating"/>` as string;

export const customColoursExample = `<StarRate
  v-model="currentRating"
  :colours="{
    activeColour: 'darkgreen',
    hoverColour: 'green',
    inactiveColour: '#333'
  }"
/>` as string;
