const Engineer = require("../lib/Engineer.js");

test("Can set github", () => {
    const githubTest = "Github";
    const engineer = new Engineer("joe", 33, "email@email.com", githubTest);
    expect(engineer.github).toEqual(githubTest);
})

test("get engineers role", () => {
    const engineer = new Engineer("joe", 33, "email@email.com", "github");
    expect(engineer.getRole()).toBe("Engineer");
}); 

test("get engineers github", () => {
    const engineer = new Engineer("joe", 33, "email@email.com", "github");
    expect(engineer.getGithub()).toBe("github");
})