import React, { useState, useEffect } from "react";
import "./CollegeTable.css";
import collegeData from "./colleges.json";

const CollegeTable = () => {
  const [colleges, setColleges] = useState([]);
  const [visibleColleges, setVisibleColleges] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  useEffect(() => {
    setColleges(collegeData);
  }, []);

  // This function handles loading more colleges as the user scrolls down.
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        setVisibleColleges((prevVisibleColleges) =>
          Math.min(prevVisibleColleges + 10, colleges.length)
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [colleges.length]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (key) => {
    let order = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(order);
    setSortKey(key);
    const sortedData = [...colleges].sort((a, b) => {
      if (key === "fees" || key === "userRating") {
        return order === "asc" ? a[key] - b[key] : b[key] - a[key];
      }
      return order === "asc" ? a[key] - b[key] : b[key] - a[key];
    });
    setColleges(sortedData);
  };

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRowClick = (index) => {
    setSelectedRowIndex(index);
  };

  return (
    <div className="table-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by college name"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <table className="college-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("rank")}>CD Rank</th>
            <th>Colleges</th>
            <th onClick={() => handleSort("fees")}>Course Fees</th>
            <th>Placement</th>
            <th onClick={() => handleSort("userRating")}>User Reviews</th>
            <th>Ranking</th>
          </tr>
        </thead>
        <tbody>
          {filteredColleges.slice(0, visibleColleges).map((college, index) => (
            <tr
              key={index}
              onMouseEnter={() => handleRowClick(index)}
              style={{
                backgroundColor:
                  selectedRowIndex === index ? "#fef1e6" : "white",
              }}
            >
              <td>{`#${college.rank}`}</td>
              <td>
                <div className="college-info">
                  <img
                    src={college.logo_path}
                    alt={`${college.name} Logo`}
                    className="college-logo"
                  />
                  <div>
                    <h4>{college.name}</h4>
                    <p>
                      {college.location} | {college.approval}
                    </p>
                    <p>
                      <b>{college.course}</b>
                    </p>
                    <p>JEE-Advanced 2023 Cutoff: {college.cutoff}</p>
                    <div className="action-links">
                      <a href="#">Apply Now</a> |{" "}
                      <a href="#">Download Brochure</a>
                    </div>
                    {college.featured && (
                      <span className="featured-flag">Featured</span>
                    )}
                  </div>
                </div>
              </td>
              <td>
                <p>{`₹ ${college.fees.toLocaleString()}`}</p>
                <p>{college.course} - 1st Year Fees</p>
                <a href="#">Compare Fees</a>
              </td>
              <td>
                <p>{`₹ ${college.averagePackage.toLocaleString()}`}</p>
                <p>Average Package</p>
                <p>{`₹ ${college.highestPackage.toLocaleString()}`}</p>
                <p>Highest Package</p>
                <a href="#">Compare Placement</a>
              </td>
              <td>
                <p>{`${college.userRating} / 10`}</p>
                <p>Based on {college.userReviews} User Reviews</p>
                <a href="#">{`Best in ${college.bestFor}`}</a>
              </td>
              <td>
                <p>{college.ranking}</p>
                <p>
                  <b>{college.rankingYear}</b>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollegeTable;
