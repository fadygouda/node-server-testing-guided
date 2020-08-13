const request = require('supertest')
const server = require('./server.js');

describe('server.js', () => {
    test('that the testing environment is set up', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should return 200 ok', () => {
            return request(server).get('/')
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it('should return 200 ok using async/await', async () => {
            const res = await request(server).get('/');
            expect(res.status).toBe(200);
        });

        it('should return a JSON object', async () => {
            const res = await request(server).get('/');
                expect(res.type).toBe('application/json');
        });

        it('should return { api: "up" }', async () => {
            const res = await request(server).get('/');
            expect(res.body).toEqual({ api: "up" });
        })
        
        
    });
});