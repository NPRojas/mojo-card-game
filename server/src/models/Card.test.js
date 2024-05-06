const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require("./Card");
const db = require("../db/config");


let card;

// clear db and create new card before tests 
beforeAll(async () => {
    await db.sync({ force: true })
    card = await card.create({ name: "card1", mojo: 100, stamina: 250, imgURL:"testImg"})
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
    it('has an id', async () => {
      expect(Card).toHaveProperty('id')
    })
  
    it('has a name', async () => {
      expect(Card).toHaveProperty('name')
    })

    it('has mojo', async () => {
        expect(Card).toHaveProperty('mojo')
    })

    it('has stamina', async () => {
        expect(Card).toHaveProperty('stamina')
    })

    it('has an ImgURL', async () => {
        expect(Card).toHaveProperty('imgURL')
    })
  
    it("name matches input", async () => {
      expect(Card.name).toBe("Card1")
    })

    it("mojo matches input", async () => {
      expect(Card.mojo).toBe(100)
    })

    it("stamina matches input", async () => {
        expect(Card.stamina).toBe(250)
    })

    it("imgURL matches input", async () => {
        expect(Card.imgURL).toBe("testIMG")
    })
  })
  