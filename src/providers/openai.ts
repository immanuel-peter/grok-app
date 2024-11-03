import { AIProvider, Message } from '../types/chat';

export const openAIProvider: AIProvider = {
  name: 'OpenAI',
  sendMessage: async (messages: Message[]) => {
    // Replace with actual OpenAI API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('This is a mock response. Replace this with actual OpenAI API integration.');
      }, 1000);
    });
  },
};