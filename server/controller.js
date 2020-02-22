const db = require('../database/index.js');

module.exports = {
  getReviews: (req, res) => {
    const { id } = req.params;
    db.readAllReviews(id, (err, reviews) => {
      if (err) {
        res.status(500).end();
      } else {
        res.send(reviews);
      }
    });
  },
  postReview: (req, res) => {
    db.addReview(req, (err, results) => {
      if (err) {
        console.log('controller error: postReview');
        res.status(500);
      } else {
        res.status(201).end();
      }
    });
  },
  patchReview: (req, res) => {
    db.updateReview(req, (err, results) => {
      if (err) {
        console.log('controller error: patchReview');
        res.status(500);
      } else {
        res.status(200).end();
      }
    });
  },
  deleteReview: (req, res) => {
    db.deleteReview(req, (err, results) => {
      if (err) {
        console.log('controller error: deleteReview');
        res.status(500);
      } else {
        res.status(200).end();
      }
    });
  },
  postUser: (req, res) => {
    db.createUser(req, (err, results) => {
      if (err) {
        console.log('controller error: postUser');
        res.status(500);
      } else {
        res.status(201).end();
      }
    });
  },
  patchUser: (req, res) => {
    db.updateUser(req, (err, results) => {
      if (err) {
        console.log('controller error: patchUser');
        res.status(500);
      } else {
        res.status(200).end();
      }
    });
  },
  // deleteUser: (req, res) => {
  //   const { id } = req.params;
  //   db.deleteUser(id, (err, results) => {
  //     if (err) {
  //       console.log('controller error: deleteUser');
  //       res.status(500);
  //     } else {
  //       res.status(201);
  //     }
  //   });
  // },
  deleteReviewPhoto: (req, res) => {
    db.deletePhoto(req, (err, results) => {
      if (err) {
        console.log('controller error: deleteReviewPhoto');
        res.status(500);
      } else {
        res.status(200).end();
      }
    });
  },
};
