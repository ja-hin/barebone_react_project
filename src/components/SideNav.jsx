import cloud from "../assets/cloud.png";
import cube from "../assets/cube.png";
const SideNav = () => {
  return (
    <aside
      style={{
        width: "7%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#b3d9e3',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap:'7px',
          alignItems: "center",
          height: "100%",
        }}
      >
        <img
          src={cloud}
          alt="cloud"
          style={{ width: "70px", height: "80px" }}
        />
        <img
          src={cube}
          alt="cube"
          style={{ width: "70px", height: "40px" }}
        />
        <img
          src={cube}
          alt="cube"
          style={{ width: "70px", height: "40px" }}
        />
        <img
          src={cube}
          alt="cube"
          style={{ width: "70px", height: "40px" }}
        />
        <img
          src={cube}
          alt="cube"
          style={{ width: "70px", height: "40px" }}
        />
        <img
          src={cube}
          alt="cube"
          style={{ width: "70px", height: "40px" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#b88fcf",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "30px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        {" "}
        DK
      </div>
    </aside>
  );
};

export default SideNav;
