const Class = require('../models/class');
exports.createClass =  (req, res, next) => {
    const NClass = new Class({
      idClass: req.body.idClass,
      level: req.body.level,
      name: req.body.name,
      number: req.body.number,
      schoolYear: req.body.schoolYear
    });
    NClass.save().then(
      () => {
        res.status(201).json({
          message: 'Class saved successfully!'
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

exports.getOneClass = (req, res, next) => {
    Class.findOne({
      _id: req.params.idClass
    }).then(
      (SClass) => {
        res.status(200).json(SClass);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
}

exports.modifyClass = (req, res, next) => {
    const SClass = new Class({
      _id: req.params.idClass,
      level: req.body.level,
      name: req.body.name,
      number: req.body.number,
      schoolYear: req.body.schoolYear,
    });
    Class.updateOne({_id: req.params.idClass}, SClass).then(
      () => {
        res.status(201).json({
          message: 'Class updated successfully!'
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
exports.deleteClass =  (req, res, next) => {
    Class.deleteOne({_id: req.params.idClass}).then(
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
exports.getAllClasses =  (req, res, next) => {
    Class.find().then(
      (Classes) => {
        res.status(200).json(Classes);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }