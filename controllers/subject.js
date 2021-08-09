const Subject = require('../models/subject');
exports.createSubject =  (req, res, next) => {
    const subject = new Subject({
      idSubject: req.body.idSubject,
      level: req.body.level,
      libel: req.body.libel
    });
    subject.save().then(
      () => {
        res.status(201).json({
          message: 'Subject saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }

exports.getOneSubject = (req, res, next) => {
    Subject.findOne({
      _id: req.params.idSubject
    }).then(
      (subject) => {
        res.status(200).json(subject);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
}

exports.modifySubject = (req, res, next) => {
    const subject = new Subject({
      _id: req.params.idSubject,
      level: req.body.level,
      libel: req.body.libel
    });
    Subject.updateOne({_id: req.params.idSubject}, subject).then(
      () => {
        res.status(201).json({
          message: 'Subject updated successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
exports.deleteSubject =  (req, res, next) => {
    Subject.deleteOne({_id: req.params.idSubject}).then(
      () => {
        res.status(200).json({
          message: 'Deleted!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
exports.getAllSubjects =  (req, res, next) => {
    Subject.find().then(
      (Subjects) => {
        res.status(200).json(Subjects);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }