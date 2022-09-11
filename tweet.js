import rwClient from "./twtterClient.js";

const tweet = async () => {
  try {
    await rwClient.v2.tweet("good afternoon again and again");
  } catch (error) {
    console.log(error);
  }
};

export default tweet;
