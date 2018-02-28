import Rust from '../Cargo.toml';

let person = Rust.make_person("test_name", 1);
console.log(Rust.option_test("some"));
console.log(Rust.option_test("none"));
document.getElementById("name").innerText = person.name;
document.getElementById("age").innerText = person.age;

// Threads are not available
// Rust.threads();