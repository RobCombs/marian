'use strict';

var _ = require('lodash');
var Assignment = require('./assignment.model');

// Get list of assignments
exports.index = function(req, res) {
  Assignment.find(function (err, assignments) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(assignments);
  });
};

// Get a single assignment
exports.show = function(req, res) {
  Assignment.findById(req.params.id, function (err, assignment) {
    if(err) { return handleError(res, err); }
    if(!assignment) { return res.status(404).send('Not Found'); }
    return res.json(assignment);
  });
};

// Creates a new assignment in the DB.
exports.create = function(req, res) {
  Assignment.create(req.body, function(err, assignment) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(assignment);
  });
};

// Updates an existing assignment in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Assignment.findById(req.params.id, function (err, assignment) {
    if (err) { return handleError(res, err); }
    if(!assignment) { return res.status(404).send('Not Found'); }
    var updated = _.merge(assignment, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(assignment);
    });
  });
};

// Deletes a assignment from the DB.
exports.destroy = function(req, res) {
  Assignment.findById(req.params.id, function (err, assignment) {
    if(err) { return handleError(res, err); }
    if(!assignment) { return res.status(404).send('Not Found'); }
    assignment.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}