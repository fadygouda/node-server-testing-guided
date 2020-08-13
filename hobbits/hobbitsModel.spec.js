const db = require('../data/dbConfig.js');
const Hobbits = require('./hobbitsModel.js');

describe('hobbits model', () => {
    describe('insert', () => {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })
        it('should insert the provided hobbits into the db', async () => {
            await Hobbits.insert({name: 'fady'});
            await Hobbits.insert({name: 'brother'});

            const hobbits = await db('hobbits');
            expect(hobbits).toHaveLength(2);
        });

        it('should return the hobbit we inserted', async () => {
            let hobbit = await Hobbits.insert({name:'eddy'});
            expect(hobbit.name).toBe('eddy');

            hobbit = await Hobbits.insert({name: "gouda"});
            expect (hobbit.name).toBe('gouda');
        });

        it('is pointless', ()=> {
            expect(true).toBe(true);
        })
    })
})