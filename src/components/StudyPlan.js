// src/components/StudyPlan.js
import React, { useState } from 'react';

const StudyPlan = () => {
  const [studyPlan, setStudyPlan] = useState({
    phases: [
      {
        phase: "Learning Phase",
        duration: "Days 1-600",
        topics: [
          {
            title: "Foundations",
            subjects: [
              { name: "Engineering Mathematics I", details: "Focus on Calculus and Linear Algebra." },
              { name: "C Programming", details: "Cover basics, control structures, and functions." },
              { name: "Python Basics", details: "Syntax, data types, and control structures." }
            ],
            activities: ["Complete chapters", "Solve exercises", "Take notes"]
          },
          // Add more topics here...
        ]
      },
      // Add more phases here...
    ]
  });

  const deleteTopic = (phaseIndex, topicIndex) => {
    const updatedPhases = studyPlan.phases.map((phase, pIdx) => {
      if (pIdx === phaseIndex) {
        const updatedTopics = phase.topics.filter((_, tIdx) => tIdx !== topicIndex);
        return { ...phase, topics: updatedTopics };
      }
      return phase;
    });
    setStudyPlan({ phases: updatedPhases });
  };

  const editTopic = (phaseIndex, topicIndex, newTitle) => {
    const updatedPhases = studyPlan.phases.map((phase, pIdx) => {
      if (pIdx === phaseIndex) {
        const updatedTopics = phase.topics.map((topic, tIdx) => {
          if (tIdx === topicIndex) {
            return { ...topic, title: newTitle };
          }
          return topic;
        });
        return { ...phase, topics: updatedTopics };
      }
      return phase;
    });
    setStudyPlan({ phases: updatedPhases });
  };

  const addSubject = (phaseIndex, topicIndex) => {
    const subjectName = prompt("Enter subject name:");
    const subjectDetails = prompt("Enter subject details:");
    if (subjectName && subjectDetails) {
      const updatedPhases = studyPlan.phases.map((phase, pIdx) => {
        if (pIdx === phaseIndex) {
          const updatedTopics = phase.topics.map((topic, tIdx) => {
            if (tIdx === topicIndex) {
              return {
                ...topic,
                subjects: [...topic.subjects, { name: subjectName, details: subjectDetails }]
              };
            }
            return topic;
          });
          return { ...phase, topics: updatedTopics };
        }
        return phase;
      });
      setStudyPlan({ phases: updatedPhases });
    }
  };

  const deleteSubject = (phaseIndex, topicIndex, subjectIndex) => {
    const updatedPhases = studyPlan.phases.map((phase, pIdx) => {
      if (pIdx === phaseIndex) {
        const updatedTopics = phase.topics.map((topic, tIdx) => {
          if (tIdx === topicIndex) {
            const updatedSubjects = topic.subjects.filter((_, sIdx) => sIdx !== subjectIndex);
            return { ...topic, subjects: updatedSubjects };
          }
          return topic;
        });
        return { ...phase, topics: updatedTopics };
      }
      return phase;
    });
    setStudyPlan({ phases: updatedPhases });
  };

  const addActivity = (phaseIndex, topicIndex) => {
    const activity = prompt("Enter activity:");
    if (activity) {
      const updatedPhases = studyPlan.phases.map((phase, pIdx) => {
        if (pIdx === phaseIndex) {
          const updatedTopics = phase.topics.map((topic, tIdx) => {
            if (tIdx === topicIndex) {
              return { ...topic, activities: [...topic.activities, activity] };
            }
            return topic;
          });
          return { ...phase, topics: updatedTopics };
        }
        return phase;
      });
      setStudyPlan({ phases: updatedPhases });
    }
  };

  const deleteActivity = (phaseIndex, topicIndex, activityIndex) => {
    const updatedPhases = studyPlan.phases.map((phase, pIdx) => {
      if (pIdx === phaseIndex) {
        const updatedTopics = phase.topics.map((topic, tIdx) => {
          if (tIdx === topicIndex) {
            const updatedActivities = topic.activities.filter((_, aIdx) => aIdx !== activityIndex);
            return { ...topic, activities: updatedActivities };
          }
          return topic;
        });
        return { ...phase, topics: updatedTopics };
      }
      return phase;
    });
    setStudyPlan({ phases: updatedPhases });
  };

  return (
    <div>
      <h2>1000-Day Study Plan</h2>
      {studyPlan.phases.map((phase, phaseIndex) => (
        <div key={phaseIndex}>
          <h3>{phase.phase} ({phase.duration})</h3>
          {phase.topics.map((topic, topicIndex) => (
            <div key={topicIndex}>
              <h4>
                <input
                  type="text"
                  value={topic.title}
                  onChange={(e) => editTopic(phaseIndex, topicIndex, e.target.value)}
                />
                <button onClick={() => deleteTopic(phaseIndex, topicIndex)}>Delete</button>
                <button onClick={() => addSubject(phaseIndex, topicIndex)}>Add Subject</button>
                <button onClick={() => addActivity(phaseIndex, topicIndex)}>Add Activity</button>
              </h4>
              <ul>
                {topic.subjects.map((subject, sIdx) => (
                  <li key={sIdx}>
                    <strong>{subject.name}:</strong> {subject.details}
                    <button onClick={() => deleteSubject(phaseIndex, topicIndex, sIdx)}>Delete</button>
                  </li>
                ))}
              </ul>
              <h5>Activities:</h5>
              <ul>
                {topic.activities.map((activity, aIdx) => (
                  <li key={aIdx}>
                    {activity}
                    <button onClick={() => deleteActivity(phaseIndex, topicIndex, aIdx)}>Delete</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default StudyPlan;