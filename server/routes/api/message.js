const express = require('express');
const {
  getMsgs,
  addMsg,
  deleteMsg
} = require('../../controller/msgsController');

const router = express.Router();

router
  .route('/')
  .get(getMsgs)
  .post(addMsg);

router.route('/:id').delete(deleteMsg);

module.exports = router;
