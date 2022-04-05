import React, {useState} from "react";
import ExperienceCard from "./experienceCard";
import experiences from "./experiences";
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LockIcon from '@mui/icons-material/Lock';

export default function Experience() {

  const [value, setValue] = useState('1');
  const [screenWidth, recordSreenWidth] = useState();
  const [newHeight, setNewHeight] = useState();

  window.addEventListener('scroll', () => {
    let newSize = '';
    recordSreenWidth(window.innerWidth);
    if (screenWidth < 1000 && screenWidth > 750) {
      newSize = 1000 - screenWidth + 440 + 'px';
      setNewHeight(newSize);
    }
    if (screenWidth <= 750) {
      newSize = 750 - screenWidth + 440 + 'px';
      setNewHeight(newSize);
    }
  });

  const experienceStyle = {
    display: "flex",
    marginLeft: "26%"
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h2>My Experience</h2>
      <div className="end-picture" style={ screenWidth < 1000 ? {height: newHeight} : null }>
        <div style={ screenWidth >= 1000 ? experienceStyle : null }>
          {screenWidth >= 1000 ?
            experiences.map(experience => (
              <ExperienceCard 
                key={experience.key}
                link={experience.href}
                image={experience.image}
                alt={experience.alt}
                title={experience.title}
                content={experience.content}
              />
            )) :
            <TabContext value={value}>
              {experiences.map(experience => (
                <TabPanel align='center' key={experience.key} value={experience.key.toString()}>
                  <ExperienceCard 
                    key={experience.key}
                    link={experience.href}
                    image={experience.image}
                    alt={experience.alt}
                    title={experience.title}
                    content={experience.content}
                  />
                </TabPanel>
              ))}
              <TabList onChange={handleChange} centered aria-label="experiences nav">
                <Tab icon={<MultipleStopIcon />} label="API" value="1" />
                <Tab icon={<DynamicFeedIcon />} label="EJS" value="2" />
                <Tab icon={<LockIcon />} label="security" value="3" />
              </TabList>
            </TabContext>
          }
        </div>
      </div>
    </div>
  );
}