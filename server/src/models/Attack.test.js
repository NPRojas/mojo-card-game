const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require("./Attack");
const db = require("../db/config");

// define instance in the global scope
let Attack;

// clear db and create new Attack before tests 
beforeAll(async () => {
    await db.sync({ force: true })
    Attack = await Attack.create({ title: "Swing", mojoCost: 23, staminaCost: 12 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Attack', () => {
    it('has an id', async () => {
      expect(Attack).toHaveProperty('id')
    })
  
    it('has a title', async () => {
      expect(Attack).toHaveProperty('title')
    })

    it('has mojo cost', async () => {
        expect(Attack).toHaveProperty('mojoCost')
      })
  
    it("title matches input", async () => {
      expect(Attack.title).toBe("Swing")
    })

    it("mojo cost matches input", async () => {
        expect(Attack.mojoCost).toBe(23)
    })

    it("stamina cost matches input", async () => {
        expect(Attack.staminaCost).toBe(12)
    })
  })
  