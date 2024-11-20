# using resolved_model gpt-4o-2024-08-06# created from response, to create create_db_models.sqlite, with test data
#    that is used to create project
# should run without error in manager 
#    if not, check for decimal, indent, or import issues

import decimal
import logging
import sqlalchemy
from sqlalchemy.sql import func 
from logic_bank.logic_bank import Rule
from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, Date, DateTime, Numeric, Boolean, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import relationship
from datetime import date   
from datetime import datetime

logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

Base = declarative_base()  # from system/genai/create_db_models_inserts/create_db_models_prefix.py


class Survey(Base):
    """description: Stores survey details."""
    __tablename__ = 'survey'

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    created_date = Column(DateTime, nullable=False)



class Respondent(Base):
    """description: Stores respondent details."""
    __tablename__ = 'respondent'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String)



class Question(Base):
    """description: Holds questions for surveys."""
    __tablename__ = 'question'

    id = Column(Integer, primary_key=True, autoincrement=True)
    survey_id = Column(Integer, ForeignKey('survey.id'), nullable=False)
    text = Column(String, nullable=False)
    question_type = Column(String)



class Choice(Base):
    """description: Stores choices for multiple choice questions."""
    __tablename__ = 'choice'

    id = Column(Integer, primary_key=True, autoincrement=True)
    question_id = Column(Integer, ForeignKey('question.id'), nullable=False)
    text = Column(String, nullable=False)



class Response(Base):
    """description: Stores responses of respondents to questions."""
    __tablename__ = 'response'

    id = Column(Integer, primary_key=True, autoincrement=True)
    respondent_id = Column(Integer, ForeignKey('respondent.id'), nullable=False)
    question_id = Column(Integer, ForeignKey('question.id'), nullable=False)
    choice_id = Column(Integer, ForeignKey('choice.id'))
    response_text = Column(String)



class SurveyStatistics(Base):
    """description: Holds aggregated statistics for surveys."""
    __tablename__ = 'surveystatistics'

    id = Column(Integer, primary_key=True, autoincrement=True)
    survey_id = Column(Integer, ForeignKey('survey.id'), nullable=False)
    total_respondents = Column(Integer, nullable=False)
    average_score = Column(Float)  # Assuming some scoring is involved



class RespondentActivity(Base):
    """description: Tracks activity of each respondent over surveys."""
    __tablename__ = 'respondentactivity'

    id = Column(Integer, primary_key=True, autoincrement=True)
    respondent_id = Column(Integer, ForeignKey('respondent.id'), nullable=False)
    last_active_date = Column(DateTime)
    surveys_completed = Column(Integer, nullable=False, default=0)



class QuestionStatistics(Base):
    """description: Holds aggregated statistics for questions."""
    __tablename__ = 'questionstatistics'

    id = Column(Integer, primary_key=True, autoincrement=True)
    question_id = Column(Integer, ForeignKey('question.id'), nullable=False)
    total_responses = Column(Integer, nullable=False)
    most_chosen_choice = Column(Integer, ForeignKey('choice.id'))



class Topic(Base):
    """description: Stores topics related to surveys."""
    __tablename__ = 'topic'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)



class SurveyTopic(Base):
    """description: Links surveys with topics."""
    __tablename__ = 'surveytopic'

    id = Column(Integer, primary_key=True, autoincrement=True)
    survey_id = Column(Integer, ForeignKey('survey.id'), nullable=False)
    topic_id = Column(Integer, ForeignKey('topic.id'), nullable=False)



class QuestionType(Base):
    """description: Stores types of questions that can be used in surveys."""
    __tablename__ = 'questiontype'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)



class SurveyResponseSummary(Base):
    """description: Summarizes responses of specific surveys."""
    __tablename__ = 'surveyresponsesummary'

    id = Column(Integer, primary_key=True, autoincrement=True)
    survey_id = Column(Integer, ForeignKey('survey.id'), nullable=False)
    total_responses = Column(Integer, nullable=False)
    completion_rate = Column(Float)



# ALS/GenAI: Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# ALS/GenAI: Prepare for sample data

from datetime import datetime, date

# Creating test data for Survey
survey1 = Survey(id=1, title="Customer Satisfaction", created_date=date(2023, 1, 1))
survey2 = Survey(id=2, title="Product Feedback", created_date=date(2023, 2, 15))
survey3 = Survey(id=3, title="Employee Engagement", created_date=date(2023, 3, 10))
survey4 = Survey(id=4, title="Market Research", created_date=date(2023, 4, 5))

# Creating test data for Respondent
respondent1 = Respondent(id=1, name="John Doe", email="johndoe@example.com")
respondent2 = Respondent(id=2, name="Jane Smith", email="janesmith@example.com")
respondent3 = Respondent(id=3, name="Alice Johnson", email="alice@example.com")
respondent4 = Respondent(id=4, name="Bob Brown", email="bob@example.com")

