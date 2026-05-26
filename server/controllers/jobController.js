const Job = require("../models/Job");

// ============================
// Create Job
// ============================

exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({
      user: req.user._id,
      company: req.body.company,
      position: req.body.position,
      status: req.body.status,
      notes: req.body.notes,
      interviewDate:
        req.body.interviewDate,
    });

    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ============================
// Update Job
// ============================

job.company =
  req.body.company || job.company;

job.position =
  req.body.position || job.position;

job.status =
  req.body.status || job.status;

job.notes =
  req.body.notes || job.notes;

job.interviewDate =
  req.body.interviewDate ||
  job.interviewDate;

// ============================
// Delete Job
// ============================

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!job) {
      return res.status(404).json({
        message: "Job not found",
      });
    }

    await job.deleteOne();

    res.json({
      message: "Job deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// ============================
// Dashboard Stats
// ============================

exports.getJobStats = async (req, res) => {
  try {
    const jobs = await Job.find({
      user: req.user._id,
    });

    const stats = {
      total: jobs.length,
      applied: jobs.filter(
        (job) => job.status === "Applied"
      ).length,
      interview: jobs.filter(
        (job) => job.status === "Interview"
      ).length,
      offer: jobs.filter(
        (job) => job.status === "Offer"
      ).length,
      rejected: jobs.filter(
        (job) => job.status === "Rejected"
      ).length,
    };

    res.json(stats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};