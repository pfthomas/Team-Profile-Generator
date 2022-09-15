const Employee = require("../lib/Employee.js");

test("Creates an employee object and can get all of the employee parameters", () =>{
    const employee = new Employee("joe", 33, "email@email.com");
    expect(typeof employee).toBe("object");
});

test("get employee name", () => {
    const employee = new Employee("joe", 33, "email@email.com");
    expect(employee.getName()).toBe("joe");
});

test("get employee id", () => {
    const employee = new Employee("joe", 33, "email@email.com");
    expect(employee.getId()).toBe(33);
})

test("get employee role", () => {
    const employee = new Employee("joe", 33, "email@email.com");
    expect(employee.getRole()).toBe("Employee");
})