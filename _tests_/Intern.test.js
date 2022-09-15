const Intern = require("../lib/Intern.js");

test("get interns role", () => {
    const intern = new Intern("joe", 33, "email@email.com", "KSU");
    expect(intern.getRole()).toBe("Intern");
})

test("get interns school", () => {
    const intern = new Intern("joe", 33, "email@email.com", "KSU");
    expect(intern.getSchool()).toBe("KSU");
})