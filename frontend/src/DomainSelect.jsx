function DomainSelect({ domains, onSelect }) {
  return (
    <div style={{ textAlign: "center", marginTop: "1rem", marginBottom: "2rem" }}>
      <label htmlFor="domain">Select Domain Objective: </label>
      <select id="domain" onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Choose One --</option>
        {domains.map((domain, idx) => (
          <option key={idx} value={domain}>
            {domain}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DomainSelect;
