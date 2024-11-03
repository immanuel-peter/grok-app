import { Message } from '../types/chat';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_XAI_API_KEY,
  baseURL: 'https://api.x.ai/v1',
  dangerouslyAllowBrowser: true
});

export const sendMessage = async (messages: Message[]): Promise<string> => {
  const completion = await openai.chat.completions.create({
    model: 'grok-beta',
    messages,
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const content = completion.choices[0].message.content;
      if (content !== null) {
        resolve(content);
      } else {
        reject(new Error('No content received in response.'));
      }
    }, 1000);
  });
};