import axios from "axios";
import { useEffect, useState } from "react";

function StudentCrud() {
  const [id, setId] = useState("");
  const [stname, setName] = useState("");
  const [stemail, setEmail] = useState("");
  const [stphone, setPhoneno] = useState("");
  const [course, setCourse] = useState("");
  const [students, setUsers] = useState([]);

  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
    const result = await axios.get(
      "https://localhost:7298/api/Student/GetStudent"
    );
    setUsers(result.data);
    console.log(result.data);
  }

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("https://localhost:7298/api/Student/AddStudent/", {
        studentName: stname,
        studentEmail: stemail,
        studentPhoneNumber: stphone,
        course: course,
      });
      alert("Student Registation Successfully");

      setId("");
      setName("");
      setEmail("");
      setPhoneno("");
      setCourse("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  async function editStudent(student) {
    setName(student.studentName);
    setEmail(student.studentEmail);
    setPhoneno(student.studentPhoneNumber);
    setCourse(student.course);

    setId(student.id);
  }

  async function DeleteStudent(id) {
    await axios.delete(
      "https://localhost:7298/api/Student/DeleteStudent/" + id + "/"
    );
    alert("Employee deleted Successfully");
    setId("");
    setName("");
    setEmail("");
    setPhoneno("");
    setCourse("");
    Load();
  }

  async function update(event) {
    event.preventDefault();
    try {
      await axios.patch(
        "https://localhost:7298/api/Student/UpdateStudent/" + id + "/",
        {
          id: id,
          studentName: stname,
          studentEmail: stemail,
          studentPhoneNumber: stphone,
          course: course,
        }
      );
      alert("Registation Updateddddd");
      setId("");
      setName("");
      setEmail("");
      setPhoneno("");
      setCourse("");

      Load();
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div>
      <h1>Student Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />

            <label>Student Name</label>
            <input
              type="text"
              class="form-control"
              id="stname"
              value={stname}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Student Email</label>
            <input
              type="text"
              class="form-control"
              id="stemail"
              value={stemail}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Student Phone No:</label>
            <input
              type="text"
              class="form-control"
              id="stphone"
              value={stphone}
              onChange={(event) => {
                setPhoneno(event.target.value);
              }}
            />
          </div>

          <div class="form-group">
            <label>Course</label>
            <input
              type="text"
              class="form-control"
              id="course"
              value={course}
              onChange={(event) => {
                setCourse(event.target.value);
              }}
            />
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <h1 align="center" style={{ color: "#0dcaf0", background: "black" }}>
        Student Information
      </h1>

      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Student Id:</th>
            <th scope="col">Student Name:</th>
            <th scope="col">Student Email:</th>
            <th scope="col">Student Phone No:</th>
            <th scope="col">Course:</th>

            <th scope="col">Option</th>
          </tr>
        </thead>
        {students.map(function fn(student) {
          return (
            <tbody>
              <tr>
                <th scope="row">{student.id} </th>
                <td>{student.studentName}</td>
                <td>{student.studentEmail}</td>
                <td>{student.studentPhoneNumber}</td>
                <td>{student.course}</td>

                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editStudent(student)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default StudentCrud;
