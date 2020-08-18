const MESSAGE = require('../modal/MessagesModal');

// @Method GET
// @desc   Get All msgs
// @access Public
exports.getMsgs = async (req, res) => {
  try {
    const msgs = await MESSAGE.find();
    res.status(200).json({ success: true, data: msgs });
  } catch (error) {
    res.status(500).json({ success: false, err: error });
  }
};

// @Method POST
// @desc   Add one msg
// @access Public
exports.addMsg = async (req, res) => {
  const { name, message } = req.body;

  const newMsg = new MESSAGE();
  newMsg.name = name === '' ? 'Anonymous' : name.toString();
  newMsg.message = message.toString();
  try {
    const msg = await newMsg.save();
    res.status(201).json({ success: true, data: msg });
  } catch (error) {
    res.status(500).json({ success: false, err: error });
  }
};

// @Method DELETE
// @desc   Delete one msg
// @access Public
exports.deleteMsg = async (req, res) => {
  const id = req.params.id;
  try {
    const delItem = await MESSAGE.deleteOne({ _id: id });
    console.log(delItem);
    res.status(201).json({ success: true, data: `successfully deleted` });
  } catch (error) {
    res.status(500).json({ success: false, err: error });
  }
};
