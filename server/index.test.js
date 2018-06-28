import supertest from 'supertest';
import iconv from 'iconv-lite';
import encodings from 'iconv-lite/encodings';
import { Sequelize } from '../db/index';
import { app, server } from './index';

iconv.encodings = encodings;

test('hello world', () => {
  supertest(app)
    .get('/')
    .expect(200)
    .set('Accept', 'text/html')
    .then((res) => {
      expect(res.text.includes('<html>')).toEqual(true);
    });
});

afterAll(() => {
  Sequelize.close();
});

server.close();