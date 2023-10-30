const { default: test } = require('node:test')
const app = require('../server')
const request = require('supertest')
const exp = require('constants')

test("test request with valid payload", function() {
          const testPayload = {
                    name: "test name",
                    email: "test.email@example.com",
                    interest: "testng"
          }
          const response = request(app)
                    .post('/update-profile')
                    .send(testPayload)

          expect(response.statusCode).toBe(200)
          expect(response.body).toHaveProperty("info")
          expect(response.body.info).toBe("profile updated")