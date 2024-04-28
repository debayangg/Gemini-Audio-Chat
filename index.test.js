const app = require('./index');
const request = require('supertest');


describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
}
);

describe('Test the post path', () => {
  test('It should response the POST method', async () => {
    const response = await request(app).post('/post').
    send({text: "Hello, how are you?"}
    );
    expect(response.statusCode).toBe(200);
  }, 10000);
}
);

afterAll(() => {
  app.closeServer();
});