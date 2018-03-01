import Rust from '../Cargo.toml';

let person = Rust.make_person("test_name", 1);
document.getElementById("name").innerText = person.name;
document.getElementById("age").innerText = person.age;