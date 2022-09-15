const Manager = require("../lib/Manager.js");

test("get managers role", () => {
    const manager = new Manager("joe", 33, "email@email.com", 2);
    expect(manager.getRole()).toBe("Manager");
});

test("get managers office Number", () => {
    const manager = new Manager("joe", 33, "email@email.com", 2);
    expect(manager.getOfficeNumber()).toBe(2);
})