# Creating test data for Question
question1 = Question(id=1, survey_id=1, text="How would you rate our service?", question_type="Scale")
question2 = Question(id=2, survey_id=1, text="Would you recommend us?", question_type="Yes/No")
question3 = Question(id=3, survey_id=2, text="What do you like most about the product?", question_type="Open")
question4 = Question(id=4, survey_id=3, text="How satisfied are you with your work-life balance?", question_type="Scale")

# Creating test data for Choice
choice1 = Choice(id=1, question_id=1, text="Excellent")
choice2 = Choice(id=2, question_id=1, text="Good")
choice3 = Choice(id=3, question_id=2, text="Yes")
choice4 = Choice(id=4, question_id=2, text="No")

# Creating test data for Response
response1 = Response(id=1, respondent_id=1, question_id=1, choice_id=1, response_text=None)
response2 = Response(id=2, respondent_id=2, question_id=2, choice_id=3, response_text=None)
response3 = Response(id=3, respondent_id=3, question_id=3, choice_id=None, response_text="User-friendly interface")
response4 = Response(id=4, respondent_id=4, question_id=4, choice_id=2, response_text=None)

# Creating test data for SurveyStatistics
survey_statistics1 = SurveyStatistics(id=1, survey_id=1, total_respondents=4, average_score=4.5)
survey_statistics2 = SurveyStatistics(id=2, survey_id=2, total_respondents=3, average_score=4.0)
survey_statistics3 = SurveyStatistics(id=3, survey_id=3, total_respondents=2, average_score=3.5)
survey_statistics4 = SurveyStatistics(id=4, survey_id=4, total_respondents=4, average_score=4.2)

# Creating test data for RespondentActivity
respondent_activity1 = RespondentActivity(id=1, respondent_id=1, last_active_date=date(2023, 5, 18), surveys_completed=1)
respondent_activity2 = RespondentActivity(id=2, respondent_id=2, last_active_date=date(2023, 5, 20), surveys_completed=1)
respondent_activity3 = RespondentActivity(id=3, respondent_id=3, last_active_date=date(2023, 5, 22), surveys_completed=1)
respondent_activity4 = RespondentActivity(id=4, respondent_id=4, last_active_date=date(2023, 5, 24), surveys_completed=1)

# Creating test data for QuestionStatistics
question_statistics1 = QuestionStatistics(id=1, question_id=1, total_responses=4, most_chosen_choice=1)
question_statistics2 = QuestionStatistics(id=2, question_id=2, total_responses=3, most_chosen_choice=3)
question_statistics3 = QuestionStatistics(id=3, question_id=3, total_responses=2, most_chosen_choice=None)
question_statistics4 = QuestionStatistics(id=4, question_id=4, total_responses=4, most_chosen_choice=2)

# Creating test data for Topic
topic1 = Topic(id=1, name="Customer Service", description="Related to customer service")
topic2 = Topic(id=2, name="Product Quality", description="Focus on product quality")
topic3 = Topic(id=3, name="Employee Satisfaction", description="Employee satisfaction and engagement")
topic4 = Topic(id=4, name="Market Trends", description="Observations about market trends")

# Creating test data for SurveyTopic
survey_topic1 = SurveyTopic(id=1, survey_id=1, topic_id=1)
survey_topic2 = SurveyTopic(id=2, survey_id=2, topic_id=2)
survey_topic3 = SurveyTopic(id=3, survey_id=3, topic_id=3)
survey_topic4 = SurveyTopic(id=4, survey_id=4, topic_id=4)

# Creating test data for QuestionType
question_type1 = QuestionType(id=1, name="Scale", description="Numerical scale from 1 to 10")
question_type2 = QuestionType(id=2, name="Yes/No", description="Binary yes or no choice")
question_type3 = QuestionType(id=3, name="Open", description="Open-ended question")
question_type4 = QuestionType(id=4, name="Multiple Choice", description="Several options to choose from")

# Creating test data for SurveyResponseSummary
survey_response_summary1 = SurveyResponseSummary(id=1, survey_id=1, total_responses=4, completion_rate=0.75)
survey_response_summary2 = SurveyResponseSummary(id=2, survey_id=2, total_responses=3, completion_rate=0.66)
survey_response_summary3 = SurveyResponseSummary(id=3, survey_id=3, total_responses=2, completion_rate=0.5)
survey_response_summary4 = SurveyResponseSummary(id=4, survey_id=4, total_responses=4, completion_rate=1.0)


session.add_all([survey1, survey2, survey3, survey4, respondent1, respondent2, respondent3, respondent4, question1, question2, question3, question4, choice1, choice2, choice3, choice4, response1, response2, response3, response4, survey_statistics1, survey_statistics2, survey_statistics3, survey_statistics4, respondent_activity1, respondent_activity2, respondent_activity3, respondent_activity4, question_statistics1, question_statistics2, question_statistics3, question_statistics4, topic1, topic2, topic3, topic4, survey_topic1, survey_topic2, survey_topic3, survey_topic4, question_type1, question_type2, question_type3, question_type4, survey_response_summary1, survey_response_summary2, survey_response_summary3, survey_response_summary4])
session.commit()
