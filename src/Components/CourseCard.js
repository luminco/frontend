import React from 'react';
import { Link } from 'react-router-dom';
import placeholderImg from '../Assets/Images/course-card-bg.png';
import "../index.css";

const CourseCard = ({
  courseId,
  term,
  courseName,
  instructorName,
  courseImage,
}) => {
  return (
    <article className="course-card" id={`course-card-${courseId}`}>
      <img
        src={courseImage || placeholderImg}
        alt={courseName || 'Course'}
        className="course-img"
        onError={(e) => { e.target.src = placeholderImg; }}
      />
      <div className="card-text">
        <h4 className="course-name">{courseName || 'Untitled Course'}</h4>
        {instructorName && (
          <p className="instructor-name">{instructorName}</p>
        )}
        <Link
          to={`/courses/${term}/${courseId}`}
          className="cta-btn coursecard"
        >
          Visit Course
        </Link>
      </div>
    </article>
  );
};

export default CourseCard;
