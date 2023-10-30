const { isInvalidEmail, isEmptyPayload } = require('./validator')

test('valid email', function() {
          const testPayload = {
                    name: "John Doe",
                    email: "test.email@example.com",
                    interest: "testng"
          }
          const result = isInvalidEmail(testPayload)
          expect(result).toBe(false)
})

test('invalid email', function() {
          const testPayload = {
                    name: "John Doe",
                    email: "test.email",
                    interest: "testng"
          }
          const result = isInvalidEmail(testPayload)
          expect(result).toBe(true)
})

test('empty payload', function() {
          const testPayload = {}
          const result = isEmptyPayload(testPayload)
          expect(result).toBe(true)
})

test('non-empty payload', function() {
          const testPayload = {
                    name: "test name", 
                    email: "test.email@example.com",
                    interest: "testng"
          }
          const result = isEmptyPayload(testPayload)
          expect(result).toBe(false)
})