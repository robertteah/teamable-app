const { isInvalidEmail } = require('./validator')

test('valid email', function() {
          const testPayload = {
                    name: "John Doe",
                    email: "test.email@example.com",
                    interest: "testng"
          }
          const result = isInvalidEmail(testPayload)
          expect(result).toBe(false)          