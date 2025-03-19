export function makePerson(name: string, age: number) {
  return {name: name, age: age};
}

export function testMakePerson() {
  console.log(
    makePerson('둘리', 10),
    makePerson('마이콜', 20)
  )
}