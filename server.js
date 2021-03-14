import { createServer } from 'miragejs';

export default function CreateServer() {
  createServer({
    routes() {
      this.get('/api/foods', () => {
        return {
          foods: [
            {id: 1, name: 'Chicken Sate', price: '5.00', description: 'lorem ipsum dolor sit amet'},
            {id: 2, name: 'Mediterranian Veggie Pizza', price: '7.50', description: 'lorem ipsum dolor sit amet'},
            {id: 3, name: 'Pho with beef', price: '5.00', description: 'lorem ipsum dolor sit amet'},
          ]
        }
      })
    }
  });
}
