const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Attack = require("./Attack");
const db = require("../db/config");

// define instance in the global scope
let attack;

// clear db and create new Attack before tests 
beforeAll(async () => {
    await db.sync({ force: true })
    attack = await Attack.create({ title: "Swing", mojoCost: 23, staminaCost: 12 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
    it('has an id', async () => {
      expect(attack).toHaveProperty('id')
    })
  
    it('has a title', async () => {
      expect(attack).toHaveProperty('title')
    })

    it('has mojo cost', async () => {
        expect(attack).toHaveProperty('mojoCost')
      })
  
    it("title matches input", async () => {
      expect(attack.title).toBe("Swing")
    })

    it("mojo cost matches input", async () => {
        expect(attack.mojoCost).toBe(23)
    })

    it("stamina cost matches input", async () => {
        expect(attack.staminaCost).toBe(12)
    })
  })
  