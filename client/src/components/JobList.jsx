import { useState } from "react";

function JobList({
  jobs,
  deleteJob,
  updateJob,
}) {
  const [editingId, setEditingId] =
    useState(null);

  const [editData, setEditData] =
    useState({});

  // No Jobs Found

  if (jobs.length === 0) {
    return (
      <div className="alert alert-info">
        No jobs found.
      </div>
    );
  }

  return (
    <div>
      {jobs.map((job) => (
        <div
          key={job._id}
          className="card mt-3 p-3 shadow-sm"
        >
          {editingId === job._id ? (
            <>
              <input
                className="form-control mb-2"
                value={
                  editData.company || ""
                }
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    company:
                      e.target.value,
                  })
                }
              />

              <input
                className="form-control mb-2"
                value={
                  editData.position ||
                  ""
                }
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    position:
                      e.target.value,
                  })
                }
              />

              <select
                className="form-control mb-2"
                value={
                  editData.status || ""
                }
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    status:
                      e.target.value,
                  })
                }
              >
                <option>
                  Applied
                </option>

                <option>
                  Interview
                </option>

                <option>
                  Offer
                </option>

                <option>
                  Rejected
                </option>
              </select>

              <div className="mt-2">
                <button
                  className="btn btn-success me-2"
                  onClick={() => {
                    updateJob(
                      job._id,
                      editData
                    );

                    setEditingId(
                      null
                    );
                  }}
                >
                  Save
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() =>
                    setEditingId(
                      null
                    )
                  }
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <h5>
                {job.company}
              </h5>

              <p className="mb-2">
                {job.position}
              </p>

              <div className="mb-2">
                Status:{" "}
                <span
                  className={`badge ${
                    job.status ===
                    "Applied"
                      ? "bg-primary"
                      : job.status ===
                        "Interview"
                      ? "bg-warning text-dark"
                      : job.status ===
                        "Offer"
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  {job.status}
                </span>
              </div>

              <p className="text-muted">
                Applied:{" "}
                {new Date(
                  job.applicationDate
                ).toLocaleDateString()}
              </p>

              <div className="mt-2">
                <button
                  className="btn btn-warning me-2"
                  onClick={() => {
                    setEditingId(
                      job._id
                    );

                    setEditData(job);
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() =>
                    deleteJob(
                      job._id
                    )
                  }
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default JobList;