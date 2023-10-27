import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>TRANG QUẢN TRỊ ADMIN</h1>
      <ul className="list-group" style={styles.navbar}>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/product">
            Tất cả sản phẩm
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/category">
            Danh mục
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/brand">
            Thương hiệu
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/menu">
            Menu
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/contact">
            Contact
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/order">
            Order
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/slider">
            Slider
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/topic">
            Topic
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/user">
            User
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/post">
            Post
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/quan-li-trang-don">
            Quản lí trang đơn
          </Link>
        </li>
        <li className="list-group-item" style={styles.navItem}>
          <Link style={styles.navLink} to="/admin/member">
            Quản lí thành viên
          </Link>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: " rgba(133, 20, 20, 0.5)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 2px 4px rgba(133, 20, 20, 0.5)",
    border: "1px solid black",
    flexDirection: "column",
    alignItems: "center",
  },
  heading: {
    color: "black",
    margin: "0",
    marginBottom: "20px",
    fontSize: "36px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    borderBottom: "2px solid black",
    paddingBottom: "10px",
    textAlign: "center",
  },
  navbar: {
    padding: "0",
    margin: "0",
  },
  navItem: {
    marginBottom: "10px",
    transition: "all 0.3s",
    border: "1px solid black",
    borderRadius: "5px",
  },
  navLink: {
    textDecoration: "none",
    color: "rgba(133, 20, 20, 0.5)",
    fontSize: "20px",
    transition: "color 0.3s",
    paddingLeft: "20px",
    display: "block",
    padding: "10px",
  },
  
};

export default Dashboard;