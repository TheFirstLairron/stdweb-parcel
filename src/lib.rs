#![feature(proc_macro)]

#[macro_use]
extern crate stdweb;

#[macro_use]
extern crate serde_derive;

extern crate serde;

use stdweb::{js_deserializable, js_export, js_serializable};

#[derive(Serialize, Deserialize)]
struct Person {
    name: String,
    age: i32,
}

js_serializable!(Person);
js_deserializable!(Person);

#[js_export]
fn make_person(name: String, age: i32) -> Person {
    Person { name, age }
}
