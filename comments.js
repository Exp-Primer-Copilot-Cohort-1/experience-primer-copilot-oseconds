// Create web server 한글로 제안 별 간단한 설명도 해줘
// Create web server 한글로 제안 별 간단한 설명도 해줘
// Create web server 한글로 제안 별 간단한 설명도 해줘
// Create web server 한글로 제안 별 간단한 설명도 해줘
// Create web server 한글로 제안 별 간단한 설명도 해줘
// Create web server 한글로 제안 별 간단한 설명도 해줘
// Create web server 한글로 제안 별 간단한 설명도 해줘

const express = require('express');
const router = express.Router();
const Comment = require('../schemas/comment');

// 댓글 조회
router.get('/:id', async (req, res, next) => {
  try {
    const comments = await Comment.find({ commenter: req.params.id }).populate('commenter', 'name');
    res.json(comments);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 댓글 작성
router.post('/', async (req, res, next) => {
  try {
    const comment = await Comment.create({
      commenter: req.body.id,
      comment: req.body.comment,
    });
    console.log(comment);
    const result = await Comment.populate(comment, { path: 'commenter', select: 'name' });
    res.status(201).json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 댓글 수정
router.patch('/:id', async (req, res, next) => {
  try {
    const result = await Comment.update({ _id: req.params.id }, { comment: req.body.comment });
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

// 댓글 삭제
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await Comment.remove({ _id: req.params.id });
    res.json(result);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;