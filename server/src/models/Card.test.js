const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Card = require("./Card");
const db = require("../db/config");


let card;

// clear db and create new card before tests 
beforeAll(async () => {
    await db.sync({ force: true })
    card = await Card.create({ name: "Card1", mojo: 100, stamina: 250, imgURL:"testIMG"})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
    it('has an id', async () => {
      expect(card).toHaveProperty('id')
    })
  
    it('has a name', async () => {
      expect(card).toHaveProperty('name')
    })

    it('has mojo', async () => {
        expect(card).toHaveProperty('mojo')
    })

    it('has stamina', async () => {
        expect(card).toHaveProperty('stamina')
    })

    it('has an ImgURL', async () => {
        expect(card).toHaveProperty('imgURL')
    })
  
    it("name matches input", async () => {
      expect(card.name).toBe("Card1")
    })

    it("mojo matches input", async () => {
      expect(card.mojo).toBe(100)
    })

    it("stamina matches input", async () => {
        expect(card.stamina).toBe(250)
    })

    it("imgURL matches input", async () => {
        expect(card.imgURL).toBe("testIMG")
    })
  })
  