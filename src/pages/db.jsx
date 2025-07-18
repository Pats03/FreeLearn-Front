import { toast } from 'react-toastify';
import { JobsContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useOutletContext } from 'react-router-dom';

const extractMedia = (subjects) => {
  let mediaArray = [];

  subjects.forEach((subject) => {
    subject.chapters.forEach((chapter) => {
      chapter.topics.forEach((topic) => {
        mediaArray = [...mediaArray, ...topic.media];
      });
    });
  });

  return mediaArray;
};

export const loader = async () => {
  try {
    const { data } = await customFetch('/teacher/recentcontent');
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Wrapper = styled.div`
  text-align: center;
  margin: 20px;
`;

const WelcomeMessage = styled.h1`
  font-family: 'Dancing Script', cursive; /* Calligraphy font */
  font-size: 2.5em;
  color: pink;
  /* Neutral highlight color */
`;

const Quote = styled.p`
  font-family: 'Dancing Script', cursive; /* Calligraphy font */
  font-size: 1.5em;
  color: black; /* Neutral secondary text color */
  //background-color:#407C81;

  margin: 20px 0;
`;

const Timer = styled.h2`
  font-family: 'Verdana', sans-serif;
  font-size: 1.8em;
  color: #031b29; /* Neutral text color */
`;

const Section = styled.div`
  border: 3px solid;
  padding: 16px;
  margin-bottom: 16px;
  background-color: var(--dark-mode-bg-secondary-color);
  text-align: left;
`;

const SectionTitle = styled.h3`
  font-family: 'Tahoma', sans-serif;
  font-size: 2em;
  //color: black; /* Red text color */
  margin-bottom: 0.5; /* Reduce gap */
`;

const TaskCount = styled.p`
  font-family: 'Tahoma', sans-serif;
  font-size: 1.2em;
  color: #114e73; /* Neutral tertiary text color */
`;

const JobsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const Db = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const { user, verifiedMediaCount, uploadedCount } = useOutletContext();
  var data1;
  
    const { data } = useLoaderData();
    data1 = data;
  

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Mock data for tasks (you can replace this with real data fetching)

    return () => clearInterval(timer);
  }, []);
  var sliceData;
  var media;
  if (user.role === 'admin') {
    const slicedData1 = {
      ...data1,
      media: data1.media.slice(0, 2),
    };
    sliceData = slicedData1;
  }
  else if(user.role==='user')
  {
    media=extractMedia(data1.subjects);
  }

  return (
    <Wrapper>
      <WelcomeMessage>Welcome {user.name} !!!</WelcomeMessage>

      {user.role === 'admin' && (
        <Quote>
          "The best teachers teach from the heart, not from the book." - Unknown
        </Quote>
      )}
      {/* <Timer>Current Time: {time}</Timer> */}
      <Section>
        {/* <SectionTitle>Tasks Overview</SectionTitle>
        <br />
        <TaskCount>Uploaded Tasks:{uploadedCount}</TaskCount>
       
        <br />
        <TaskCount>Verified Tasks: {verifiedMediaCount}</TaskCount> */}
        {/* {show&& <PdfComp pdf={pdf}/>} */}
        <SectionTitle>Recent Uploads</SectionTitle>

        {user.role === 'admin' && (
          <JobsContainer content={sliceData} user={user} />
        )}
        {user.role === 'user' && (
          <JobsContainer content={{media:media}} user={user} />
        )}
      </Section>
    </Wrapper>
  );
};

export default Db;
