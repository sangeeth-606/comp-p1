const Usercard = () => {
  // Static user details
  const profilePhoto =
    "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/dexter_89.png";
  const name = "John Doe";
  const email = "johndoe@example.com";
  const phone = "+1 234 567 890";
  const address = "123 Main St, Springfield, USA";

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        maxWidth: "240px",
      }}
    >
      <img
        src={profilePhoto}
        alt="Profile"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          marginBottom: "0.5rem",
        }}
      />
      <h3 style={{ margin: "0.5rem 0", fontSize: "1.2rem" }}>{name}</h3>
      <p style={{ margin: "0.25rem 0", color: "#555" }}>{email}</p>
      <p style={{ margin: "0.25rem 0", color: "#555" }}>{phone}</p>
      <p style={{ margin: "0.25rem 0", color: "#555" }}>{address}</p>
    </div>
  );
};

export default Usercard;
