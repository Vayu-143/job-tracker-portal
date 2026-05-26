import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import Filter from "../components/Filter";
import StatsChart from "../components/StatsChart";

import API from "../services/api";

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const addJob = async (job) => {
    try {
      await API.post("/jobs", job);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await API.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const updateJob = async (
    id,
    updatedJob
  ) => {
    try {
      await API.put(
        `/jobs/${id}`,
        updatedJob
      );

      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.company
        .toLowerCase()
        .includes(
          search.toLowerCase()
        ) &&
      (status
        ? job.status === status
        : true)
  );

  const totalJobs = jobs.length;

  const applied = jobs.filter(
    (job) =>
      job.status === "Applied"
  ).length;

  const interview = jobs.filter(
    (job) =>
      job.status === "Interview"
  ).length;

  const offer = jobs.filter(
    (job) =>
      job.status === "Offer"
  ).length;

  const rejected = jobs.filter(
    (job) =>
      job.status === "Rejected"
  ).length;

  const successRate =
    totalJobs > 0
      ? (
          ((offer + interview) /
            totalJobs) *
          100
        ).toFixed(1)
      : 0;

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h2 className="mb-4">
          Dashboard
        </h2>

        {/* Statistics Cards */}

        <div className="row mb-4">
          <div className="col">
            <div className="card p-3">
              Total: {totalJobs}
            </div>
          </div>

          <div className="col">
            <div className="card p-3">
              Applied: {applied}
            </div>
          </div>

          <div className="col">
            <div className="card p-3">
              Interview: {interview}
            </div>
          </div>

          <div className="col">
            <div className="card p-3">
              Offer: {offer}
            </div>
          </div>

          <div className="col">
            <div className="card p-3">
              Rejected: {rejected}
            </div>
          </div>
        </div>

        {/* Analytics Chart */}

        <StatsChart
          applied={applied}
          interview={interview}
          offer={offer}
          rejected={rejected}
        />

        {/* Success Rate */}

        <div className="card p-3 my-3 text-center">
          <h4>
            🎯 Success Rate
          </h4>

          <h2 className="text-success">
            {successRate}%
          </h2>
        </div>

        {/* Add Job Form */}

        <JobForm addJob={addJob} />

        <hr />

        {/* Search */}

        <input
          className="form-control mb-3"
          placeholder="Search company..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {/* Status Filter */}

        <Filter
          selected={status}
          setSelected={setStatus}
        />

        {/* Job List */}

        <JobList
          jobs={filteredJobs}
          deleteJob={deleteJob}
          updateJob={updateJob}
        />
      </div>
    </>
  );
}

export default Dashboard;