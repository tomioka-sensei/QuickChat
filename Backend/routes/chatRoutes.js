const express =  require('express');
const accessChat = require('../controllers/chatController');
const { protect } = require('../middleware/authmiddleware');
const router = express.Router();

router.route('/').post(protect, accessChat);

router.route('/').post(protect, accessChat.fetchChats);

router.route('/group').post(protect , accessChat.createGroupChat );

router.route('/rename').put(protect,accessChat.renameGroup);

router.route('/groupremove').put(protect , accessChat.removeFromGroup);

router.route('/groupadd').put(protect ,accessChat.addToGroup )

module.exports = router;
