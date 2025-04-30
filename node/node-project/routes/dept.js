const express = require('express');
const router = express.Router();

let depts = [
  {
    id: 10,
    department: "인사"
  },
  {
    id: 20,
    department: "총무"
  }
]

router.get("", (req, res) => res.send(depts));
router.post("", (req, res) => { depts.push(req.body); res.send(depts); });

router.get("/:id", (req, res) => res.send(depts.find(e => e.id == req.params.id)));
router.put("/:id", (req, res) => {
  let idx = depts.findIndex(e => e.id == req.params.id);
  if (idx >= 0) {
    depts.splice(
      idx,
      1,
      req.body
    );
    res.send(depts);
  }
  else {
    res.send("그런 부서 없는데용?");
  }
});
router.delete("/:id", (req, res) => {
  depts.splice(
    depts.findIndex(e => e.id == req.params.id),
    1
  );
  res.send(depts);
});

module.exports = router;