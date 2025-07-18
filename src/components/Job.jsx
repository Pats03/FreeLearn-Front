import {
  FaLocationArrow,
  FaFilePdf,
  FaBriefcase,
  FaCalendarAlt,
  FaCheckCircle,
} from 'react-icons/fa';

import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
import JobInfo from './JobInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { useAllJobsContext } from '../pages/Allsubs';
import styled from 'styled-components';
import { useState } from 'react';
day.extend(advancedFormat);

const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1em; /* Adjust font size as needed */
`;

const VerifyButton = styled.button`
  background-color: #ffffff; /* Button color */
  color: black; /* Button text color */
  border: none; /* Remove border */
  padding: 5px 10px; /* Button padding */
  cursor: pointer; /* Change cursor on hover */
  border-radius: 5px; /* Rounded corners */
  display: flex;
  align-items: center;
  font-size: 1em;

  &:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }
`;

const VerifyIcon = styled(FaCheckCircle)`
  margin-right: 5px; /* Space between icon and text */
  color: green; /* Change icon color to green */
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 10px; /* Reduced horizontal padding */
  border: 1px solid #0b0707;
  border-radius: 4px;
  background-color: #ffffff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: auto; /* Adjust width as needed */
  max-width: 100px; /* Limit width if necessary */

  &:hover {
    background-color: #272727;
  }
`;



const Job = ({ _id, file, teacher, topics, createdAt, verified , user}) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  const chapter = topics?.Chapter;
  const subject = chapter?.subject;
  const standard = subject?.standard?.standard;
  //const user=props.user;
  //console.log(user);
  //const { user} = useAllJobsContext();
   const showPdf = () => {
     // Logic to handle PDF download
    window.open(`http://localhost:5100/files/${file}`, '_blank', 'noreferrer');
    // setpdf(`http://localhost:5100/files/${file}`);
    // setshow(true);
    };
    
    const onVerify=()=>{

    }
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{standard}</div>
        <div className="info">
          <h5>{chapter?.name}</h5>
          <p>{topics?.name}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <Button onClick={showPdf}>
            <JobInfo icon={<FaFilePdf />} text="pdf" />
          </Button>
          <JobInfo icon={<FaBriefcase />} text={teacher.name} />
          <StatusWrapper className={verified ? 'verified' : 'not-verified'}>
            {user.role === 'legend' ? (
              verified ? (
                <>
                  <VerifyIcon /> Verified
                </>
              ) : (
               < Form method="post" action={`../verifycontent/${_id}`}>
                <VerifyButton>
                  <VerifyIcon /> Verify
                </VerifyButton>
                </Form>
              )
            ) : (
              <span>{verified ? 'Verified' : 'Not Verified'}</span>
            )}
          </StatusWrapper>
        </div>

        <footer className="actions">
          {user.role === 'admin' && (
            <Link
              to={`/dashboard/edit-content/${_id}`}
              className="btn edit-btn"
            >
              Edit
            </Link>
          )}
          {user.role === 'legend' && (
            <>
              <Link to={`../edit-content/${_id}`} className="btn edit-btn">
                Edit
              </Link>
              <Form method="post" action={`../delete-content/${_id}`}>
                <button type="submit" className="btn delete-btn">
                  Delete
                </button>
              </Form>
            </>
          )}
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
