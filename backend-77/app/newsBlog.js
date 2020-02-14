const express = require('express');
const multer = require('multer');
const path = require('path');
const config = require('../config');
const nanoid = require('nanoid');
const fileDb = require("../fileDb");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname));
    }
});

const upload = multer({storage});

const router = express.Router();

router.get('/', async (req, res) => {
    const threads = await fileDb.getThreads();
    console.log(threads)
    res.send(threads);
});

router.post('/', upload.single('image'), async (req, res) => {
    const comment = req.body;
    if (!comment.message) {
        res.status(400).send('Message field required !')
    } else {
        comment.id = nanoid();
        if (req.file) {
            comment.image = req.file.filename;
        }
       await fileDb.addThread(comment);
        res.send(comment);
    }
});

module.exports = router;