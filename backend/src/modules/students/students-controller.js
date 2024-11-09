const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    const payload = req.params;
    const studentsList = await getAllStudents(payload)
    return res.json({students: studentsList})
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    const { id: authorId } = req.user;
    const payload = req.body;
    const newStudent = addNewStudent({ ...payload, authorId })
    res.json(newStudent);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    const { id } = req.params;
    const payload = req.body;
    const student = updateStudent({ ...payload, id })
    res.json(student);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    const { id } = req.params;
    const payload = req.body;
    const student = getStudentDetail({ ...payload, id })
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    const { id: currentUserId } = req.user;
    const { id: studentId  } = req.params;
    const { status } = req.body;
    const payload = { studentId, currentUserId, status  };
    const student = await setStudentStatus(payload);
    res.json(student);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
