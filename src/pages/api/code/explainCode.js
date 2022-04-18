// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Configuration, OpenAIApi } = require('openai');
const OPENAI_KEY = process.env.OPENAI_API_KEY;

/**
 * Requests OpenAI API to get a code explanation
 * @param {string} code
 * @returns explanation for code
 */
const getExplanationFromOpenAI = async (code) => {
  const configuration = new Configuration({
    apiKey: OPENAI_KEY,
  });

  const openai = new OpenAIApi(configuration);
  try {
    const codeWithPrompt = `${code}n"""\nHere\'s what the above class is doing:\n1.`;

    const response = await openai.createCompletion('text-davinci-002', {
      prompt: codeWithPrompt,
      temperature: 0,
      max_tokens: 500,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ['"""'],
    });

    console.log('response', response);
    const { data } = response;
    console.log('data', data);
    return data;
  } catch (error) {
    console.log('error in ai', error.response);
    return null;
  }
};

const handleError = (err) => {
  res.send({
    status: 500,
    message: err.message,
  });
};

export default async function handler(req, res) {
  try {
    const {
      body: { input },
    } = req;
    const explanation = await getExplanationFromOpenAI(input);
    console.log('explanation', explanation);
    if (!explanation) handleError(new Error('No response from OpenAI.'));

    res.send({
      status: 200,
      data: explanation,
    });
  } catch (error) {
    // console.log('error', error);
    console.log('error.data', error.data);
    res.send({ status: 500, message: error.message });
  }
}
