import { useState } from "react";

function JobForm({ addJob }) {
  const [job, setJob] = useState({
    company: "",
    position: "",
    status: "Applied",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    addJob(job);

    setJob({
      company: "",
      position: "",
      status: "Applied",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className="form-control mb-2"
        placeholder="Company"
        value={job.company}
        onChange={(e) =>
          setJob({
            ...job,
            company: e.target.value,
          })
        }
        required
      />

      <input
        className="form-control mb-2"
        placeholder="Position"
        value={job.position}
        onChange={(e) =>
          setJob({
            ...job,
            position: e.target.value,
          })
        }
        required
      />

      <select
        className="form-control mb-2"
        value={job.status}
        onChange={(e) =>
          setJob({
            ...job,
            status: e.target.value,
          })
        }
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button className="btn btn-success">
        Add Job
      </button>
    </form>
  );
}

export default JobForm;