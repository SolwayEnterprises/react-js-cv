import React, {useState} from "react";
import ExperienceCard from "./experienceCard";
import experiences from "./experiences";
import Grid from '@mui/material/Grid';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LockIcon from '@mui/icons-material/Lock';

export default function Experience() {

  const [yAxis, setYAxis] = useState();
  const [value, setValue] = useState('1');
  const [screenWidth, recordSreenWidth] = useState();
  const [newHeight, setNewHeight] = useState();

  window.addEventListener('scroll', () => {
    setYAxis(window.scrollY);
    
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

  let visiblePoint = 1800;
  let endPictureStyle = {
    opacity: 0.7
  };
  if (screenWidth < 1000) {
    visiblePoint = 2100;
    endPictureStyle = {
      height: newHeight,
      opacity: 0.7
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <h2>My Experience</h2>
      <div className="end-picture" style={ yAxis >= visiblePoint ? endPictureStyle : null }>
      {screenWidth > 1000 ? <div style={{paddingTop: "5%"}}></div> : null }
        {screenWidth >= 1000 ? 
          <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                {experiences.map(experience => (
                  <Grid key={experience.key} item>
                    <ExperienceCard
                      key={experience.key}
                      link={experience.href}
                      image={experience.image}
                      alt={experience.alt}
                      title={experience.title}
                      content={experience.content}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid> :
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
  );
}
