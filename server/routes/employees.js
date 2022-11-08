const pool = require("../db");

const
    express = require("express"),
    router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, salary, profilephoto } = req.body;
        const newEmployee = await pool.query(
            "INSERT INTO employee (name, salary, profilephoto) VALUES($1, $2, $3) RETURNING *",
            [name, salary, profilephoto]
        );
        res.json(newEmployee.rows);
    } catch (err) {
        console.error(err.message);
    }
});

router.get("/", async (req, res) => {
    try {
        const allEmployees = await pool.query("SELECT * FROM employee ORDER BY _id");
        res.json(allEmployees.rows);
    } catch (err) {
        console.error(err.message);
    }
});

router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const todo = await pool.query("SELECT * FROM employee WHERE _id = $1", [_id]);
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

router.patch("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const { name, salary, profilephoto } = req.body;
        const todo = await pool.query("UPDATE employee SET name = $1, salary = $2, profilephoto=$3 WHERE _id = $4 RETURNING *", [name, salary, profilephoto, _id]);
        res.json(todo.rows);
    } catch (err) {
        console.error(err.message);
    }
})

router.delete("/:_id", async (req, res) => {
    try {
        const { _id } = req.params; 
        await pool.query("DELETE FROM employee WHERE _id = $1", [_id]);
        res.json("Employee Deleted");
    } catch (err) {
        console.error(err.message);
    }
})

module.exports = router;
