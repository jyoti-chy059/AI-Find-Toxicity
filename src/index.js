import * as toxicity from "@tensorflow-models/toxicity";

const threshold = 0.5;

toxicity.load(threshold).then((model) => {
  const sentences = [
    "You are a poopy head!",
    "I like turtles",
    "Shut up!",
    "Are u nuts",
    "u are cunt",
    "I will kill you",
  ];

  model.classify(sentences).then((predictions) => {
    console.log(JSON.stringify(predictions, null, 2));
  });
});
