<template>
  <h1 class="title">Vue Star Rater</h1>
  <star-rate v-model="currentRating" :maxAmount="10">
    <template #rating-text="{modelValue, maxAmount}">
      <strong
        >2,555 users have voted this component {{ modelValue }} /
        {{ maxAmount }} Stars.</strong
      >
    </template>
  </star-rate>

  <p class="description">
    Vue star rater is a minimal and highly composable star rating component.
    Built with Vue 3 composition API and Typescript under the hood - It's a
    really small component.
  </p>

  <section class="description">
    <h4 class="features-title">Features:</h4>
    <ul class="features">
      <li>
        <span class="round"></span>No style opinions! Add your own icon and also
        customise the text
      </li>
      <li>
        <span class="round"></span>Set maximum star count to whatever maximum
        you want
      </li>
      <li>
        <span class="round"></span>Scoped slot available to customise star text
      </li>
      <li>
        <span class="round"></span>Scoped slot available for star icon
        customisation
      </li>
      <li>
        <span class="round"></span>Specify star hover, active, and inactive
        colours as props
      </li>
      <li>
        <span class="round"></span>2 events emitted: First rate and also every
        rate
      </li>
    </ul>
  </section>

  <ExampleContainer nocontent>
    <template #title>
      Installation
    </template>
    <template #example>
      <CodeExample :modelValue="'npm i -s vue-star-rater'" />
    </template>
  </ExampleContainer>

  <ExampleContainer nocontent>
    <template #title>
      Import into your project
    </template>
    <template #example>
      <CodeExample
        :modelValue="`import StarRate from 'vue-star-rater';`"
      />
    </template>
  </ExampleContainer>

  <h1 class="title">Examples</h1>

  <ExampleContainer>
    <template #title>
      Default with only v-model
    </template>
    <template #content>
      <StarRate v-model="exampleModels.normal" />
    </template>
    <template #example>
      <CodeExample :modelValue="examples.normalExample" />
    </template>
  </ExampleContainer>
  <ExampleContainer>
    <template #title>
      Colour variables set in props
    </template>
    <template #content>
      <StarRate
        v-model="exampleModels.colours"
        :colours="{
          activeColour: 'darkgreen',
          hoverColour: 'green',
          inactiveColour: '#333'
        }"
      />
    </template>

    <template #example>
      <CodeExample :modelValue="examples.customColoursExample" />
    </template>
  </ExampleContainer>

  <div>
    TODO: Custom icon component
  </div>
  <div>
    TODO: Emitted events information
  </div>
  <div>
    TODO: Handling vote cast / Thankyou message example
  </div>
  <div>
    TODO: Build in animation on voting
  </div>
  <div>
    TODO: Build half star vote capability
  </div>

  <div>
    More examples coming soon. Made with 💜 + ☕️ in Melbourne, Australia.
    <a href="https://gladekettle.com.au">Glade Kettle</a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import StarRate from "vue-star-rater";
import ExampleContainer from "./components/ExampleContainer.vue";
import CodeExample from "./components/CodeExample.vue";
import { normalExample, customColoursExample } from "./example-data/";

export default defineComponent({
  name: "App",
  components: {
    ExampleContainer,
    CodeExample,
    StarRate,
  },
  setup() {
    const currentRating = ref(9);
    const examples = reactive({
      normalExample,
      customColoursExample
    });

    const exampleModels = reactive({
      normal: 0,
      colours: 2
    });

    return {
      currentRating,
      examples,
      exampleModels
    };
  }
});
</script>

<style scoped>
#app:before {
  content: "";
  clear: both;
  display: block;
}

.title {
  font-size: 3rem;
  margin: 0 0 1rem;
}

.description {
  max-width: 40rem;
  margin: 1rem auto;
}

.features {
  display: grid;
  align-items: center;
  padding: 0;
  margin: 0 auto 0.75rem;
  row-gap: 0.75rem;
  max-width: 45rem;
}

.features > li {
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  grid-column-gap: 0.5rem;
}

.features > li > .round {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: currentColor;
}

.features-title {
  margin: 0 0 1rem;
}

.example-container {
  margin-bottom: 1rem;
}

.example-container__description {
}
</style>
