import { addDoc, collection } from 'firebase/firestore';
import { db } from '../lib/firebase';

const COLLECTION_NAME = 'newsletter_subscribers';

export const newsletterService = {
  subscribe: async (email: string): Promise<void> => {
    try {
      await addDoc(collection(db, COLLECTION_NAME), {
        email,
        subscribedAt: new Date()
      });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      throw new Error('Failed to subscribe. Please try again later.');
    }
  }
};