const name = document.getElementById("name");
const credit = document.getElementById("credit");
const instructor = document.getElementById("instructor");
const room = document.getElementById("room");
const result = document.getElementById("result");
const done = document.getElementById("done");

class Course {
  constructor(name, credit, instructor, room) {
    this.name = name;
    this.credit = credit;
    this.instructor = instructor;
    this.room = room;
  }
}

done.addEventListener("click", construct);

function construct() {
  const course = new Course(
    name.value,
    credit.value,
    instructor.value,
    room.value
  );
  result.innerHTML = `<div class="course">
  <p>Name: ${course.name}</p>
  <p>Credits:${course.credit}</p>
  <p>Instructor:${course.instructor}</p>
  <p>Room:${course.room}</p>
  </div>`;
  console.log(course);
}
