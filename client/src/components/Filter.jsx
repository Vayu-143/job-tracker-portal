function Filter({
  selected,
  setSelected,
}) {
  return (
    <select
      className="form-control mb-3"
      value={selected}
      onChange={(e) =>
        setSelected(e.target.value)
      }
    >
      <option value="">
        All Status
      </option>

      <option>Applied</option>

      <option>Interview</option>

      <option>Offer</option>

      <option>Rejected</option>
    </select>
  );
}

export default Filter;