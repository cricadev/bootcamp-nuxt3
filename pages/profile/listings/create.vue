<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl mt-2">Create a New Listing</h1>
      {{ info.make }}
      {{ info.model }}
      {{ info.year }}
      {{ info.miles }}
      {{ info.price }}
      {{ info.city }}
      {{ info.seats }}
      {{ info.description }}
      {{ info.image }}
      {{ info.features }}
    </div>

    <div class="shadow rounded p-3 mt-4 flex flex-wrap justify-between">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      ></CarAdSelect>
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      ></CarAdInput>
      <CarAdTextArea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      ></CarAdTextArea>
      <CarAdImage @change-input="onChangeInput"></CarAdImage>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "custom",
});
const { makes } = useCars();

const info = useState("adInfo", () => {
  return {
    make: "",
    model: "",
    year: "",
    miles: "",
    price: "",
    city: "",
    seats: "",
    description: "",
    image: null,
    features: [],
  };
});

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "Price *",
    name: "price",
    placeholder: "10000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "New York",
  },
  {
    id: 6,
    title: "Seats *",
    name: "seats",
    placeholder: "5",
  },

  {
    id: 8,
    title: "Image *",
    name: "image",
    placeholder: "Image",
  },
  {
    id: 9,
    title: "Features *",
    name: "features",
    placeholder: "Features",
  },
];
</script>
